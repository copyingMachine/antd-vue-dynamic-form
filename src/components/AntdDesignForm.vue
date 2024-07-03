<template>
  <div class="fc-style">
    <a-layout class="fc-container">
      <a-layout-content class="fc-main">
        <a-layout>
          <a-layout-sider theme="light" :width="250">
            <div class="components">
              <ComponentGroup title="基础字段" :fields="basicFields" :list="antd.basicComponents" />
              <ComponentGroup title="高级字段" :fields="advanceFields" :list="antd.advanceComponents" />
              <!-- <ComponentGroup title="布局字段" :fields="layoutFields" :list="antd.layoutComponents" /> -->
            </div>
          </a-layout-sider>
          <a-layout class="center-container">
            <AntdHeader v-bind="$props"
              @preview="previewVisible = customPreview === false, $emit('preview', widgetForm)"
              @save="$emit('save', widgetForm)" @uploadJson="() => (uploadJsonVisible = true)"
              @generateJson="handleGenerateJson" @clearable="handleClearable">
              <slot name="header"></slot>
            </AntdHeader>
            <a-layout-content :class="{ 'widget-empty': widgetForm.list }">
              <AntdWidgetForm ref="widgetFormRef" v-model:widgetForm="widgetForm"
                v-model:widgetFormSelect="widgetFormSelect" />
            </a-layout-content>
          </a-layout>
          <a-layout-sider theme="light" class="widget-config-container" :width="300">
            <a-layout>
              <a-layout-header>
                <div class="config-tab" :class="{ active: configTab === 'widget' }" @click="configTab = 'widget'">
                  字段属性
                </div>
                <div class="config-tab" :class="{ active: configTab === 'form' }" @click="configTab = 'form'">
                  表单属性
                </div>
              </a-layout-header>
              <a-layout-content class="config-content">
                <AntdWidgetConfig v-show="configTab === 'widget'" v-model:select="widgetFormSelect" />
                <AntdFormConfig v-show="configTab === 'form'" v-model:config="widgetForm.config" />
              </a-layout-content>
            </a-layout>
          </a-layout-sider>
        </a-layout>
      </a-layout-content>


      <a-modal v-model:open="previewVisible" :width="800" :footer="null" title="预览">
        <AntdGenerateForm ref="generateFormRef" defaultUploadURL="/common/uploadOne" :data="widgetForm" />
      </a-modal>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { message } from 'ant-design-vue'
// import { merge } from 'lodash'
import { defineComponent } from 'vue'
import * as antd from './config'
export default defineComponent({
  emits: ['save', 'preview'],
  props: {
    widgetForm: {
    },
    customPreview: {
      type: Boolean,
      default: false
    },
    preview: {
      type: Boolean,
      default: true
    },
    generateCode: {
      type: Boolean,
      default: false
    },
    generateJson: {
      type: Boolean,
      default: false
    },
    uploadJson: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    basicFields: {
      type: Array as PropType<Array<string>>,
      default: () => [
        'input',
        'password',
        'textarea',
        'number',
        'radio',
        'checkbox',
        'time',
        'date',
        'rate',
        'select',
        'switch',
        'slider',
        'text'
      ]
    },
    advanceFields: {
      type: Array as PropType<Array<string>>,
      default: () => ['img-upload', 'richtext-editor', 'cascader']
    },
    layoutFields: {
      type: Array as PropType<Array<string>>,
      default: () => ['grid']
    }
  },
  setup(props) {
    const state = reactive({
      antd,
      codeType: '',
      widgetForm: JSON.parse(JSON.stringify(props.widgetForm || antd.widgetForm)),
      widgetFormSelect: undefined,
      generateFormRef: null as any,
      configTab: 'widget',
      previewVisible: false,
      uploadJsonVisible: false,
      dataJsonVisible: false,
      generateJsonVisible: false,
      generateCodeVisible: false,
      generateJsonTemplate: JSON.stringify(antd.widgetForm, null, 2),
      dataJsonTemplate: '',
      dataCodeTemplate: '',
      codeLanguage: 'vue',
      jsonEg: JSON.stringify(antd.widgetForm, null, 2)
    })

    const handleUploadJson = () => {
      try {
        setJson(JSON.parse(state.jsonEg))
        state.uploadJsonVisible = false
        message.success('上传成功')
      } catch (error) {
        message.error('上传失败')
      }
    }
    const handleGetData = () => {
      state.generateFormRef.getData().then((res: any) => {
        state.dataJsonTemplate = JSON.stringify(res, null, 2)
        state.dataJsonVisible = true
      })
    }

    const handleGenerateJson = () =>
      (state.generateJsonTemplate = JSON.stringify(
        state.widgetForm,
        null,
        2
      )) && (state.generateJsonVisible = true)





    const handleClearable = () => {
      state.widgetForm.list = []
      // merge(state.widgetForm, JSON.parse(JSON.stringify(antd.widgetForm)))
      state.widgetFormSelect = undefined
    }

    const handleReset = () => state.generateFormRef.reset()

    const getJson = () => state.widgetForm

    const setJson = (json) => {
      state.widgetForm.list = []
      // merge(state.widgetForm, json)
      if (json.list.length) {
        state.widgetFormSelect = json.list[0]
      }
    }
    const clear = () => handleClearable()


    return {
      ...toRefs(state),
      handleUploadJson,
      handleGetData,
      handleGenerateJson,
      handleClearable,
      handleReset,
      getJson,
      setJson,
      clear
    }
  }
})
</script>
