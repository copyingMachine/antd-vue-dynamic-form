<template>
  <a-form layout="vertical" v-if="data" :key="data.key">
    <a-form-item label="字段标识" v-if="data.type !== 'grid'">
      <a-input v-model:value="data.model" />
    </a-form-item>

    <a-form-item label="标题" v-if="data.type !== 'grid'">
      <a-input v-model:value="data.label" />
    </a-form-item>

    <a-form-item label="宽度" v-if="hasKey('width')">
      <a-input v-model:value="data.options.width" />
    </a-form-item>

    <a-form-item label="占位内容" v-if="hasKey('placeholder')">
      <a-input v-model:value="data.options.placeholder" />
    </a-form-item>

    <a-form-item label="默认内容" v-if="hasKey('defaultValue') &&
    (data.type === 'input' ||
      data.type === 'password' ||
      data.type === 'textarea' ||
      data.type === 'text' ||
      data.type === 'rate' ||
      data.type === 'switch' ||
      data.type === 'slider')
    ">
      <a-input v-if="data.type === 'input' ||
    data.type === 'password' ||
    data.type === 'text'
    " v-model:value="data.options.defaultValue" />
      <a-textarea v-if="data.type === 'textarea'" v-model:value="data.options.defaultValue" />
      <a-rate v-if="data.type === 'rate'" v-model:value="data.options.defaultValue" :count="data.options.max"
        :allowHalf="data.options.allowHalf" :allowClear="data.options.allowClear" />
      <a-switch v-if="data.type === 'switch'" v-model:checked="data.options.defaultValue" />
      <template v-if="data.type === 'slider'">
        <a-input-number v-if="!data.options.range" v-model:value.number="data.options.defaultValue" />
        <template v-if="data.options.range">
          <a-input-number v-model:value.number="data.options.defaultValue[0]" :max="data.options.max" />
          <a-input-number v-model:value.number="data.options.defaultValue[1]" :max="data.options.max" />
        </template>
      </template>
    </a-form-item>

    <a-form-item label="最大长度" v-if="hasKey('maxlength')">
      <a-input v-model:value.number="data.options.maxlength" />
    </a-form-item>

    <a-form-item label="最大值" v-if="hasKey('max')">
      <a-input-number v-model:value.number="data.options.max" />
    </a-form-item>

    <a-form-item label="最小值" v-if="hasKey('min')">
      <a-input-number v-model:value.number="data.options.min" />
    </a-form-item>

    <a-form-item label="步长" v-if="hasKey('step')">
      <a-input-number v-model:value.number="data.options.step" :min="0" />
    </a-form-item>

    <a-form-item label="前缀" v-if="hasKey('prefix')">
      <a-input v-model:value="data.options.prefix" />
    </a-form-item>

    <a-form-item label="后缀" v-if="hasKey('suffix')">
      <a-input v-model:value="data.options.suffix" />
    </a-form-item>

    <a-form-item label="前置标签" v-if="hasKey('addonBefore')">
      <a-input v-model:value="data.options.addonBefore" />
    </a-form-item>

    <a-form-item label="后置标签" v-if="hasKey('addonAfter')">
      <a-input v-model:value="data.options.addonAfter" />
    </a-form-item>

    <a-form-item label="选中时的内容" v-if="hasKey('checkedChildren')">
      <a-input v-model:value="data.options.checkedChildren" />
    </a-form-item>

    <a-form-item label="非选中时的内容" v-if="hasKey('unCheckedChildren')">
      <a-input v-model:value="data.options.unCheckedChildren" />
    </a-form-item>

    <a-form-item label="双滑块模式" v-if="hasKey('range')">
      <a-switch v-model:checked="data.options.range" @change="handleSliderModeChange" />
    </a-form-item>

    <a-form-item label="反向坐标轴" v-if="hasKey('reverse')">
      <a-switch v-model:checked="data.options.reverse" />
    </a-form-item>

    <a-form-item label="是否显示切换按钮" v-if="hasKey('visibilityToggle')">
      <a-switch checked-children="显示" un-checked-children="隐藏" v-model:checked="data.options.visibilityToggle" />
    </a-form-item>

    <a-form-item label="是否显示字数" v-if="hasKey('showCount')">
      <a-switch checked-children="显示" un-checked-children="隐藏" v-model:checked="data.options.showCount" />
    </a-form-item>

    <a-form-item label="是否自适应内容高度" v-if="hasKey('autoSize')">
      <a-switch checked-children="是" un-checked-children="否" v-model:checked="data.options.autoSize" />
    </a-form-item>

    <a-form-item label="行数" v-if="hasKey('rows') && !data.options.autosize">
      <a-input-number v-model:value="data.options.rows" :min="0" />
    </a-form-item>

    <a-form-item label="是否允许半选" v-if="hasKey('allowHalf')">
      <a-switch checked-children="是" un-checked-children="否" v-model:checked="data.options.allowHalf" />
    </a-form-item>

    <a-form-item label="布局方式" v-if="hasKey('inline')">
      <a-radio-group button-style="solid" v-model:value="data.options.inline">
        <a-radio-button :value="true">行内</a-radio-button>
        <a-radio-button :value="false">块级</a-radio-button>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="模式" v-if="data.type === 'select'">
      <a-radio-group button-style="solid" v-model:value="data.options.mode" @change="handleSelectModeChange">
        <a-radio-button :value="null">默认</a-radio-button>
        <a-radio-button value="multiple">多选</a-radio-button>
        <a-radio-button value="tags">标签</a-radio-button>
      </a-radio-group>
    </a-form-item>

    <a-form-item label="单选模式是否可搜索" v-if="hasKey('showSearch')">
      <a-switch checked-children="是" un-checked-children="否" v-model:checked="data.options.showSearch" />
    </a-form-item>

    <a-form-item label="是否显示标签" v-if="hasKey('showLabel')">
      <a-switch checked-children="是" un-checked-children="否" v-model:checked="data.options.showLabel" />
    </a-form-item>

    <a-form-item label="选项" v-if="hasKey('options')">
      <a-radio-group button-style="solid" v-model:value="data.options.remote">
        <a-radio-button :value="false">静态数据</a-radio-button>
        <a-radio-button :value="true">远端数据</a-radio-button>
      </a-radio-group>
      <a-space v-if="data.options.remote" direction="vertical" style="margin-top: 10px;">
        <a-input v-model:value="data.options.remoteFunc" size="small" addon-before="远端方法" />
        <a-input v-model:value="data.options.props.label" size="small" addon-before="标签" />
        <a-input v-model:value="data.options.props.value" size="small" addon-before="值" />
      </a-space>
      <template v-else>
        <template v-if="data.type === 'radio' ||
    (data.type === 'select' && data.options.mode === null)
    ">
          <a-radio-group v-model:value="data.options.defaultValue">
            <Draggable tag="ul" item-key="index" ghostClass="ghost" handle=".drag-item" :group="{ name: 'options' }"
              :list="data.options.options">
              <template #item="{ element, index }">
                <div>
                  <a-radio :value="element.value" style="margin-right: 0px;">
                    <a-input size="small" :style="{
    width: data.options.showLabel ? '90px' : '180px'
  }" v-model:value="element.value" />
                    <a-input size="small" :style="{
    width: data.options.showLabel ? '90px' : '0',
    padding: data.options.showLabel ? '0 7px' : '0',
    border: data.options.showLabel
      ? '1px solid #d9d9d9'
      : 'none'
  }" v-model:value="element.label" />
                  </a-radio>
                  <!-- <SvgIcon
                    style="margin: 0; cursor: move;"
                    iconClass="item"
                    className="drag-item"
                  /> -->
                  <a-button type="primary" shape="circle" size="small" style="margin-left: 10px;"
                    @click="handleOptionsRemove(index)">
                    <template #icon>
                      <!-- <SvgIcon iconClass="delete" /> -->
                    </template>
                  </a-button>
                </div>
              </template>
            </Draggable>
          </a-radio-group>
        </template>

        <template v-if="data.type === 'checkbox' ||
    (data.type === 'select' && data.options.mode !== null)
    ">
          <a-checkbox-group v-model:value="data.options.defaultValue">
            <Draggable tag="ul" item-key="index" ghostClass="ghost" handle=".drag-item" :group="{ name: 'options' }"
              :list="data.options.options">
              <template #item="{ element, index }">
                <li>
                  <a-checkbox :value="element.value" style="margin-right: 0;">
                    <a-input size="small" :style="{
    width: data.options.showLabel ? '90px' : '180px'
  }" v-model:value="element.value" />
                    <a-input size="small" :style="{
    width: data.options.showLabel ? '90px' : '0',
    padding: data.options.showLabel ? '0 7px' : '0',
    border: data.options.showLabel
      ? '1px solid #d9d9d9'
      : 'none'
  }" v-model:value="element.label" />
                  </a-checkbox>
                  <!-- <SvgIcon
                    style="margin: 0; cursor: move;"
                    iconClass="item"
                    className="drag-item"
                  /> -->
                  <a-button type="primary" shape="circle" size="small" style="margin-left: 10px;"
                    @click="handleOptionsRemove(index)">
                    <template #icon>
                      <!-- <SvgIcon iconClass="delete" /> -->
                    </template>
                  </a-button>
                </li>
              </template>
            </Draggable>
          </a-checkbox-group>
        </template>

        <div style="margin-top: 5px;">
          <a-button type="link" size="small" @click="handleInsertOption">添加选项</a-button>
        </div>
      </template>
    </a-form-item>

    <template v-if="data.type === 'time'">
      <a-form-item label="默认值">
        <a-time-picker style="width: 100%;" v-model:value="data.options.defaultValue" :format="data.options.format"
          :placeholder="data.options.placeholder" />
      </a-form-item>
    </template>

    <template v-if="data.type === 'date'">
      <a-form-item label="默认值">
        <a-date-picker style="width: 100%;" v-model:value="data.options.defaultValue" :format="data.options.format"
          :placeholder="data.options.placeholder" />
      </a-form-item>
    </template>

    <template v-if="data.type === 'time' || data.type === 'date'">
      <a-form-item label="格式">
        <a-input v-model:value="data.options.format" />
      </a-form-item>
      <a-form-item label="绑定值格式">
        <a-input v-model:value="data.options.valueFormat" />
      </a-form-item>
    </template>

    <template v-if="data.type === 'img-upload'">
      <a-form-item label="是否支持多选">
        <a-switch checked-children="是" un-checked-children="否" v-model:checked="data.options.multiple" />
      </a-form-item>

      <a-form-item label="模式">
        <a-radio-group button-style="solid" v-model:value="data.options.listType">
          <a-radio-button value="text">text</a-radio-button>
          <a-radio-button value="picture">picture</a-radio-button>
          <a-radio-button value="picture-card">picture-card</a-radio-button>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="文件参数名">
        <a-input v-model:value="data.options.name" />
      </a-form-item>

      <a-form-item label="上传地址">
        <a-input v-model:value="data.options.action" placeHolder="正常无需填写" />
      </a-form-item>

      <a-form-item label="接受上传的文件类型(多个使用 , 隔开)">
        <a-input v-model:value="data.options.accept" />
      </a-form-item>

      <a-form-item label="最大上传数量">
        <a-input-number v-model:value.number="data.options.maxCount" :min="1" />
      </a-form-item>

      <a-form-item label="上传请求方法">
        <a-radio-group button-style="solid" v-model:value="data.options.method">
          <a-radio-button value="post">POST</a-radio-button>
          <a-radio-button value="put">PUT</a-radio-button>
          <a-radio-button value="get">GET</a-radio-button>
          <a-radio-button value="delete">DELETE</a-radio-button>
        </a-radio-group>
      </a-form-item>
    </template>

    <a-form-item label="远端数据" v-if="data.type === 'cascader'">
      <a-space direction="vertical">
        <a-input v-model:value="data.options.remoteFunc" size="small" addon-before="远端方法" />
        <a-input v-model:value="data.options.props.label" size="small" addon-before="标签" />
        <a-input v-model:value="data.options.props.value" size="small" addon-before="值" />
        <a-input v-model:value="data.options.props.children" size="small" addon-before="子选项" />
      </a-space>
    </a-form-item>

    <template v-if="data.type === 'grid'">
      <a-form-item label="栅格间隔">
        <a-input-number v-model:value="data.options.gutter" :min="0" />
      </a-form-item>

      <a-form-item label="列配置项">
        <Draggable tag="ul" item-key="index" ghostClass="ghost" handle=".drag-item" :group="{ name: 'options' }"
          :list="data.columns">
          <template #item="{ element, index }">
            <li style="margin-bottom: 5px;">
              <!-- <SvgIcon iconClass="item" className="drag-item" />
              <a-input-number
                placeholder="栅格值"
                size="small"
                v-model:value="element.span"
                :min="0"
                :max="24"
              /> -->
              <a-button type="primary" shape="circle" size="small" style="margin-left: 5px;"
                @click="handleOptionsRemove(index)">
                <!-- <template #icon>
                  <SvgIcon iconClass="delete" />
                </template> -->
              </a-button>
            </li>
          </template>
        </Draggable>

        <div>
          <a-button type="link" size="small" @click="handleInsertColumn">
            添加列
          </a-button>
        </div>
      </a-form-item>

      <a-form-item label="垂直对齐方式">
        <a-radio-group v-model:value="data.options.align" button-style="solid">
          <a-radio-button value="top">顶部对齐</a-radio-button>
          <a-radio-button value="middle">居中对齐</a-radio-button>
          <a-radio-button value="bottom">底部对齐</a-radio-button>
        </a-radio-group>
      </a-form-item>

      <a-form-item label="水平排列方式">
        <a-select v-model:value="data.options.justify">
          <a-select-option value="start">左对齐</a-select-option>
          <a-select-option value="end">右对齐</a-select-option>
          <a-select-option value="center">居中</a-select-option>
          <a-select-option value="space-around">两侧间隔相等</a-select-option>
          <a-select-option value="space-between">两端对齐</a-select-option>
        </a-select>
      </a-form-item>
    </template>

    <template v-if="data.type !== 'grid'">
      <a-form-item label="操作属性" v-if="hasKey('rules') ||
    hasKey('readonly') ||
    hasKey('disabled') ||
    hasKey('allowClear')
    ">
        <a-checkbox v-if="hasKey('rules')" v-model:checked="data.options.required">必填</a-checkbox>
        <a-checkbox v-if="hasKey('readonly')" v-model:checked="data.options.readonly">只读</a-checkbox>
        <a-checkbox v-if="hasKey('disabled')" v-model:checked="data.options.disabled">禁用</a-checkbox>
        <a-checkbox v-if="hasKey('allowClear')" v-model:checked="data.options.allowClear">清除</a-checkbox>
      </a-form-item>

      <template v-if="hasKey('rules')">
        <h4>验证规则</h4>

        <!-- <a-form-item label="触发时机">
          <a-radio-group v-model:value="trigger" button-style="solid">
            <a-radio-button value="blur">Blur</a-radio-button>
            <a-radio-button value="change">Change</a-radio-button>
            <a-radio-button value="blur,change">All</a-radio-button>
          </a-radio-group>
        </a-form-item> -->
        <a-form-item label="校验文案">
          <a-input v-model:value="data.options.rules.message" />
        </a-form-item>
        <a-form-item label="枚举类型" v-if="data.options.rules.type === 'enum'">
          <a-input v-model:value="data.options.rules.enum" placeHolder="多个值以,分割(A,B,C)" />
        </a-form-item>

        <a-form-item label="字段长度">
          <a-input v-model:value.number="data.options.rules.len" />
        </a-form-item>

        <a-form-item label="最大长度">
          <a-input v-model:value.number="data.options.rules.max" />
        </a-form-item>
        <a-form-item label="最小长度">
          <a-input v-model:value.number="data.options.rules.min" />
        </a-form-item>

        <a-form-item label="正则表达式" v-if="data.options.rules.type === 'regexp'">
          <a-input v-model:value="data.options.rules.pattern" placeHolder="多个参数以,分割(^abc,i)" />
        </a-form-item>

        <a-form-item label="校验类型">
          <a-select v-model:value="data.options.rules.type">
            <a-select-option value="string">字符串</a-select-option>
            <a-select-option value="number">数字</a-select-option>
            <a-select-option value="boolean">布尔值</a-select-option>
            <a-select-option value="method">方法</a-select-option>
            <a-select-option value="regexp">正则表达式</a-select-option>
            <a-select-option value="integer">整数</a-select-option>
            <a-select-option value="float">浮点数</a-select-option>
            <a-select-option value="array">数组</a-select-option>
            <a-select-option value="object">对象</a-select-option>
            <a-select-option value="enum">枚举</a-select-option>
            <a-select-option value="date">日期</a-select-option>
            <a-select-option value="url">URL地址</a-select-option>
            <a-select-option value="hex">十六进制</a-select-option>
            <a-select-option value="email">邮箱地址</a-select-option>
            <a-select-option value="any">任意类型</a-select-option>
          </a-select>
        </a-form-item>
      </template>
    </template>
  </a-form>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import Draggable from 'vuedraggable'
