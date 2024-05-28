<template>
  <div class="fc-style">
    <a-form ref="generateForm" :model="model" :rules="rules" :layout="widgetForm.config.layout"
      :labelAlign="widgetForm.config.labelAlign" :labelCol="widgetForm.config.labelCol"
      :hideRequiredMark="widgetForm.config.hideRequiredMark">
      <template v-for="(element, index) of widgetForm.list">
        <template v-if="element.type === 'grid'">
          <a-row type="flex" v-if="element.key" :key="element.key" :gutter="element.options.gutter ?? 0"
            :justify="element.options.justify" :align="element.options.align">
            <a-col v-for="(col, colIndex) of element.columns" :key="colIndex" :span="col.span ?? 0">
              <AntdGenerateFormItem v-for="colItem of col.list" :model="model" :key="colItem.key" :element="colItem"
                :config="data.config" :disabled="disabled" v-bind="$attrs" />
            </a-col>
          </a-row>
        </template>
        <AntdGenerateFormItem v-else :model="model" :key="element.key" :element="widgetForm.list[index]"
          :config="data.config" :disabled="disabled" v-bind="$attrs" />
      </template>
    </a-form>
  </div>
</template>

<script>
import AntdGenerateFormItem from './AntdGenerateFormItem.vue'
import { widgetForm } from './config'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AntdGenerateForm',
  components: {
    AntdGenerateFormItem
  },
  props: {
    data: {
      type: Object,
      default: widgetForm
    },
    value: {
      type: Object
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const state = reactive({
      generateForm: null,
      model: {},
      rules: {},
      widgetForm:
        (props.data && JSON.parse(JSON.stringify(props.data))) ??
        widgetForm
    })

    const generateModel = (list) => {
      for (let index = 0; index < list.length; index++) {
        const model = list[index].model
        if (!model) {
          return
        }
        if (list[index].type === 'grid') {
          list[index].columns.forEach((col) => generateModel(col.list))
        } else {
          if (props.value && Object.keys(props.value).includes(model)) {
            state.model[model] = props.value[model]
          } else {
            state.model[model] = list[index].options.defaultValue
          }
          const { rules } = list[index].options
          if (rules) {
            state.rules[model] = JSON.parse(JSON.stringify(rules))
            if (state.rules[model].enum) {
              state.rules[model].enum = evalFn(state.rules[model].enum)
            }

            if (state.rules[model].pattern) {
              state.rules[model].pattern = evalFn(state.rules[model].pattern)
              state.rules[model].type = 'string'
            }
          }
        }
      }
    }
    function evalFn(fn) {
      return new Function('return' + fn)
    }

    const generateOptions = (list) => {
      list.forEach((item) => {
        if (item.type === 'grid') {
          item.columns.forEach((col) => generateOptions(col.list))
        } else {
          if (item.options.remote && item.options.remoteFunc) {
            fetch(item.options.remoteFunc)
              .then((resp) => {
                return resp.json()
              })
              .then((json) => {
                if (json instanceof Array) {
                  item.options.remoteOptions = json.map((data) => ({
                    label: data[item.options.props.label],
                    value: data[item.options.props.value],
                    children: data[item.options.props.children]
                  }))
                }
              })
          }
        }
      })
    }

    const reset = () => {
      nextTick(() => {
        state.generateForm.resetFields()
      })
    }
    watch(
      () => props.data,
      (val) => {
        state.widgetForm =
          (val && JSON.parse(JSON.stringify(val))) ?? widgetForm
        state.model = {}
        state.rules = {}
        generateModel(state.widgetForm.list)
        generateOptions(state.widgetForm.list)
        reset()
      },
      { deep: true, immediate: true }
    )

    onMounted(() => {
      generateModel(state.widgetForm?.list ?? [])
      generateOptions(state.widgetForm?.list ?? [])
      reset()
    })

    const getData = async () => {
      try {
        state.generateForm.validate()
      } catch {
        return
      }
      return state.model
    }

    return {
      ...toRefs(state),
      getData,
      reset
    }
  }
})
</script>