export default defineComponent({
  name: 'AntdWidgetConfig',
  components: {
    Draggable,
  },
  props: {
    select: {
      type: Object
    }
  },
  emits: ['update:select'],
  setup(props, context) {
    const data = ref<any>(props.select)

    watch(
      () => props.select,
      val => (data.value = val)
    )

    const trigger = computed({
      get() {
        return data.value.options.rules.trigger.toString()
      },
      set(val) {
        if (val.includes(',')) val = val.split(',')
        data.value.options.rules.trigger = val
      }
    })

    watch(data, val => context.emit('update:select', val))

    const hasKey = (key: string) =>
      Object.keys(data.value.options).includes(key)

    const handleInsertColumn = () => {
      data.value.columns.push({
        span: 0,
        list: []
      })
    }


    const handleInsertOption = () => {
      const index = data.value.options.options.length + 1
      data.value.options.options.push({
        label: `Option ${index}`,
        value: `Option ${index}`
      })
    }

    const handleOptionsRemove = (index: number) => {
      if (data.value.type === 'grid') {
        data.value.columns.splice(index, 1)
      } else {
        data.value.options.options.splice(index, 1)
      }
    }

    const handleSelectModeChange = (event: any) => {
      const { value } = event.target
      if (value === null) {
        data.value.options.defaultValue.length
          ? (data.value.options.defaultValue =
            data.value.options.defaultValue[0])
          : (data.value.options.defaultValue = null)
      } else {
        if (data.value.options.defaultValue) {
          if (!(data.value.options.defaultValue instanceof Array)) {
            data.value.options.defaultValue = [data.value.options.defaultValue]
          }
        } else {
          data.value.options.defaultValue = []
        }
      }
    }

    const handleSliderModeChange = (checked: boolean) => {
      checked
        ? (data.value.options.defaultValue = [0, 0])
        : (data.value.options.defaultValue = 0)
    }

    return {
      data,
      hasKey,
      trigger,
      handleInsertColumn,
      handleInsertOption,
      handleOptionsRemove,
      handleSelectModeChange,
      handleSliderModeChange
    }
  }
})
</script>
