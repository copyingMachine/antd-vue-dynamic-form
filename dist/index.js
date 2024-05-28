import { Input as ze, InputPassword as ht, Textarea as De, InputNumber as me, Radio as Te, RadioGroup as ge, Checkbox as Ve, CheckboxGroup as je, TimePicker as Me, DatePicker as Ie, Rate as Re, SelectOption as Pe, Select as Ne, Switch as ye, Slider as ct, Button as Le, Upload as wt, Cascader as Ct, FormItem as ve, Col as kt, Row as Ft, Form as be, RadioButton as Ot, Space as Jt, LayoutHeader as At, LayoutSider as qt, LayoutContent as Kt, Layout as Wt, Modal as Gt } from "ant-design-vue/es";
import { defineComponent as J, computed as St, openBlock as s, createBlock as g, withCtx as i, normalizeStyle as k, createCommentVNode as m, createElementBlock as C, Fragment as A, renderList as H, createTextVNode as b, toDisplayString as L, reactive as He, watch as pe, onMounted as Yt, toRefs as Bt, nextTick as Je, createVNode as o, mergeProps as Be, ref as le, createElementVNode as T, resolveComponent as G, inject as Qt, h as Ze, getCurrentInstance as Zt, normalizeClass as x, withModifiers as fe, TransitionGroup as Xe, renderSlot as Et, withDirectives as _e, vShow as xe } from "vue";
import { message as et } from "ant-design-vue";
import qe from "vuedraggable";
const Xt = J({
  name: "AntdGenerateFormItem",
  props: {
    config: {
      type: Object,
      required: !0
    },
    element: {
      type: Object,
      required: !0
    },
    model: {
      type: Object,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !0
    },
    uploadHeader: {
      type: Object,
      default: () => ({})
    },
    baseURL: {
      default: ""
    }
  },
  setup(e) {
    const t = St({
      get: () => e.model[e.element.model],
      set: (u) => {
        e.model[e.element.model] = u;
      }
    });
    return {
      data: t,
      handleFilterOption: (u, y) => y.label.toLowerCase().includes(u),
      handleUploadChange: ({ fileList: u }) => {
        t.value = u;
      }
    };
  }
}), K = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [n, u] of t)
    a[n] = u;
  return a;
}, _t = { key: 12 };
function xt(e, t, a, n, u, y) {
  const p = ze, r = ht, d = De, v = me, f = Te, c = ge, h = Ve, w = je, S = Me, z = Ie, B = Re, O = Pe, $ = Ne, P = ye, D = ct, N = Le, F = wt, _ = Ct, ee = ve;
  return e.element ? (s(), g(ee, {
    key: e.element.key,
    label: e.element.label,
    name: e.element.model,
    required: e.element.options.required || !1
  }, {
    default: i(() => [
      e.element.type === "input" ? (s(), g(p, {
        key: 0,
        value: e.data,
        "onUpdate:value": t[0] || (t[0] = (l) => e.data = l),
        size: e.config.size,
        style: k({ width: e.element.options.width }),
        placeholder: e.element.options.placeholder,
        maxlength: parseInt(e.element.options.maxlength),
        prefix: e.element.options.prefix,
        suffix: e.element.options.suffix,
        addonBefore: e.element.options.addonBefore,
        addonAfter: e.element.options.addonAfter,
        allowClear: e.element.options.allowClear,
        readonly: e.element.options.readonly,
        disabled: e.disabled || e.element.options.disabled
      }, null, 8, ["value", "size", "style", "placeholder", "maxlength", "prefix", "suffix", "addonBefore", "addonAfter", "allowClear", "readonly", "disabled"])) : m("", !0),
      e.element.type === "password" ? (s(), g(r, {
        key: 1,
        value: e.data,
        "onUpdate:value": t[1] || (t[1] = (l) => e.data = l),
        size: e.config.size,
        style: k({ width: e.element.options.width }),
        placeholder: e.element.options.placeholder,
        maxlength: e.element.options.maxlength,
        prefix: e.element.options.prefix,
        suffix: e.element.options.suffix,
        addonBefore: e.element.options.addonBefore,
        addonAfter: e.element.options.addonAfter,
        allowClear: e.element.options.allowClear,
        disabled: e.disabled || e.element.options.disabled,
        readonly: e.element.options.readonly,
        visibilityToggle: e.element.options.visibilityToggle
      }, null, 8, ["value", "size", "style", "placeholder", "maxlength", "prefix", "suffix", "addonBefore", "addonAfter", "allowClear", "disabled", "readonly", "visibilityToggle"])) : m("", !0),
      e.element.type === "textarea" ? (s(), g(d, {
        key: 2,
        style: k([{ resize: "none" }, { width: e.element.options.width }]),
        value: e.data,
        "onUpdate:value": t[2] || (t[2] = (l) => e.data = l),
        size: e.config.size,
        rows: e.element.options.rows,
        placeholder: e.element.options.placeholder,
        maxlength: e.element.options.maxlength,
        showCount: e.element.options.showCount,
        autoSize: e.element.options.autoSize,
        allowClear: e.element.options.allowClear,
        readonly: e.element.options.readonly,
        disabled: e.disabled || e.element.options.disabled
      }, null, 8, ["value", "size", "rows", "style", "placeholder", "maxlength", "showCount", "autoSize", "allowClear", "readonly", "disabled"])) : m("", !0),
      e.element.type === "number" ? (s(), g(v, {
        key: 3,
        value: e.data,
        "onUpdate:value": t[3] || (t[3] = (l) => e.data = l),
        size: e.config.size,
        style: k({ width: e.element.options.width }),
        max: e.element.options.max,
        min: e.element.options.min,
        disabled: e.disabled || e.element.options.disabled
      }, null, 8, ["value", "size", "style", "max", "min", "disabled"])) : m("", !0),
      e.element.type === "radio" ? (s(), g(c, {
        key: 4,
        value: e.data,
        "onUpdate:value": t[4] || (t[4] = (l) => e.data = l),
        size: e.config.size,
        style: k({ width: e.element.options.width }),
        disabled: e.disabled || e.element.options.disabled
      }, {
        default: i(() => [
          (s(!0), C(A, null, H(e.element.options.remote ? e.element.options.remoteOptions : e.element.options.options, (l) => (s(), g(f, {
            key: l.value,
            value: l.value,
            style: k({
              display: e.element.options.inline ? "inline-block" : "block"
            })
          }, {
            default: i(() => [
              b(L(e.element.options.showLabel ? l.label : l.value), 1)
            ]),
            _: 2
          }, 1032, ["value", "style"]))), 128))
        ]),
        _: 1
      }, 8, ["value", "size", "style", "disabled"])) : m("", !0),
      e.element.type === "checkbox" ? (s(), g(w, {
        key: 5,
        value: e.data,
        "onUpdate:value": t[5] || (t[5] = (l) => e.data = l),
        style: k({ width: e.element.options.width }),
        disabled: e.disabled || e.element.options.disabled
      }, {
        default: i(() => [
          (s(!0), C(A, null, H(e.element.options.remote ? e.element.options.remoteOptions : e.element.options.options, (l) => (s(), g(h, {
            key: l.value,
            value: l.value,
            style: k({
              display: e.element.options.inline ? "inline-block" : "block"
            })
          }, {
            default: i(() => [
              b(L(e.element.options.showLabel ? l.label : l.value), 1)
            ]),
            _: 2
          }, 1032, ["value", "style"]))), 128))
        ]),
        _: 1
      }, 8, ["value", "style", "disabled"])) : m("", !0),
      e.element.type === "time" ? (s(), g(S, {
        key: 6,
        value: e.data,
        "onUpdate:value": t[6] || (t[6] = (l) => e.data = l),
        size: e.config.size,
        placeholder: e.element.options.placeholder,
        inputReadOnly: e.element.options.readonly,
        allowClear: e.element.options.allowClear,
        format: e.element.options.format,
        valueFormat: e.element.options.valueFormat,
        disabled: e.disabled || e.element.options.disabled,
        style: k({ width: e.element.options.width })
      }, null, 8, ["value", "size", "placeholder", "inputReadOnly", "allowClear", "format", "valueFormat", "disabled", "style"])) : m("", !0),
      e.element.type === "date" ? (s(), g(z, {
        key: 7,
        value: e.data,
        "onUpdate:value": t[7] || (t[7] = (l) => e.data = l),
        size: e.config.size,
        placeholder: e.element.options.placeholder,
        inputReadOnly: e.element.options.readonly,
        allowClear: e.element.options.allowClear,
        format: e.element.options.format,
        disabled: e.disabled || e.element.options.disabled,
        style: k({ width: e.element.options.width })
      }, null, 8, ["value", "size", "placeholder", "inputReadOnly", "allowClear", "format", "disabled", "style"])) : m("", !0),
      e.element.type === "rate" ? (s(), g(B, {
        key: 8,
        value: e.data,
        "onUpdate:value": t[8] || (t[8] = (l) => e.data = l),
        count: e.element.options.max,
        allowHalf: e.element.options.allowHalf,
        allowClear: e.element.options.allowClear,
        disabled: e.disabled || e.element.options.disabled
      }, null, 8, ["value", "count", "allowHalf", "allowClear", "disabled"])) : m("", !0),
      e.element.type === "select" ? (s(), g($, {
        key: 9,
        value: e.data,
        "onUpdate:value": t[9] || (t[9] = (l) => e.data = l),
        size: e.config.size,
        mode: e.element.options.mode,
        placeholder: e.element.options.placeholder,
        "filter-option": e.handleFilterOption,
        allowClear: e.element.options.clearable,
        showSearch: e.element.options.showSearch,
        disabled: e.disabled || e.element.options.disabled,
        style: k({ width: e.element.options.width })
      }, {
        default: i(() => [
          (s(!0), C(A, null, H(e.element.options.remote ? e.element.options.remoteOptions : e.element.options.options, (l) => (s(), g(O, {
            key: l.value,
            value: l.value,
            label: e.element.options.showLabel ? l.label : l.value
          }, {
            default: i(() => [
              b(L(e.element.options.showLabel ? l.label : l.value), 1)
            ]),
            _: 2
          }, 1032, ["value", "label"]))), 128))
        ]),
        _: 1
      }, 8, ["value", "size", "mode", "placeholder", "filter-option", "allowClear", "showSearch", "disabled", "style"])) : m("", !0),
      e.element.type === "switch" ? (s(), g(P, {
        key: 10,
        checked: e.data,
        "onUpdate:checked": t[10] || (t[10] = (l) => e.data = l),
        size: e.config.size === "large" ? "default" : e.config.size,
        checkedChildren: e.element.options.checkedChildren,
        unCheckedChildren: e.element.options.unCheckedChildren,
        disabled: e.disabled || e.element.options.disabled
      }, null, 8, ["checked", "size", "checkedChildren", "unCheckedChildren", "disabled"])) : m("", !0),
      e.element.type === "slider" ? (s(), g(D, {
        key: 11,
        value: e.data,
        "onUpdate:value": t[11] || (t[11] = (l) => e.data = l),
        min: e.element.options.min,
        max: e.element.options.max,
        step: e.element.options.step,
        range: e.element.options.range,
        reverse: e.element.options.reverse,
        disabled: e.disabled || e.element.options.disabled,
        style: k({ width: e.element.options.width })
      }, null, 8, ["value", "min", "max", "step", "range", "reverse", "disabled", "style"])) : m("", !0),
      e.element.type == "text" ? (s(), C("span", _t, L(e.element.options.defaultValue), 1)) : m("", !0),
      e.element.type === "img-upload" ? (s(), g(F, {
        key: 13,
        name: e.element.options.file,
        action: e.element.options.action || e.baseURL + "/common/uploadOne",
        accept: e.element.options.accept,
        "file-list": e.data,
        listType: e.element.options.listType,
        multiple: e.element.options.multiple,
        disabled: e.disabled || e.element.options.disabled,
        onChange: e.handleUploadChange
      }, {
        default: i(() => [
          e.element.options.listType !== "picture-card" ? (s(), g(N, { key: 0 }, {
            default: i(() => [
              b(" 点击上传 ")
            ]),
            _: 1
          })) : m("", !0)
        ]),
        _: 1
      }, 8, ["name", "action", "accept", "file-list", "listType", "multiple", "disabled", "onChange"])) : m("", !0),
      e.element.type === "cascader" ? (s(), g(_, {
        key: 14,
        value: e.data,
        "onUpdate:value": t[12] || (t[12] = (l) => e.data = l),
        size: e.config.size,
        options: e.element.options.remoteOptions,
        placeholder: e.element.options.placeholder,
        allowClear: e.element.options.allowClear,
        disabled: e.disabled || e.element.options.disabled,
        style: k({ width: e.element.options.width })
      }, null, 8, ["value", "size", "options", "placeholder", "allowClear", "disabled", "style"])) : m("", !0)
    ]),
    _: 1
  }, 8, ["label", "name", "required"])) : m("", !0);
}
const $t = /* @__PURE__ */ K(Xt, [["render", xt]]), j = {
  trigger: "change",
  enum: "",
  len: void 0,
  max: void 0,
  message: "",
  min: void 0,
  pattern: "",
  type: "any"
}, X = {
  list: [],
  config: {
    size: "default",
    hideRequiredMark: !1,
    layout: "horizontal",
    labelAlign: "right",
    labelCol: {
      span: 3,
      offset: 0
    }
  }
}, ea = [
  {
    label: "单行文本",
    type: "input",
    options: {
      width: "100%",
      defaultValue: "",
      placeholder: "",
      maxlength: null,
      prefix: "",
      suffix: "",
      addonBefore: "",
      addonAfter: "",
      disabled: !1,
      allowClear: !1,
      readonly: !1,
      rules: j
    }
  },
  {
    label: "密码框",
    type: "password",
    options: {
      width: "100%",
      defaultValue: "",
      placeholder: "",
      maxlength: null,
      prefix: "",
      suffix: "",
      addonBefore: "",
      addonAfter: "",
      visibilityToggle: !0,
      disabled: !1,
      allowClear: !1,
      readonly: !1,
      rules: j
    }
  },
  {
    label: "多行文本",
    type: "textarea",
    options: {
      width: "100%",
      defaultValue: "",
      placeholder: "",
      maxlength: null,
      rows: 4,
      autoSize: !1,
      showCount: !1,
      disabled: !1,
      allowClear: !1,
      readonly: !1,
      rules: j
    }
  },
  {
    label: "数字框",
    type: "number",
    options: {
      width: "",
      defaultValue: 0,
      min: 0,
      max: "",
      step: 1,
      readonly: !1,
      disabled: !1,
      rules: j
    }
  },
  {
    label: "单选框组",
    type: "radio",
    options: {
      defaultValue: "",
      width: "",
      inline: !0,
      remote: !1,
      showLabel: !1,
      remoteFunc: "/get",
      options: [
        {
          value: "Option 1",
          label: "Option 1"
        },
        {
          value: "Option 2",
          label: "Option 2"
        },
        {
          value: "Option 3",
          label: "Option 3"
        }
      ],
      remoteOptions: [],
      props: {
        value: "value",
        label: "label"
      },
      disabled: !1,
      rules: j
    }
  },
  {
    label: "多选框组",
    type: "checkbox",
    options: {
      defaultValue: [],
      width: "",
      inline: !0,
      remote: !1,
      showLabel: !1,
      remoteFunc: "/get",
      options: [
        {
          label: "Option 1",
          value: "Option 1"
        },
        {
          label: "Option 2",
          value: "Option 2"
        },
        {
          label: "Option 3",
          value: "Option 3"
        }
      ],
      remoteOptions: [],
      props: {
        value: "value",
        label: "label"
      },
      disabled: !1,
      rules: j
    }
  },
  {
    label: "时间选择器",
    type: "time",
    options: {
      defaultValue: "",
      width: "",
      placeholder: "请选择时间",
      format: "HH:mm:ss",
      valueFormat: "HH:mm:ss",
      readonly: !1,
      allowClear: !0,
      disabled: !1,
      rules: j
    }
  },
  {
    label: "日期选择器",
    type: "date",
    options: {
      defaultValue: "",
      width: "",
      placeholder: "请选择时间",
      format: "YYYY-MM-DD",
      readonly: !1,
      allowClear: !0,
      disabled: !1,
      rules: j
    }
  },
  {
    label: "评分",
    type: "rate",
    options: {
      defaultValue: null,
      max: 5,
      allowClear: !0,
      allowHalf: !1,
      disabled: !1,
      rules: j
    }
  },
  {
    label: "下拉选择框",
    type: "select",
    options: {
      defaultValue: [],
      width: "200px",
      mode: null,
      placeholder: "",
      remote: !1,
      showLabel: !1,
      showSearch: !1,
      clearable: !1,
      disabled: !1,
      props: {
        label: "label",
        value: "value"
      },
      options: [
        {
          label: "Option 1",
          value: "Option 1"
        },
        {
          label: "Option 2",
          value: "Option 2"
        },
        {
          label: "Option 3",
          value: "Option 3"
        }
      ],
      remoteOptions: [],
      remoteFunc: "/get",
      rules: j
    }
  },
  {
    label: "开关",
    type: "switch",
    options: {
      defaultValue: !1,
      disabled: !1,
      checkedChildren: "",
      unCheckedChildren: "",
      rules: j
    }
  },
  {
    label: "滑块",
    type: "slider",
    options: {
      defaultValue: 0,
      width: "",
      min: 0,
      max: 100,
      step: 1,
      disabled: !1,
      range: !1,
      reverse: !1,
      rules: j
    }
  },
  {
    label: "文字",
    type: "text",
    options: {
      defaultValue: "This is a text"
    }
  }
], ta = [
  {
    label: "图片",
    type: "img-upload",
    options: {
      defaultValue: [],
      name: "file",
      action: "",
      method: "post",
      listType: "text",
      accept: "image/*",
      maxCount: 3,
      multiple: !1,
      disabled: !1,
      rules: j
    }
  }
  // {
  //   label: '级联选择器',
  //   type: 'cascader',
  //   options: {
  //     defaultValue: [],
  //     width: '200px',
  //     placeholder: '',
  //     disabled: false,
  //     allowClear: false,
  //     remote: true,
  //     remoteOptions: [],
  //     props: {
  //       label: 'label',
  //       value: 'value',
  //       children: 'children'
  //     },
  //     remoteFunc:
  //       '/get',
  //     rules
  //   }
  // }
], aa = [
  {
    label: "栅格布局",
    type: "grid",
    columns: [
      {
        span: 12,
        list: []
      },
      {
        span: 12,
        list: []
      }
    ],
    options: {
      gutter: 0,
      justify: "start",
      align: "top"
    }
  }
], la = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  advanceComponents: ta,
  basicComponents: ea,
  layoutComponents: aa,
  widgetForm: X
}, Symbol.toStringTag, { value: "Module" })), na = J({
  name: "AntdGenerateForm",
  components: {
    AntdGenerateFormItem: $t
  },
  props: {
    data: {
      type: Object,
      default: X
    },
    value: {
      type: Object
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = He({
      generateForm: null,
      model: {},
      rules: {},
      widgetForm: (e.data && JSON.parse(JSON.stringify(e.data))) ?? X
    }), a = (r) => {
      for (let d = 0; d < r.length; d++) {
        const v = r[d].model;
        if (!v)
          return;
        if (r[d].type === "grid")
          r[d].columns.forEach((f) => a(f.list));
        else {
          e.value && Object.keys(e.value).includes(v) ? t.model[v] = e.value[v] : t.model[v] = r[d].options.defaultValue;
          const { rules: f } = r[d].options;
          f && (t.rules[v] = JSON.parse(JSON.stringify(f)), t.rules[v].enum && (t.rules[v].enum = n(t.rules[v].enum)), t.rules[v].pattern && (t.rules[v].pattern = n(t.rules[v].pattern), t.rules[v].type = "string"));
        }
      }
    };
    function n(r) {
      return new Function("return" + r);
    }
    const u = (r) => {
      r.forEach((d) => {
        d.type === "grid" ? d.columns.forEach((v) => u(v.list)) : d.options.remote && d.options.remoteFunc && fetch(d.options.remoteFunc).then((v) => v.json()).then((v) => {
          v instanceof Array && (d.options.remoteOptions = v.map((f) => ({
            label: f[d.options.props.label],
            value: f[d.options.props.value],
            children: f[d.options.props.children]
          })));
        });
      });
    }, y = () => {
      Je(() => {
        t.generateForm.resetFields();
      });
    };
    pe(
      () => e.data,
      (r) => {
        t.widgetForm = (r && JSON.parse(JSON.stringify(r))) ?? X, t.model = {}, t.rules = {}, a(t.widgetForm.list), u(t.widgetForm.list), y();
      },
      { deep: !0, immediate: !0 }
    ), Yt(() => {
      var r, d;
      a(((r = t.widgetForm) == null ? void 0 : r.list) ?? []), u(((d = t.widgetForm) == null ? void 0 : d.list) ?? []), y();
    });
    const p = async () => {
      try {
        t.generateForm.validate();
      } catch {
        return;
      }
      return t.model;
    };
    return {
      ...Bt(t),
      getData: p,
      reset: y
    };
  }
}), oa = { class: "fc-style" };
function ia(e, t, a, n, u, y) {
  const p = $t, r = kt, d = Ft, v = be;
  return s(), C("div", oa, [
    o(v, {
      ref: "generateForm",
      model: e.model,
      rules: e.rules,
      layout: e.widgetForm.config.layout,
      labelAlign: e.widgetForm.config.labelAlign,
      labelCol: e.widgetForm.config.labelCol,
      hideRequiredMark: e.widgetForm.config.hideRequiredMark
    }, {
      default: i(() => [
        (s(!0), C(A, null, H(e.widgetForm.list, (f, c) => (s(), C(A, null, [
          f.type === "grid" ? (s(), C(A, { key: 0 }, [
            f.key ? (s(), g(d, {
              type: "flex",
              key: f.key,
              gutter: f.options.gutter ?? 0,
              justify: f.options.justify,
              align: f.options.align
            }, {
              default: i(() => [
                (s(!0), C(A, null, H(f.columns, (h, w) => (s(), g(r, {
                  key: w,
                  span: h.span ?? 0
                }, {
                  default: i(() => [
                    (s(!0), C(A, null, H(h.list, (S) => (s(), g(p, Be({
                      model: e.model,
                      key: S.key,
                      element: S,
                      config: e.data.config,
                      disabled: e.disabled,
                      ref_for: !0
                    }, e.$attrs), null, 16, ["model", "element", "config", "disabled"]))), 128))
                  ]),
                  _: 2
                }, 1032, ["span"]))), 128))
              ]),
              _: 2
            }, 1032, ["gutter", "justify", "align"])) : m("", !0)
          ], 64)) : (s(), g(p, Be({
            model: e.model,
            key: f.key,
            element: e.widgetForm.list[c],
            config: e.data.config,
            disabled: e.disabled,
            ref_for: !0
          }, e.$attrs), null, 16, ["model", "element", "config", "disabled"]))
        ], 64))), 256))
      ]),
      _: 1
    }, 8, ["model", "rules", "layout", "labelAlign", "labelCol", "hideRequiredMark"])
  ]);
}
const ua = /* @__PURE__ */ K(na, [["render", ia]]), ra = J({
  name: "AntdFormConfig",
  props: {
    config: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:config"],
  setup(e, t) {
    const a = le(e.config);
    return pe(a, () => t.emit("update:config", a)), {
      data: a
    };
  }
}), sa = { class: "form-config-container" }, da = /* @__PURE__ */ T("span", { class: "label" }, "span", -1), pa = /* @__PURE__ */ T("span", { class: "label" }, "offset", -1);
function fa(e, t, a, n, u, y) {
  const p = Ot, r = ge, d = ve, v = me, f = ye, c = be;
  return s(), C("div", sa, [
    o(c, { layout: "vertical" }, {
      default: i(() => [
        o(d, { label: "表单布局" }, {
          default: i(() => [
            o(r, {
              value: e.data.layout,
              "onUpdate:value": t[0] || (t[0] = (h) => e.data.layout = h),
              "button-style": "solid"
            }, {
              default: i(() => [
                o(p, { value: "horizontal" }, {
                  default: i(() => [
                    b("水平排列")
                  ]),
                  _: 1
                }),
                o(p, { value: "vertical" }, {
                  default: i(() => [
                    b("垂直排列")
                  ]),
                  _: 1
                }),
                o(p, { value: "inline" }, {
                  default: i(() => [
                    b("内联")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }),
        o(d, { label: "标签对齐方式" }, {
          default: i(() => [
            o(r, {
              value: e.data.labelAlign,
              "onUpdate:value": t[1] || (t[1] = (h) => e.data.labelAlign = h),
              "button-style": "solid"
            }, {
              default: i(() => [
                o(p, { value: "left" }, {
                  default: i(() => [
                    b("左对齐")
                  ]),
                  _: 1
                }),
                o(p, { value: "right" }, {
                  default: i(() => [
                    b("右对齐")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }),
        o(d, { label: "标签布局" }, {
          default: i(() => [
            da,
            o(v, {
              value: e.data.labelCol.span,
              "onUpdate:value": t[2] || (t[2] = (h) => e.data.labelCol.span = h),
              min: 0,
              max: 24
            }, null, 8, ["value"]),
            pa,
            o(v, {
              value: e.data.labelCol.offset,
              "onUpdate:value": t[3] || (t[3] = (h) => e.data.labelCol.offset = h),
              min: 0,
              max: 24
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        o(d, { label: "组件尺寸" }, {
          default: i(() => [
            o(r, {
              value: e.data.size,
              "onUpdate:value": t[4] || (t[4] = (h) => e.data.size = h),
              "button-style": "solid"
            }, {
              default: i(() => [
                o(p, { value: "large" }, {
                  default: i(() => [
                    b("大")
                  ]),
                  _: 1
                }),
                o(p, { value: "default" }, {
                  default: i(() => [
                    b("默认")
                  ]),
                  _: 1
                }),
                o(p, { value: "small" }, {
                  default: i(() => [
                    b("小")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }),
        o(d, { label: "隐藏必选标记" }, {
          default: i(() => [
            o(f, {
              "checked-children": "隐藏",
              "un-checked-children": "显示",
              checked: e.data.hideRequiredMark,
              "onUpdate:checked": t[5] || (t[5] = (h) => e.data.hideRequiredMark = h)
            }, null, 8, ["checked"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })
  ]);
}
const ma = /* @__PURE__ */ K(ra, [["render", fa]]), ga = J({
  name: "AntdWidgetConfig",
  components: {
    Draggable: qe
  },
  props: {
    select: {
      type: Object
    }
  },
  emits: ["update:select"],
  setup(e, t) {
    const a = le(e.select);
    pe(
      () => e.select,
      (f) => a.value = f
    );
    const n = St({
      get() {
        return a.value.options.rules.trigger.toString();
      },
      set(f) {
        f.includes(",") && (f = f.split(",")), a.value.options.rules.trigger = f;
      }
    });
    return pe(a, (f) => t.emit("update:select", f)), {
      data: a,
      hasKey: (f) => Object.keys(a.value.options).includes(f),
      trigger: n,
      handleInsertColumn: () => {
        a.value.columns.push({
          span: 0,
          list: []
        });
      },
      handleInsertOption: () => {
        const f = a.value.options.options.length + 1;
        a.value.options.options.push({
          label: `Option ${f}`,
          value: `Option ${f}`
        });
      },
      handleOptionsRemove: (f) => {
        a.value.type === "grid" ? a.value.columns.splice(f, 1) : a.value.options.options.splice(f, 1);
      },
      handleSelectModeChange: (f) => {
        const { value: c } = f.target;
        c === null ? a.value.options.defaultValue.length ? a.value.options.defaultValue = a.value.options.defaultValue[0] : a.value.options.defaultValue = null : a.value.options.defaultValue ? a.value.options.defaultValue instanceof Array || (a.value.options.defaultValue = [a.value.options.defaultValue]) : a.value.options.defaultValue = [];
      },
      handleSliderModeChange: (f) => {
        f ? a.value.options.defaultValue = [0, 0] : a.value.options.defaultValue = 0;
      }
    };
  }
}), ya = { style: { "margin-top": "5px" } }, va = { style: { "margin-bottom": "5px" } }, ba = /* @__PURE__ */ T("h4", null, "验证规则", -1);
function ha(e, t, a, n, u, y) {
  const p = ze, r = ve, d = De, v = Re, f = ye, c = me, h = Ot, w = ge, S = Jt, z = Te, B = Le, O = G("Draggable"), $ = Ve, P = je, D = Me, N = Ie, F = Pe, _ = Ne, ee = be;
  return e.data ? (s(), g(ee, {
    layout: "vertical",
    key: e.data.key
  }, {
    default: i(() => [
      e.data.type !== "grid" ? (s(), g(r, {
        key: 0,
        label: "字段标识"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.model,
            "onUpdate:value": t[0] || (t[0] = (l) => e.data.model = l)
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.data.type !== "grid" ? (s(), g(r, {
        key: 1,
        label: "标题"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.label,
            "onUpdate:value": t[1] || (t[1] = (l) => e.data.label = l)
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("width") ? (s(), g(r, {
        key: 2,
        label: "宽度"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.options.width,
            "onUpdate:value": t[2] || (t[2] = (l) => e.data.options.width = l)
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("placeholder") ? (s(), g(r, {
        key: 3,
        label: "占位内容"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.options.placeholder,
            "onUpdate:value": t[3] || (t[3] = (l) => e.data.options.placeholder = l)
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("defaultValue") && (e.data.type === "input" || e.data.type === "password" || e.data.type === "textarea" || e.data.type === "text" || e.data.type === "rate" || e.data.type === "switch" || e.data.type === "slider") ? (s(), g(r, {
        key: 4,
        label: "默认内容"
      }, {
        default: i(() => [
          e.data.type === "input" || e.data.type === "password" || e.data.type === "text" ? (s(), g(p, {
            key: 0,
            value: e.data.options.defaultValue,
            "onUpdate:value": t[4] || (t[4] = (l) => e.data.options.defaultValue = l)
          }, null, 8, ["value"])) : m("", !0),
          e.data.type === "textarea" ? (s(), g(d, {
            key: 1,
            value: e.data.options.defaultValue,
            "onUpdate:value": t[5] || (t[5] = (l) => e.data.options.defaultValue = l)
          }, null, 8, ["value"])) : m("", !0),
          e.data.type === "rate" ? (s(), g(v, {
            key: 2,
            value: e.data.options.defaultValue,
            "onUpdate:value": t[6] || (t[6] = (l) => e.data.options.defaultValue = l),
            count: e.data.options.max,
            allowHalf: e.data.options.allowHalf,
            allowClear: e.data.options.allowClear
          }, null, 8, ["value", "count", "allowHalf", "allowClear"])) : m("", !0),
          e.data.type === "switch" ? (s(), g(f, {
            key: 3,
            checked: e.data.options.defaultValue,
            "onUpdate:checked": t[7] || (t[7] = (l) => e.data.options.defaultValue = l)
          }, null, 8, ["checked"])) : m("", !0),
          e.data.type === "slider" ? (s(), C(A, { key: 4 }, [
            e.data.options.range ? m("", !0) : (s(), g(c, {
              key: 0,
              value: e.data.options.defaultValue,
              "onUpdate:value": t[8] || (t[8] = (l) => e.data.options.defaultValue = l),
              valueModifiers: { number: !0 }
            }, null, 8, ["value"])),
            e.data.options.range ? (s(), C(A, { key: 1 }, [
              o(c, {
                value: e.data.options.defaultValue[0],
                "onUpdate:value": t[9] || (t[9] = (l) => e.data.options.defaultValue[0] = l),
                valueModifiers: { number: !0 },
                max: e.data.options.max
              }, null, 8, ["value", "max"]),
              o(c, {
                value: e.data.options.defaultValue[1],
                "onUpdate:value": t[10] || (t[10] = (l) => e.data.options.defaultValue[1] = l),
                valueModifiers: { number: !0 },
                max: e.data.options.max
              }, null, 8, ["value", "max"])
            ], 64)) : m("", !0)
          ], 64)) : m("", !0)
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("maxlength") ? (s(), g(r, {
        key: 5,
        label: "最大长度"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.options.maxlength,
            "onUpdate:value": t[11] || (t[11] = (l) => e.data.options.maxlength = l),
            valueModifiers: { number: !0 }
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("max") ? (s(), g(r, {
        key: 6,
        label: "最大值"
      }, {
        default: i(() => [
          o(c, {
            value: e.data.options.max,
            "onUpdate:value": t[12] || (t[12] = (l) => e.data.options.max = l),
            valueModifiers: { number: !0 }
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("min") ? (s(), g(r, {
        key: 7,
        label: "最小值"
      }, {
        default: i(() => [
          o(c, {
            value: e.data.options.min,
            "onUpdate:value": t[13] || (t[13] = (l) => e.data.options.min = l),
            valueModifiers: { number: !0 }
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("step") ? (s(), g(r, {
        key: 8,
        label: "步长"
      }, {
        default: i(() => [
          o(c, {
            value: e.data.options.step,
            "onUpdate:value": t[14] || (t[14] = (l) => e.data.options.step = l),
            valueModifiers: { number: !0 },
            min: 0
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("prefix") ? (s(), g(r, {
        key: 9,
        label: "前缀"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.options.prefix,
            "onUpdate:value": t[15] || (t[15] = (l) => e.data.options.prefix = l)
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("suffix") ? (s(), g(r, {
        key: 10,
        label: "后缀"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.options.suffix,
            "onUpdate:value": t[16] || (t[16] = (l) => e.data.options.suffix = l)
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("addonBefore") ? (s(), g(r, {
        key: 11,
        label: "前置标签"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.options.addonBefore,
            "onUpdate:value": t[17] || (t[17] = (l) => e.data.options.addonBefore = l)
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("addonAfter") ? (s(), g(r, {
        key: 12,
        label: "后置标签"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.options.addonAfter,
            "onUpdate:value": t[18] || (t[18] = (l) => e.data.options.addonAfter = l)
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("checkedChildren") ? (s(), g(r, {
        key: 13,
        label: "选中时的内容"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.options.checkedChildren,
            "onUpdate:value": t[19] || (t[19] = (l) => e.data.options.checkedChildren = l)
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("unCheckedChildren") ? (s(), g(r, {
        key: 14,
        label: "非选中时的内容"
      }, {
        default: i(() => [
          o(p, {
            value: e.data.options.unCheckedChildren,
            "onUpdate:value": t[20] || (t[20] = (l) => e.data.options.unCheckedChildren = l)
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("range") ? (s(), g(r, {
        key: 15,
        label: "双滑块模式"
      }, {
        default: i(() => [
          o(f, {
            checked: e.data.options.range,
            "onUpdate:checked": t[21] || (t[21] = (l) => e.data.options.range = l),
            onChange: e.handleSliderModeChange
          }, null, 8, ["checked", "onChange"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("reverse") ? (s(), g(r, {
        key: 16,
        label: "反向坐标轴"
      }, {
        default: i(() => [
          o(f, {
            checked: e.data.options.reverse,
            "onUpdate:checked": t[22] || (t[22] = (l) => e.data.options.reverse = l)
          }, null, 8, ["checked"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("visibilityToggle") ? (s(), g(r, {
        key: 17,
        label: "是否显示切换按钮"
      }, {
        default: i(() => [
          o(f, {
            "checked-children": "显示",
            "un-checked-children": "隐藏",
            checked: e.data.options.visibilityToggle,
            "onUpdate:checked": t[23] || (t[23] = (l) => e.data.options.visibilityToggle = l)
          }, null, 8, ["checked"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("showCount") ? (s(), g(r, {
        key: 18,
        label: "是否显示字数"
      }, {
        default: i(() => [
          o(f, {
            "checked-children": "显示",
            "un-checked-children": "隐藏",
            checked: e.data.options.showCount,
            "onUpdate:checked": t[24] || (t[24] = (l) => e.data.options.showCount = l)
          }, null, 8, ["checked"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("autoSize") ? (s(), g(r, {
        key: 19,
        label: "是否自适应内容高度"
      }, {
        default: i(() => [
          o(f, {
            "checked-children": "是",
            "un-checked-children": "否",
            checked: e.data.options.autoSize,
            "onUpdate:checked": t[25] || (t[25] = (l) => e.data.options.autoSize = l)
          }, null, 8, ["checked"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("rows") && !e.data.options.autosize ? (s(), g(r, {
        key: 20,
        label: "行数"
      }, {
        default: i(() => [
          o(c, {
            value: e.data.options.rows,
            "onUpdate:value": t[26] || (t[26] = (l) => e.data.options.rows = l),
            min: 0
          }, null, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("allowHalf") ? (s(), g(r, {
        key: 21,
        label: "是否允许半选"
      }, {
        default: i(() => [
          o(f, {
            "checked-children": "是",
            "un-checked-children": "否",
            checked: e.data.options.allowHalf,
            "onUpdate:checked": t[27] || (t[27] = (l) => e.data.options.allowHalf = l)
          }, null, 8, ["checked"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("inline") ? (s(), g(r, {
        key: 22,
        label: "布局方式"
      }, {
        default: i(() => [
          o(w, {
            "button-style": "solid",
            value: e.data.options.inline,
            "onUpdate:value": t[28] || (t[28] = (l) => e.data.options.inline = l)
          }, {
            default: i(() => [
              o(h, { value: !0 }, {
                default: i(() => [
                  b("行内")
                ]),
                _: 1
              }),
              o(h, { value: !1 }, {
                default: i(() => [
                  b("块级")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value"])
        ]),
        _: 1
      })) : m("", !0),
      e.data.type === "select" ? (s(), g(r, {
        key: 23,
        label: "模式"
      }, {
        default: i(() => [
          o(w, {
            "button-style": "solid",
            value: e.data.options.mode,
            "onUpdate:value": t[29] || (t[29] = (l) => e.data.options.mode = l),
            onChange: e.handleSelectModeChange
          }, {
            default: i(() => [
              o(h, { value: null }, {
                default: i(() => [
                  b("默认")
                ]),
                _: 1
              }),
              o(h, { value: "multiple" }, {
                default: i(() => [
                  b("多选")
                ]),
                _: 1
              }),
              o(h, { value: "tags" }, {
                default: i(() => [
                  b("标签")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value", "onChange"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("showSearch") ? (s(), g(r, {
        key: 24,
        label: "单选模式是否可搜索"
      }, {
        default: i(() => [
          o(f, {
            "checked-children": "是",
            "un-checked-children": "否",
            checked: e.data.options.showSearch,
            "onUpdate:checked": t[30] || (t[30] = (l) => e.data.options.showSearch = l)
          }, null, 8, ["checked"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("showLabel") ? (s(), g(r, {
        key: 25,
        label: "是否显示标签"
      }, {
        default: i(() => [
          o(f, {
            "checked-children": "是",
            "un-checked-children": "否",
            checked: e.data.options.showLabel,
            "onUpdate:checked": t[31] || (t[31] = (l) => e.data.options.showLabel = l)
          }, null, 8, ["checked"])
        ]),
        _: 1
      })) : m("", !0),
      e.hasKey("options") ? (s(), g(r, {
        key: 26,
        label: "选项"
      }, {
        default: i(() => [
          o(w, {
            "button-style": "solid",
            value: e.data.options.remote,
            "onUpdate:value": t[32] || (t[32] = (l) => e.data.options.remote = l)
          }, {
            default: i(() => [
              o(h, { value: !1 }, {
                default: i(() => [
                  b("静态数据")
                ]),
                _: 1
              }),
              o(h, { value: !0 }, {
                default: i(() => [
                  b("远端数据")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["value"]),
          e.data.options.remote ? (s(), g(S, {
            key: 0,
            direction: "vertical",
            style: { "margin-top": "10px" }
          }, {
            default: i(() => [
              o(p, {
                value: e.data.options.remoteFunc,
                "onUpdate:value": t[33] || (t[33] = (l) => e.data.options.remoteFunc = l),
                size: "small",
                "addon-before": "远端方法"
              }, null, 8, ["value"]),
              o(p, {
                value: e.data.options.props.label,
                "onUpdate:value": t[34] || (t[34] = (l) => e.data.options.props.label = l),
                size: "small",
                "addon-before": "标签"
              }, null, 8, ["value"]),
              o(p, {
                value: e.data.options.props.value,
                "onUpdate:value": t[35] || (t[35] = (l) => e.data.options.props.value = l),
                size: "small",
                "addon-before": "值"
              }, null, 8, ["value"])
            ]),
            _: 1
          })) : (s(), C(A, { key: 1 }, [
            e.data.type === "radio" || e.data.type === "select" && e.data.options.mode === null ? (s(), g(w, {
              key: 0,
              value: e.data.options.defaultValue,
              "onUpdate:value": t[36] || (t[36] = (l) => e.data.options.defaultValue = l)
            }, {
              default: i(() => [
                o(O, {
                  tag: "ul",
                  "item-key": "index",
                  ghostClass: "ghost",
                  handle: ".drag-item",
                  group: { name: "options" },
                  list: e.data.options.options
                }, {
                  item: i(({ element: l, index: Z }) => [
                    T("div", null, [
                      o(z, {
                        value: l.value,
                        style: { "margin-right": "0px" }
                      }, {
                        default: i(() => [
                          o(p, {
                            size: "small",
                            style: k({
                              width: e.data.options.showLabel ? "90px" : "180px"
                            }),
                            value: l.value,
                            "onUpdate:value": (V) => l.value = V
                          }, null, 8, ["style", "value", "onUpdate:value"]),
                          o(p, {
                            size: "small",
                            style: k({
                              width: e.data.options.showLabel ? "90px" : "0",
                              padding: e.data.options.showLabel ? "0 7px" : "0",
                              border: e.data.options.showLabel ? "1px solid #d9d9d9" : "none"
                            }),
                            value: l.label,
                            "onUpdate:value": (V) => l.label = V
                          }, null, 8, ["style", "value", "onUpdate:value"])
                        ]),
                        _: 2
                      }, 1032, ["value"]),
                      o(B, {
                        type: "primary",
                        shape: "circle",
                        size: "small",
                        style: { "margin-left": "10px" },
                        onClick: (V) => e.handleOptionsRemove(Z)
                      }, {
                        icon: i(() => []),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ]),
                  _: 1
                }, 8, ["list"])
              ]),
              _: 1
            }, 8, ["value"])) : m("", !0),
            e.data.type === "checkbox" || e.data.type === "select" && e.data.options.mode !== null ? (s(), g(P, {
              key: 1,
              value: e.data.options.defaultValue,
              "onUpdate:value": t[37] || (t[37] = (l) => e.data.options.defaultValue = l)
            }, {
              default: i(() => [
                o(O, {
                  tag: "ul",
                  "item-key": "index",
                  ghostClass: "ghost",
                  handle: ".drag-item",
                  group: { name: "options" },
                  list: e.data.options.options
                }, {
                  item: i(({ element: l, index: Z }) => [
                    T("li", null, [
                      o($, {
                        value: l.value,
                        style: { "margin-right": "0" }
                      }, {
                        default: i(() => [
                          o(p, {
                            size: "small",
                            style: k({
                              width: e.data.options.showLabel ? "90px" : "180px"
                            }),
                            value: l.value,
                            "onUpdate:value": (V) => l.value = V
                          }, null, 8, ["style", "value", "onUpdate:value"]),
                          o(p, {
                            size: "small",
                            style: k({
                              width: e.data.options.showLabel ? "90px" : "0",
                              padding: e.data.options.showLabel ? "0 7px" : "0",
                              border: e.data.options.showLabel ? "1px solid #d9d9d9" : "none"
                            }),
                            value: l.label,
                            "onUpdate:value": (V) => l.label = V
                          }, null, 8, ["style", "value", "onUpdate:value"])
                        ]),
                        _: 2
                      }, 1032, ["value"]),
                      o(B, {
                        type: "primary",
                        shape: "circle",
                        size: "small",
                        style: { "margin-left": "10px" },
                        onClick: (V) => e.handleOptionsRemove(Z)
                      }, {
                        icon: i(() => []),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ]),
                  _: 1
                }, 8, ["list"])
              ]),
              _: 1
            }, 8, ["value"])) : m("", !0),
            T("div", ya, [
              o(B, {
                type: "link",
                size: "small",
                onClick: e.handleInsertOption
              }, {
                default: i(() => [
                  b("添加选项")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 64))
        ]),
        _: 1
      })) : m("", !0),
      e.data.type === "time" ? (s(), g(r, {
        key: 27,
        label: "默认值"
      }, {
        default: i(() => [
          o(D, {
            style: { width: "100%" },
            value: e.data.options.defaultValue,
            "onUpdate:value": t[38] || (t[38] = (l) => e.data.options.defaultValue = l),
            format: e.data.options.format,
            placeholder: e.data.options.placeholder
          }, null, 8, ["value", "format", "placeholder"])
        ]),
        _: 1
      })) : m("", !0),
      e.data.type === "date" ? (s(), g(r, {
        key: 28,
        label: "默认值"
      }, {
        default: i(() => [
          o(N, {
            style: { width: "100%" },
            value: e.data.options.defaultValue,
            "onUpdate:value": t[39] || (t[39] = (l) => e.data.options.defaultValue = l),
            format: e.data.options.format,
            placeholder: e.data.options.placeholder
          }, null, 8, ["value", "format", "placeholder"])
        ]),
        _: 1
      })) : m("", !0),
      e.data.type === "time" || e.data.type === "date" ? (s(), C(A, { key: 29 }, [
        o(r, { label: "格式" }, {
          default: i(() => [
            o(p, {
              value: e.data.options.format,
              "onUpdate:value": t[40] || (t[40] = (l) => e.data.options.format = l)
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        o(r, { label: "绑定值格式" }, {
          default: i(() => [
            o(p, {
              value: e.data.options.valueFormat,
              "onUpdate:value": t[41] || (t[41] = (l) => e.data.options.valueFormat = l)
            }, null, 8, ["value"])
          ]),
          _: 1
        })
      ], 64)) : m("", !0),
      e.data.type === "img-upload" ? (s(), C(A, { key: 30 }, [
        o(r, { label: "是否支持多选" }, {
          default: i(() => [
            o(f, {
              "checked-children": "是",
              "un-checked-children": "否",
              checked: e.data.options.multiple,
              "onUpdate:checked": t[42] || (t[42] = (l) => e.data.options.multiple = l)
            }, null, 8, ["checked"])
          ]),
          _: 1
        }),
        o(r, { label: "模式" }, {
          default: i(() => [
            o(w, {
              "button-style": "solid",
              value: e.data.options.listType,
              "onUpdate:value": t[43] || (t[43] = (l) => e.data.options.listType = l)
            }, {
              default: i(() => [
                o(h, { value: "text" }, {
                  default: i(() => [
                    b("text")
                  ]),
                  _: 1
                }),
                o(h, { value: "picture" }, {
                  default: i(() => [
                    b("picture")
                  ]),
                  _: 1
                }),
                o(h, { value: "picture-card" }, {
                  default: i(() => [
                    b("picture-card")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }),
        o(r, { label: "文件参数名" }, {
          default: i(() => [
            o(p, {
              value: e.data.options.name,
              "onUpdate:value": t[44] || (t[44] = (l) => e.data.options.name = l)
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        o(r, { label: "上传地址" }, {
          default: i(() => [
            o(p, {
              value: e.data.options.action,
              "onUpdate:value": t[45] || (t[45] = (l) => e.data.options.action = l),
              placeHolder: "正常无需填写"
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        o(r, { label: "接受上传的文件类型(多个使用 , 隔开)" }, {
          default: i(() => [
            o(p, {
              value: e.data.options.accept,
              "onUpdate:value": t[46] || (t[46] = (l) => e.data.options.accept = l)
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        o(r, { label: "最大上传数量" }, {
          default: i(() => [
            o(c, {
              value: e.data.options.maxCount,
              "onUpdate:value": t[47] || (t[47] = (l) => e.data.options.maxCount = l),
              valueModifiers: { number: !0 },
              min: 1
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        o(r, { label: "上传请求方法" }, {
          default: i(() => [
            o(w, {
              "button-style": "solid",
              value: e.data.options.method,
              "onUpdate:value": t[48] || (t[48] = (l) => e.data.options.method = l)
            }, {
              default: i(() => [
                o(h, { value: "post" }, {
                  default: i(() => [
                    b("POST")
                  ]),
                  _: 1
                }),
                o(h, { value: "put" }, {
                  default: i(() => [
                    b("PUT")
                  ]),
                  _: 1
                }),
                o(h, { value: "get" }, {
                  default: i(() => [
                    b("GET")
                  ]),
                  _: 1
                }),
                o(h, { value: "delete" }, {
                  default: i(() => [
                    b("DELETE")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        })
      ], 64)) : m("", !0),
      e.data.type === "cascader" ? (s(), g(r, {
        key: 31,
        label: "远端数据"
      }, {
        default: i(() => [
          o(S, { direction: "vertical" }, {
            default: i(() => [
              o(p, {
                value: e.data.options.remoteFunc,
                "onUpdate:value": t[49] || (t[49] = (l) => e.data.options.remoteFunc = l),
                size: "small",
                "addon-before": "远端方法"
              }, null, 8, ["value"]),
              o(p, {
                value: e.data.options.props.label,
                "onUpdate:value": t[50] || (t[50] = (l) => e.data.options.props.label = l),
                size: "small",
                "addon-before": "标签"
              }, null, 8, ["value"]),
              o(p, {
                value: e.data.options.props.value,
                "onUpdate:value": t[51] || (t[51] = (l) => e.data.options.props.value = l),
                size: "small",
                "addon-before": "值"
              }, null, 8, ["value"]),
              o(p, {
                value: e.data.options.props.children,
                "onUpdate:value": t[52] || (t[52] = (l) => e.data.options.props.children = l),
                size: "small",
                "addon-before": "子选项"
              }, null, 8, ["value"])
            ]),
            _: 1
          })
        ]),
        _: 1
      })) : m("", !0),
      e.data.type === "grid" ? (s(), C(A, { key: 32 }, [
        o(r, { label: "栅格间隔" }, {
          default: i(() => [
            o(c, {
              value: e.data.options.gutter,
              "onUpdate:value": t[53] || (t[53] = (l) => e.data.options.gutter = l),
              min: 0
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        o(r, { label: "列配置项" }, {
          default: i(() => [
            o(O, {
              tag: "ul",
              "item-key": "index",
              ghostClass: "ghost",
              handle: ".drag-item",
              group: { name: "options" },
              list: e.data.columns
            }, {
              item: i(({ element: l, index: Z }) => [
                T("li", va, [
                  o(B, {
                    type: "primary",
                    shape: "circle",
                    size: "small",
                    style: { "margin-left": "5px" },
                    onClick: (V) => e.handleOptionsRemove(Z)
                  }, null, 8, ["onClick"])
                ])
              ]),
              _: 1
            }, 8, ["list"]),
            T("div", null, [
              o(B, {
                type: "link",
                size: "small",
                onClick: e.handleInsertColumn
              }, {
                default: i(() => [
                  b(" 添加列 ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]),
          _: 1
        }),
        o(r, { label: "垂直对齐方式" }, {
          default: i(() => [
            o(w, {
              value: e.data.options.align,
              "onUpdate:value": t[54] || (t[54] = (l) => e.data.options.align = l),
              "button-style": "solid"
            }, {
              default: i(() => [
                o(h, { value: "top" }, {
                  default: i(() => [
                    b("顶部对齐")
                  ]),
                  _: 1
                }),
                o(h, { value: "middle" }, {
                  default: i(() => [
                    b("居中对齐")
                  ]),
                  _: 1
                }),
                o(h, { value: "bottom" }, {
                  default: i(() => [
                    b("底部对齐")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        }),
        o(r, { label: "水平排列方式" }, {
          default: i(() => [
            o(_, {
              value: e.data.options.justify,
              "onUpdate:value": t[55] || (t[55] = (l) => e.data.options.justify = l)
            }, {
              default: i(() => [
                o(F, { value: "start" }, {
                  default: i(() => [
                    b("左对齐")
                  ]),
                  _: 1
                }),
                o(F, { value: "end" }, {
                  default: i(() => [
                    b("右对齐")
                  ]),
                  _: 1
                }),
                o(F, { value: "center" }, {
                  default: i(() => [
                    b("居中")
                  ]),
                  _: 1
                }),
                o(F, { value: "space-around" }, {
                  default: i(() => [
                    b("两侧间隔相等")
                  ]),
                  _: 1
                }),
                o(F, { value: "space-between" }, {
                  default: i(() => [
                    b("两端对齐")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["value"])
          ]),
          _: 1
        })
      ], 64)) : m("", !0),
      e.data.type !== "grid" ? (s(), C(A, { key: 33 }, [
        e.hasKey("rules") || e.hasKey("readonly") || e.hasKey("disabled") || e.hasKey("allowClear") ? (s(), g(r, {
          key: 0,
          label: "操作属性"
        }, {
          default: i(() => [
            e.hasKey("rules") ? (s(), g($, {
              key: 0,
              checked: e.data.options.required,
              "onUpdate:checked": t[56] || (t[56] = (l) => e.data.options.required = l)
            }, {
              default: i(() => [
                b("必填")
              ]),
              _: 1
            }, 8, ["checked"])) : m("", !0),
            e.hasKey("readonly") ? (s(), g($, {
              key: 1,
              checked: e.data.options.readonly,
              "onUpdate:checked": t[57] || (t[57] = (l) => e.data.options.readonly = l)
            }, {
              default: i(() => [
                b("只读")
              ]),
              _: 1
            }, 8, ["checked"])) : m("", !0),
            e.hasKey("disabled") ? (s(), g($, {
              key: 2,
              checked: e.data.options.disabled,
              "onUpdate:checked": t[58] || (t[58] = (l) => e.data.options.disabled = l)
            }, {
              default: i(() => [
                b("禁用")
              ]),
              _: 1
            }, 8, ["checked"])) : m("", !0),
            e.hasKey("allowClear") ? (s(), g($, {
              key: 3,
              checked: e.data.options.allowClear,
              "onUpdate:checked": t[59] || (t[59] = (l) => e.data.options.allowClear = l)
            }, {
              default: i(() => [
                b("清除")
              ]),
              _: 1
            }, 8, ["checked"])) : m("", !0)
          ]),
          _: 1
        })) : m("", !0),
        e.hasKey("rules") ? (s(), C(A, { key: 1 }, [
          ba,
          o(r, { label: "枚举类型" }, {
            default: i(() => [
              o(p, {
                value: e.data.options.rules.enum,
                "onUpdate:value": t[60] || (t[60] = (l) => e.data.options.rules.enum = l)
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          o(r, { label: "字段长度" }, {
            default: i(() => [
              o(p, {
                value: e.data.options.rules.len,
                "onUpdate:value": t[61] || (t[61] = (l) => e.data.options.rules.len = l),
                valueModifiers: { number: !0 }
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          o(r, { label: "最大长度" }, {
            default: i(() => [
              o(p, {
                value: e.data.options.rules.max,
                "onUpdate:value": t[62] || (t[62] = (l) => e.data.options.rules.max = l),
                valueModifiers: { number: !0 }
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          o(r, { label: "校验文案" }, {
            default: i(() => [
              o(p, {
                value: e.data.options.rules.message,
                "onUpdate:value": t[63] || (t[63] = (l) => e.data.options.rules.message = l)
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          o(r, { label: "最小长度" }, {
            default: i(() => [
              o(p, {
                value: e.data.options.rules.min,
                "onUpdate:value": t[64] || (t[64] = (l) => e.data.options.rules.min = l),
                valueModifiers: { number: !0 }
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          o(r, { label: "正则表达式" }, {
            default: i(() => [
              o(p, {
                value: e.data.options.rules.pattern,
                "onUpdate:value": t[65] || (t[65] = (l) => e.data.options.rules.pattern = l)
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          o(r, { label: "校验类型" }, {
            default: i(() => [
              o(_, {
                value: e.data.options.rules.type,
                "onUpdate:value": t[66] || (t[66] = (l) => e.data.options.rules.type = l)
              }, {
                default: i(() => [
                  o(F, { value: "string" }, {
                    default: i(() => [
                      b("字符串")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "number" }, {
                    default: i(() => [
                      b("数字")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "boolean" }, {
                    default: i(() => [
                      b("布尔值")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "method" }, {
                    default: i(() => [
                      b("方法")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "regexp" }, {
                    default: i(() => [
                      b("正则表达式")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "integer" }, {
                    default: i(() => [
                      b("整数")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "float" }, {
                    default: i(() => [
                      b("浮点数")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "array" }, {
                    default: i(() => [
                      b("数组")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "object" }, {
                    default: i(() => [
                      b("对象")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "enum" }, {
                    default: i(() => [
                      b("枚举")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "date" }, {
                    default: i(() => [
                      b("日期")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "url" }, {
                    default: i(() => [
                      b("URL地址")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "hex" }, {
                    default: i(() => [
                      b("十六进制")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "email" }, {
                    default: i(() => [
                      b("邮箱地址")
                    ]),
                    _: 1
                  }),
                  o(F, { value: "any" }, {
                    default: i(() => [
                      b("任意类型")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          })
        ], 64)) : m("", !0)
      ], 64)) : m("", !0)
    ]),
    _: 1
  })) : m("", !0);
}
const ca = /* @__PURE__ */ K(ga, [["render", ha]]);
function I(e, t) {
  wa(e) && (e = "100%");
  var a = Ca(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), a && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function wa(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Ca(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ka(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function oe(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function we(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Fa(e, t, a) {
  return {
    r: I(e, 255) * 255,
    g: I(t, 255) * 255,
    b: I(a, 255) * 255
  };
}
function Ce(e, t, a) {
  return a < 0 && (a += 1), a > 1 && (a -= 1), a < 1 / 6 ? e + (t - e) * (6 * a) : a < 1 / 2 ? t : a < 2 / 3 ? e + (t - e) * (2 / 3 - a) * 6 : e;
}
function Oa(e, t, a) {
  var n, u, y;
  if (e = I(e, 360), t = I(t, 100), a = I(a, 100), t === 0)
    u = a, y = a, n = a;
  else {
    var p = a < 0.5 ? a * (1 + t) : a + t - a * t, r = 2 * a - p;
    n = Ce(r, p, e + 1 / 3), u = Ce(r, p, e), y = Ce(r, p, e - 1 / 3);
  }
  return { r: n * 255, g: u * 255, b: y * 255 };
}
function Aa(e, t, a) {
  e = I(e, 255), t = I(t, 255), a = I(a, 255);
  var n = Math.max(e, t, a), u = Math.min(e, t, a), y = 0, p = n, r = n - u, d = n === 0 ? 0 : r / n;
  if (n === u)
    y = 0;
  else {
    switch (n) {
      case e:
        y = (t - a) / r + (t < a ? 6 : 0);
        break;
      case t:
        y = (a - e) / r + 2;
        break;
      case a:
        y = (e - t) / r + 4;
        break;
    }
    y /= 6;
  }
  return { h: y, s: d, v: p };
}
function Sa(e, t, a) {
  e = I(e, 360) * 6, t = I(t, 100), a = I(a, 100);
  var n = Math.floor(e), u = e - n, y = a * (1 - t), p = a * (1 - u * t), r = a * (1 - (1 - u) * t), d = n % 6, v = [a, p, y, y, r, a][d], f = [r, a, a, p, y, y][d], c = [y, y, r, a, a, p][d];
  return { r: v * 255, g: f * 255, b: c * 255 };
}
function Ba(e, t, a, n) {
  var u = [
    we(Math.round(e).toString(16)),
    we(Math.round(t).toString(16)),
    we(Math.round(a).toString(16))
  ];
  return u.join("");
}
function tt(e) {
  return M(e) / 255;
}
function M(e) {
  return parseInt(e, 16);
}
var at = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function te(e) {
  var t = { r: 0, g: 0, b: 0 }, a = 1, n = null, u = null, y = null, p = !1, r = !1;
  return typeof e == "string" && (e = Ua(e)), typeof e == "object" && (q(e.r) && q(e.g) && q(e.b) ? (t = Fa(e.r, e.g, e.b), p = !0, r = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : q(e.h) && q(e.s) && q(e.v) ? (n = oe(e.s), u = oe(e.v), t = Sa(e.h, n, u), p = !0, r = "hsv") : q(e.h) && q(e.s) && q(e.l) && (n = oe(e.s), y = oe(e.l), t = Oa(e.h, n, y), p = !0, r = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (a = e.a)), a = ka(a), {
    ok: p,
    format: e.format || r,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a
  };
}
var Ea = "[-\\+]?\\d+%?", $a = "[-\\+]?\\d*\\.\\d+%?", W = "(?:".concat($a, ")|(?:").concat(Ea, ")"), ke = "[\\s|\\(]+(".concat(W, ")[,|\\s]+(").concat(W, ")[,|\\s]+(").concat(W, ")\\s*\\)?"), Fe = "[\\s|\\(]+(".concat(W, ")[,|\\s]+(").concat(W, ")[,|\\s]+(").concat(W, ")[,|\\s]+(").concat(W, ")\\s*\\)?"), R = {
  CSS_UNIT: new RegExp(W),
  rgb: new RegExp("rgb" + ke),
  rgba: new RegExp("rgba" + Fe),
  hsl: new RegExp("hsl" + ke),
  hsla: new RegExp("hsla" + Fe),
  hsv: new RegExp("hsv" + ke),
  hsva: new RegExp("hsva" + Fe),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Ua(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (at[e])
    e = at[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var a = R.rgb.exec(e);
  return a ? { r: a[1], g: a[2], b: a[3] } : (a = R.rgba.exec(e), a ? { r: a[1], g: a[2], b: a[3], a: a[4] } : (a = R.hsl.exec(e), a ? { h: a[1], s: a[2], l: a[3] } : (a = R.hsla.exec(e), a ? { h: a[1], s: a[2], l: a[3], a: a[4] } : (a = R.hsv.exec(e), a ? { h: a[1], s: a[2], v: a[3] } : (a = R.hsva.exec(e), a ? { h: a[1], s: a[2], v: a[3], a: a[4] } : (a = R.hex8.exec(e), a ? {
    r: M(a[1]),
    g: M(a[2]),
    b: M(a[3]),
    a: tt(a[4]),
    format: t ? "name" : "hex8"
  } : (a = R.hex6.exec(e), a ? {
    r: M(a[1]),
    g: M(a[2]),
    b: M(a[3]),
    format: t ? "name" : "hex"
  } : (a = R.hex4.exec(e), a ? {
    r: M(a[1] + a[1]),
    g: M(a[2] + a[2]),
    b: M(a[3] + a[3]),
    a: tt(a[4] + a[4]),
    format: t ? "name" : "hex8"
  } : (a = R.hex3.exec(e), a ? {
    r: M(a[1] + a[1]),
    g: M(a[2] + a[2]),
    b: M(a[3] + a[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function q(e) {
  return !!R.CSS_UNIT.exec(String(e));
}
var ie = 2, lt = 0.16, za = 0.05, Da = 0.05, Ta = 0.15, Ut = 5, zt = 4, Va = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function nt(e) {
  var t = e.r, a = e.g, n = e.b, u = Aa(t, a, n);
  return {
    h: u.h * 360,
    s: u.s,
    v: u.v
  };
}
function ue(e) {
  var t = e.r, a = e.g, n = e.b;
  return "#".concat(Ba(t, a, n));
}
function ja(e, t, a) {
  var n = a / 100, u = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return u;
}
function ot(e, t, a) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = a ? Math.round(e.h) - ie * t : Math.round(e.h) + ie * t : n = a ? Math.round(e.h) + ie * t : Math.round(e.h) - ie * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function it(e, t, a) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return a ? n = e.s - lt * t : t === zt ? n = e.s + lt : n = e.s + za * t, n > 1 && (n = 1), a && t === Ut && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function ut(e, t, a) {
  var n;
  return a ? n = e.v + Da * t : n = e.v - Ta * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Ee(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = [], n = te(e), u = Ut; u > 0; u -= 1) {
    var y = nt(n), p = ue(te({
      h: ot(y, u, !0),
      s: it(y, u, !0),
      v: ut(y, u, !0)
    }));
    a.push(p);
  }
  a.push(ue(n));
  for (var r = 1; r <= zt; r += 1) {
    var d = nt(n), v = ue(te({
      h: ot(d, r),
      s: it(d, r),
      v: ut(d, r)
    }));
    a.push(v);
  }
  return t.theme === "dark" ? Va.map(function(f) {
    var c = f.index, h = f.opacity, w = ue(ja(te(t.backgroundColor || "#141414"), te(a[c]), h * 100));
    return w;
  }) : a;
}
var Oe = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, se = {}, Ae = {};
Object.keys(Oe).forEach(function(e) {
  se[e] = Ee(Oe[e]), se[e].primary = se[e][5], Ae[e] = Ee(Oe[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Ae[e].primary = Ae[e][5];
});
var Ma = se.blue, Ia = Symbol("iconContext"), Dt = function() {
  return Qt(Ia, {
    prefixCls: le("anticon"),
    rootClassName: le(""),
    csp: le()
  });
};
function Ke() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ra(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var rt = "data-vc-order", Pa = "vc-icon-key", $e = /* @__PURE__ */ new Map();
function Tt() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Pa;
}
function We(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Na(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Vt(e) {
  return Array.from(($e.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function jt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ke())
    return null;
  var a = t.csp, n = t.prepend, u = document.createElement("style");
  u.setAttribute(rt, Na(n)), a && a.nonce && (u.nonce = a.nonce), u.innerHTML = e;
  var y = We(t), p = y.firstChild;
  if (n) {
    if (n === "queue") {
      var r = Vt(y).filter(function(d) {
        return ["prepend", "prependQueue"].includes(d.getAttribute(rt));
      });
      if (r.length)
        return y.insertBefore(u, r[r.length - 1].nextSibling), u;
    }
    y.insertBefore(u, p);
  } else
    y.appendChild(u);
  return u;
}
function La(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = We(t);
  return Vt(a).find(function(n) {
    return n.getAttribute(Tt(t)) === e;
  });
}
function Ha(e, t) {
  var a = $e.get(e);
  if (!a || !Ra(document, a)) {
    var n = jt("", t), u = n.parentNode;
    $e.set(e, u), e.removeChild(n);
  }
}
function Ja(e, t) {
  var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = We(a);
  Ha(n, a);
  var u = La(t, a);
  if (u)
    return a.csp && a.csp.nonce && u.nonce !== a.csp.nonce && (u.nonce = a.csp.nonce), u.innerHTML !== e && (u.innerHTML = e), u;
  var y = jt(e, a);
  return y.setAttribute(Tt(a), t), y;
}
function st(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(a);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(u) {
      return Object.getOwnPropertyDescriptor(a, u).enumerable;
    }))), n.forEach(function(u) {
      qa(e, u, a[u]);
    });
  }
  return e;
}
function qa(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function Ka(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function Wa(e, t) {
  Ka(e, "[@ant-design/icons-vue] ".concat(t));
}
function dt(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function Ue(e, t, a) {
  return a ? Ze(e.tag, st({
    key: t
  }, a, e.attrs), (e.children || []).map(function(n, u) {
    return Ue(n, "".concat(t, "-").concat(e.tag, "-").concat(u));
  })) : Ze(e.tag, st({
    key: t
  }, e.attrs), (e.children || []).map(function(n, u) {
    return Ue(n, "".concat(t, "-").concat(e.tag, "-").concat(u));
  }));
}
function Mt(e) {
  return Ee(e)[0];
}
function It(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Ga = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function Rt(e) {
  return e && e.getRootNode && e.getRootNode();
}
function Ya(e) {
  return Ke() ? Rt(e) instanceof ShadowRoot : !1;
}
function Qa(e) {
  return Ya(e) ? Rt(e) : null;
}
var Za = function() {
  var t = Dt(), a = t.prefixCls, n = t.csp, u = Zt(), y = Ga;
  a && (y = y.replace(/anticon/g, a.value)), Je(function() {
    if (Ke()) {
      var p = u.vnode.el, r = Qa(p);
      Ja(y, "@ant-design-vue-icons", {
        prepend: !0,
        csp: n.value,
        attachTo: r
      });
    }
  });
}, Xa = ["icon", "primaryColor", "secondaryColor"];
function _a(e, t) {
  if (e == null)
    return {};
  var a = xa(e, t), n, u;
  if (Object.getOwnPropertySymbols) {
    var y = Object.getOwnPropertySymbols(e);
    for (u = 0; u < y.length; u++)
      n = y[u], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
function xa(e, t) {
  if (e == null)
    return {};
  var a = {}, n = Object.keys(e), u, y;
  for (y = 0; y < n.length; y++)
    u = n[y], !(t.indexOf(u) >= 0) && (a[u] = e[u]);
  return a;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(a);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(u) {
      return Object.getOwnPropertyDescriptor(a, u).enumerable;
    }))), n.forEach(function(u) {
      el(e, u, a[u]);
    });
  }
  return e;
}
function el(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var ne = He({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function tl(e) {
  var t = e.primaryColor, a = e.secondaryColor;
  ne.primaryColor = t, ne.secondaryColor = a || Mt(t), ne.calculated = !!a;
}
function al() {
  return de({}, ne);
}
var Y = function(t, a) {
  var n = de({}, t, a.attrs), u = n.icon, y = n.primaryColor, p = n.secondaryColor, r = _a(n, Xa), d = ne;
  if (y && (d = {
    primaryColor: y,
    secondaryColor: p || Mt(y)
  }), Wa(dt(u), "icon should be icon definiton, but got ".concat(u)), !dt(u))
    return null;
  var v = u;
  return v && typeof v.icon == "function" && (v = de({}, v, {
    icon: v.icon(d.primaryColor, d.secondaryColor)
  })), Ue(v.icon, "svg-".concat(v.name), de({}, r, {
    "data-icon": v.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
Y.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
Y.inheritAttrs = !1;
Y.displayName = "IconBase";
Y.getTwoToneColors = al;
Y.setTwoToneColors = tl;
function ll(e, t) {
  return ul(e) || il(e, t) || ol(e, t) || nl();
}
function nl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ol(e, t) {
  if (e) {
    if (typeof e == "string")
      return pt(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return pt(e, t);
  }
}
function pt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function il(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], u = !0, y = !1, p, r;
    try {
      for (a = a.call(e); !(u = (p = a.next()).done) && (n.push(p.value), !(t && n.length === t)); u = !0)
        ;
    } catch (d) {
      y = !0, r = d;
    } finally {
      try {
        !u && a.return != null && a.return();
      } finally {
        if (y)
          throw r;
      }
    }
    return n;
  }
}
function ul(e) {
  if (Array.isArray(e))
    return e;
}
function Pt(e) {
  var t = It(e), a = ll(t, 2), n = a[0], u = a[1];
  return Y.setTwoToneColors({
    primaryColor: n,
    secondaryColor: u
  });
}
function rl() {
  var e = Y.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var sl = J({
  name: "InsertStyles",
  setup: function() {
    return Za(), function() {
      return null;
    };
  }
}), dl = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function pl(e, t) {
  return yl(e) || gl(e, t) || ml(e, t) || fl();
}
function fl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ml(e, t) {
  if (e) {
    if (typeof e == "string")
      return ft(e, t);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (a === "Object" && e.constructor && (a = e.constructor.name), a === "Map" || a === "Set")
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return ft(e, t);
  }
}
function ft(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var a = 0, n = new Array(t); a < t; a++)
    n[a] = e[a];
  return n;
}
function gl(e, t) {
  var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (a != null) {
    var n = [], u = !0, y = !1, p, r;
    try {
      for (a = a.call(e); !(u = (p = a.next()).done) && (n.push(p.value), !(t && n.length === t)); u = !0)
        ;
    } catch (d) {
      y = !0, r = d;
    } finally {
      try {
        !u && a.return != null && a.return();
      } finally {
        if (y)
          throw r;
      }
    }
    return n;
  }
}
function yl(e) {
  if (Array.isArray(e))
    return e;
}
function mt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(a);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(u) {
      return Object.getOwnPropertyDescriptor(a, u).enumerable;
    }))), n.forEach(function(u) {
      ae(e, u, a[u]);
    });
  }
  return e;
}
function ae(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
function vl(e, t) {
  if (e == null)
    return {};
  var a = bl(e, t), n, u;
  if (Object.getOwnPropertySymbols) {
    var y = Object.getOwnPropertySymbols(e);
    for (u = 0; u < y.length; u++)
      n = y[u], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
  }
  return a;
}
function bl(e, t) {
  if (e == null)
    return {};
  var a = {}, n = Object.keys(e), u, y;
  for (y = 0; y < n.length; y++)
    u = n[y], !(t.indexOf(u) >= 0) && (a[u] = e[u]);
  return a;
}
Pt(Ma.primary);
var Q = function(t, a) {
  var n, u = mt({}, t, a.attrs), y = u.class, p = u.icon, r = u.spin, d = u.rotate, v = u.tabindex, f = u.twoToneColor, c = u.onClick, h = vl(u, dl), w = Dt(), S = w.prefixCls, z = w.rootClassName, B = (n = {}, ae(n, z.value, !!z.value), ae(n, S.value, !0), ae(n, "".concat(S.value, "-").concat(p.name), !!p.name), ae(n, "".concat(S.value, "-spin"), !!r || p.name === "loading"), n), O = v;
  O === void 0 && c && (O = -1);
  var $ = d ? {
    msTransform: "rotate(".concat(d, "deg)"),
    transform: "rotate(".concat(d, "deg)")
  } : void 0, P = It(f), D = pl(P, 2), N = D[0], F = D[1];
  return o("span", mt({
    role: "img",
    "aria-label": p.name
  }, h, {
    onClick: c,
    class: [B, y],
    tabindex: O
  }), [o(Y, {
    icon: p,
    primaryColor: N,
    secondaryColor: F,
    style: $
  }, null), o(sl, null, null)]);
};
Q.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Q.displayName = "AntdIcon";
Q.inheritAttrs = !1;
Q.getTwoToneColor = rl;
Q.setTwoToneColor = Pt;
var hl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z" } }] }, name: "copy", theme: "outlined" };
function gt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(a);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(u) {
      return Object.getOwnPropertyDescriptor(a, u).enumerable;
    }))), n.forEach(function(u) {
      cl(e, u, a[u]);
    });
  }
  return e;
}
function cl(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var Ge = function(t, a) {
  var n = gt({}, t, a.attrs);
  return o(Q, gt({}, n, {
    icon: hl
  }), null);
};
Ge.displayName = "CopyOutlined";
Ge.inheritAttrs = !1;
var wl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, name: "delete", theme: "outlined" };
function yt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(a);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(u) {
      return Object.getOwnPropertyDescriptor(a, u).enumerable;
    }))), n.forEach(function(u) {
      Cl(e, u, a[u]);
    });
  }
  return e;
}
function Cl(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var he = function(t, a) {
  var n = yt({}, t, a.attrs);
  return o(Q, yt({}, n, {
    icon: wl
  }), null);
};
he.displayName = "DeleteOutlined";
he.inheritAttrs = !1;
var kl = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.3 506.3L781.7 405.6a7.23 7.23 0 00-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 00-11.3 0L405.6 242.3a7.23 7.23 0 005.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 000 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 00.1-11.4z" } }] }, name: "drag", theme: "outlined" };
function vt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? Object(arguments[t]) : {}, n = Object.keys(a);
    typeof Object.getOwnPropertySymbols == "function" && (n = n.concat(Object.getOwnPropertySymbols(a).filter(function(u) {
      return Object.getOwnPropertyDescriptor(a, u).enumerable;
    }))), n.forEach(function(u) {
      Fl(e, u, a[u]);
    });
  }
  return e;
}
function Fl(e, t, a) {
  return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
}
var ce = function(t, a) {
  var n = vt({}, t, a.attrs);
  return o(Q, vt({}, n, {
    icon: kl
  }), null);
};
ce.displayName = "DragOutlined";
ce.inheritAttrs = !1;
const Ol = J({
  name: "AntdWidgetFormItem",
  components: { DeleteOutlined: he, CopyOutlined: Ge, DragOutlined: ce },
  props: {
    config: {
      type: Object,
      required: !0
    },
    element: {
      type: Object,
      required: !0
    },
    selectWidget: {
      type: Object
    }
  },
  emits: ["copy", "delete"],
  setup() {
    return {
      handleFilterOption: (t, a) => a.label.toLowerCase().includes(t)
    };
  }
}), Al = { class: "widget-item-container" }, Sl = { key: 12 }, Bl = {
  key: 1,
  class: "widget-view-action"
}, El = {
  key: 2,
  class: "widget-view-drag"
};
function $l(e, t, a, n, u, y) {
  var V, Ye, Qe;
  const p = ze, r = ht, d = De, v = me, f = Te, c = ge, h = Ve, w = je, S = Me, z = Ie, B = Re, O = Pe, $ = Ne, P = ye, D = ct, N = wt, F = Ct, _ = ve, ee = G("CopyOutlined"), l = G("DeleteOutlined"), Z = G("DragOutlined");
  return s(), C("div", Al, [
    e.element ? (s(), g(_, {
      class: x(["widget-view", { active: ((V = e.selectWidget) == null ? void 0 : V.key) === e.element.key }]),
      key: e.element.key,
      label: e.element.label,
      rules: e.element.options.rules
    }, {
      default: i(() => [
        e.element.type === "input" ? (s(), g(p, {
          key: 0,
          readonly: "",
          size: e.config.size,
          value: e.element.options.defaultValue,
          style: k({ width: e.element.options.width }),
          placeholder: e.element.options.placeholder,
          maxlength: parseInt(e.element.options.maxlength),
          prefix: e.element.options.prefix,
          suffix: e.element.options.suffix,
          addonBefore: e.element.options.addonBefore,
          addonAfter: e.element.options.addonAfter,
          allowClear: e.element.options.allowClear,
          disabled: e.element.options.disabled
        }, null, 8, ["size", "value", "style", "placeholder", "maxlength", "prefix", "suffix", "addonBefore", "addonAfter", "allowClear", "disabled"])) : m("", !0),
        e.element.type === "password" ? (s(), g(r, {
          key: 1,
          readonly: "",
          size: e.config.size,
          value: e.element.options.defaultValue,
          style: k({ width: e.element.options.width }),
          placeholder: e.element.options.placeholder,
          maxlength: e.element.options.maxlength,
          prefix: e.element.options.prefix,
          suffix: e.element.options.suffix,
          addonBefore: e.element.options.addonBefore,
          addonAfter: e.element.options.addonAfter,
          allowClear: e.element.options.allowClear,
          disabled: e.element.options.disabled,
          visibilityToggle: e.element.options.visibilityToggle
        }, null, 8, ["size", "value", "style", "placeholder", "maxlength", "prefix", "suffix", "addonBefore", "addonAfter", "allowClear", "disabled", "visibilityToggle"])) : m("", !0),
        e.element.type === "textarea" ? (s(), g(d, {
          key: 2,
          style: k([{ resize: "none" }, { width: e.element.options.width }]),
          readonly: "",
          size: e.config.size,
          rows: e.element.options.rows,
          value: e.element.options.defaultValue,
          placeholder: e.element.options.placeholder,
          maxlength: e.element.options.maxlength,
          showCount: e.element.options.showCount,
          autoSize: e.element.options.autoSize,
          allowClear: e.element.options.allowClear,
          disabled: e.element.options.disabled
        }, null, 8, ["size", "rows", "value", "style", "placeholder", "maxlength", "showCount", "autoSize", "allowClear", "disabled"])) : m("", !0),
        e.element.type === "number" ? (s(), g(v, {
          key: 3,
          readonly: "",
          size: e.config.size,
          value: e.element.options.defaultValue,
          style: k({ width: e.element.options.width }),
          max: e.element.options.max,
          min: e.element.options.min,
          disabled: e.element.options.disabled
        }, null, 8, ["size", "value", "style", "max", "min", "disabled"])) : m("", !0),
        e.element.type === "radio" ? (s(), g(c, {
          key: 4,
          size: e.config.size,
          value: e.element.options.defaultValue,
          style: k({ width: e.element.options.width }),
          disabled: e.element.options.disabled
        }, {
          default: i(() => [
            (s(!0), C(A, null, H(e.element.options.options, (E) => (s(), g(f, {
              key: E.value,
              value: E.value,
              style: k({
                display: e.element.options.inline ? "inline-block" : "block"
              })
            }, {
              default: i(() => [
                b(L(e.element.options.showLabel ? E.label : E.value), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["size", "value", "style", "disabled"])) : m("", !0),
        e.element.type === "checkbox" ? (s(), g(w, {
          key: 5,
          value: e.element.options.defaultValue,
          style: k({ width: e.element.options.width }),
          disabled: e.element.options.disabled
        }, {
          default: i(() => [
            (s(!0), C(A, null, H(e.element.options.options, (E) => (s(), g(h, {
              key: E.value,
              value: E.value,
              style: k({
                display: e.element.options.inline ? "inline-block" : "block"
              })
            }, {
              default: i(() => [
                b(L(e.element.options.showLabel ? E.label : E.value), 1)
              ]),
              _: 2
            }, 1032, ["value", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["value", "style", "disabled"])) : m("", !0),
        e.element.type === "time" ? (s(), g(S, {
          key: 6,
          size: e.config.size,
          value: e.element.options.defaultValue,
          placeholder: e.element.options.placeholder,
          inputReadOnly: e.element.options.readonly,
          allowClear: e.element.options.allowClear,
          format: e.element.options.format,
          valueFormat: e.element.options.valueFormat,
          disabled: e.element.options.disabled,
          style: k({ width: e.element.options.width })
        }, null, 8, ["size", "value", "placeholder", "inputReadOnly", "allowClear", "format", "valueFormat", "disabled", "style"])) : m("", !0),
        e.element.type === "date" ? (s(), g(z, {
          key: 7,
          size: e.config.size,
          value: e.element.options.defaultValue,
          placeholder: e.element.options.placeholder,
          inputReadOnly: e.element.options.readonly,
          allowClear: e.element.options.allowClear,
          format: e.element.options.format,
          disabled: e.element.options.disabled,
          style: k({ width: e.element.options.width })
        }, null, 8, ["size", "value", "placeholder", "inputReadOnly", "allowClear", "format", "disabled", "style"])) : m("", !0),
        e.element.type === "rate" ? (s(), g(B, {
          key: 8,
          value: e.element.options.defaultValue,
          count: e.element.options.max,
          allowHalf: e.element.options.allowHalf,
          allowClear: e.element.options.allowClear,
          disabled: e.element.options.disabled
        }, null, 8, ["value", "count", "allowHalf", "allowClear", "disabled"])) : m("", !0),
        e.element.type === "select" ? (s(), g($, {
          key: 9,
          size: e.config.size,
          mode: e.element.options.mode,
          value: e.element.options.defaultValue,
          placeholder: e.element.options.placeholder,
          "filter-option": e.handleFilterOption,
          allowClear: e.element.options.clearable,
          showSearch: e.element.options.showSearch,
          disabled: e.element.options.disabled,
          style: k({ width: e.element.options.width })
        }, {
          default: i(() => [
            (s(!0), C(A, null, H(e.element.options.options, (E) => (s(), g(O, {
              key: E.value,
              value: E.value,
              label: e.element.options.showLabel ? E.label : E.value
            }, {
              default: i(() => [
                b(L(e.element.options.showLabel ? E.label : E.value), 1)
              ]),
              _: 2
            }, 1032, ["value", "label"]))), 128))
          ]),
          _: 1
        }, 8, ["size", "mode", "value", "placeholder", "filter-option", "allowClear", "showSearch", "disabled", "style"])) : m("", !0),
        e.element.type === "switch" ? (s(), g(P, {
          key: 10,
          size: e.config.size === "large" ? "default" : e.config.size,
          checked: e.element.options.defaultValue,
          checkedChildren: e.element.options.checkedChildren,
          unCheckedChildren: e.element.options.unCheckedChildren,
          disabled: e.element.options.disabled
        }, null, 8, ["size", "checked", "checkedChildren", "unCheckedChildren", "disabled"])) : m("", !0),
        e.element.type === "slider" ? (s(), g(D, {
          key: 11,
          value: e.element.options.defaultValue,
          min: e.element.options.min,
          max: e.element.options.max,
          step: e.element.options.step,
          range: e.element.options.range,
          reverse: e.element.options.reverse,
          disabled: e.element.options.disabled,
          style: k({ width: e.element.options.width })
        }, null, 8, ["value", "min", "max", "step", "range", "reverse", "disabled", "style"])) : m("", !0),
        e.element.type == "text" ? (s(), C("span", Sl, L(e.element.options.defaultValue), 1)) : m("", !0),
        e.element.type === "img-upload" ? (s(), g(N, {
          key: 13,
          name: e.element.options.file,
          action: e.element.options.action,
          accept: e.element.options.accept,
          "file-list": e.element.options.defaultValue,
          listType: e.element.options.listType,
          multiple: e.element.options.multiple,
          disabled: e.element.options.disabled
        }, null, 8, ["name", "action", "accept", "file-list", "listType", "multiple", "disabled"])) : m("", !0),
        e.element.type === "cascader" ? (s(), g(F, {
          key: 14,
          size: e.config.size,
          value: e.element.options.defaultValue,
          options: e.element.options.remoteOptions,
          placeholder: e.element.options.placeholder,
          allowClear: e.element.options.allowClear,
          disabled: e.element.options.disabled,
          style: k({ width: e.element.options.width })
        }, null, 8, ["size", "value", "options", "placeholder", "allowClear", "disabled", "style"])) : m("", !0)
      ]),
      _: 1
    }, 8, ["class", "label", "rules"])) : m("", !0),
    ((Ye = e.selectWidget) == null ? void 0 : Ye.key) === e.element.key ? (s(), C("div", Bl, [
      o(ee, {
        style: { color: "#fff", margin: " 0 4px " },
        class: "copy",
        onClick: t[0] || (t[0] = fe((E) => e.$emit("copy"), ["stop"]))
      }),
      o(l, {
        style: { color: "#fff", margin: " 0 4px " },
        class: "delete",
        onClick: t[1] || (t[1] = fe((E) => e.$emit("delete"), ["stop"]))
      })
    ])) : m("", !0),
    ((Qe = e.selectWidget) == null ? void 0 : Qe.key) === e.element.key ? (s(), C("div", El, [
      o(Z, {
        style: { color: "#fff", margin: " 0 5px " },
        class: "drag-widget"
      })
    ])) : m("", !0)
  ]);
}
const Nt = /* @__PURE__ */ K(Ol, [["render", $l]]);
let re;
const Ul = new Uint8Array(16);
function zl() {
  if (!re && (re = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !re))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return re(Ul);
}
const U = [];
for (let e = 0; e < 256; ++e)
  U.push((e + 256).toString(16).slice(1));
function Dl(e, t = 0) {
  return U[e[t + 0]] + U[e[t + 1]] + U[e[t + 2]] + U[e[t + 3]] + "-" + U[e[t + 4]] + U[e[t + 5]] + "-" + U[e[t + 6]] + U[e[t + 7]] + "-" + U[e[t + 8]] + U[e[t + 9]] + "-" + U[e[t + 10]] + U[e[t + 11]] + U[e[t + 12]] + U[e[t + 13]] + U[e[t + 14]] + U[e[t + 15]];
}
const Tl = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), bt = {
  randomUUID: Tl
};
function Se(e, t, a) {
  if (bt.randomUUID && !t && !e)
    return bt.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || zl)();
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Dl(n);
}
const Lt = (e, t, a) => {
  const n = [];
  return t.forEach((u) => {
    u.key === e ? (n.push(u), n.push(a)) : (u.columns && (u.columns = u.columns.map((y) => ({
      ...y,
      list: Lt(e, y.list, a)
    }))), n.push(u));
  }), n;
}, Ht = (e, t) => {
  const a = [];
  return t.forEach((n) => {
    n.key !== e && (n.columns && (n.columns = n.columns.map((u) => ({
      ...u,
      list: Ht(e, u.list)
    }))), a.push(n));
  }), a;
}, Vl = J({
  name: "AntdWidgetForm",
  components: {
    Draggable: qe,
    DragOutlined: ce,
    AntdWidgetFormItem: Nt,
    DeleteOutlined: he
  },
  props: {
    widgetForm: {
      type: Object,
      required: !0
    },
    widgetFormSelect: {
      type: Object
    }
  },
  emits: ["update:widgetForm", "update:widgetFormSelect"],
  setup(e, t) {
    return {
      handleItemClick: (r) => {
        t.emit("update:widgetFormSelect", r);
      },
      handleCopyClick: (r, d) => {
        const v = Se().replaceAll("-", ""), f = JSON.parse(JSON.stringify(e.widgetForm.list));
        let c = {
          ...d[r],
          key: v,
          model: `${d[r].type}_${v}`,
          rules: d[r].rules ?? []
        };
        (d[r].type === "radio" || d[r].type === "checkbox" || d[r].type === "select") && (c = {
          ...c,
          options: {
            ...c.options,
            options: c.options.options.map((h) => ({ ...h }))
          }
        }), t.emit("update:widgetForm", {
          ...e.widgetForm,
          list: Lt(d[r].key, f, c)
        }), t.emit("update:widgetFormSelect", c);
      },
      handleDeleteClick: (r, d) => {
        const v = JSON.parse(JSON.stringify(e.widgetForm.list));
        d.length - 1 === r ? r === 0 ? Je(() => t.emit("update:widgetFormSelect", null)) : t.emit("update:widgetFormSelect", d[r - 1]) : t.emit("update:widgetFormSelect", d[r + 1]), t.emit("update:widgetForm", {
          ...e.widgetForm,
          list: Ht(d[r].key, v)
        });
      },
      handleMoveAdd: (r) => {
        const { newIndex: d } = r, v = Se().replaceAll("-", ""), f = JSON.parse(JSON.stringify(e.widgetForm.list));
        f[d] = {
          ...f[d],
          key: v,
          model: `${f[d].type}_${v}`,
          rules: []
        }, (f[d].type === "radio" || f[d].type === "checkbox" || f[d].type === "select") && (f[d] = {
          ...f[d],
          options: {
            ...f[d].options,
            options: f[d].options.options.map((c) => ({
              ...c
            }))
          }
        }), f[d].type === "grid" && (f[d] = {
          ...f[d],
          columns: f[d].columns.map((c) => ({ ...c }))
        }), t.emit("update:widgetForm", { ...e.widgetForm, list: f }), t.emit("update:widgetFormSelect", f[d]);
      },
      handleColMoveAdd: (r, d, v) => {
        const { newIndex: f, oldIndex: c, item: h } = r, w = JSON.parse(JSON.stringify(e.widgetForm.list));
        if (h.className.includes("data-grid"))
          return h.tagName === "DIV" && w.splice(c, 0, d.columns[v].list[f]), d.columns[v].list.splice(f, 1), !1;
        const S = Se().replaceAll("-", "");
        d.columns[v].list[f] = {
          ...d.columns[v].list[f],
          key: S,
          model: `${d.columns[v].list[f].type}_${S}`,
          rules: []
        }, (d.columns[v].list[f].type === "radio" || d.columns[v].list[f].type === "checkbox" || d.columns[v].list[f].type === "select") && (d.columns[v].list[f] = {
          ...d.columns[v].list[f],
          options: {
            ...d.columns[v].list[f].options,
            options: d.columns[v].list[f].options.options.map((z) => ({ ...z }))
          }
        }), t.emit("update:widgetFormSelect", d.columns[v].list[f]);
      }
    };
  }
}), jl = { class: "widget-form-container" }, Ml = {
  key: 0,
  class: "form-empty"
}, Il = {
  key: 0,
  class: "widget-view-action widget-col-action"
}, Rl = {
  key: 1,
  class: "widget-view-drag widget-col-drag"
};
function Pl(e, t, a, n, u, y) {
  const p = Nt, r = G("Draggable"), d = kt, v = G("DeleteOutlined"), f = G("DragOutlined"), c = Ft, h = be;
  return s(), C("div", jl, [
    e.widgetForm.list ? m("", !0) : (s(), C("div", Ml, "从左侧拖拽来添加字段")),
    o(h, {
      layout: e.widgetForm.config.layout,
      labelAlign: e.widgetForm.config.labelAlign,
      labelCol: e.widgetForm.config.labelCol,
      hideRequiredMark: e.widgetForm.config.hideRequiredMark
    }, {
      default: i(() => [
        o(r, {
          class: "widget-form-list",
          "item-key": "key",
          ghostClass: "ghost",
          handle: ".drag-widget",
          animation: 200,
          group: { name: "people" },
          list: e.widgetForm.list,
          onAdd: e.handleMoveAdd
        }, {
          item: i(({ element: w, index: S }) => [
            o(Xe, {
              name: "fade",
              tag: "div"
            }, {
              default: i(() => {
                var z;
                return [
                  w.type === "grid" ? (s(), C(A, { key: 0 }, [
                    w.key ? (s(), g(c, {
                      class: x(["widget-col widget-view", { active: ((z = e.widgetFormSelect) == null ? void 0 : z.key) === w.key }]),
                      type: "flex",
                      key: w.key,
                      gutter: w.options.gutter ?? 0,
                      justify: w.options.justify,
                      align: w.options.align,
                      onClick: (B) => e.handleItemClick(w)
                    }, {
                      default: i(() => {
                        var B, O;
                        return [
                          (s(!0), C(A, null, H(w.columns, ($, P) => (s(), g(d, {
                            key: P,
                            span: $.span ?? 0
                          }, {
                            default: i(() => [
                              o(r, {
                                class: "widget-col-list",
                                "item-key": "key",
                                ghostClass: "ghost",
                                handle: ".drag-widget",
                                animation: 200,
                                group: { name: "people" },
                                "no-transition-on-drag": !0,
                                list: $.list,
                                onAdd: (D) => e.handleColMoveAdd(D, w, P)
                              }, {
                                item: i(({ element: D, index: N }) => [
                                  o(Xe, {
                                    name: "fade",
                                    tag: "div"
                                  }, {
                                    default: i(() => [
                                      D.key ? (s(), g(p, {
                                        key: D.key,
                                        element: D,
                                        config: e.widgetForm.config,
                                        selectWidget: e.widgetFormSelect,
                                        onClick: fe((F) => e.handleItemClick(D), ["stop"]),
                                        onCopy: (F) => e.handleCopyClick(N, $.list),
                                        onDelete: (F) => e.handleDeleteClick(N, $.list)
                                      }, null, 8, ["element", "config", "selectWidget", "onClick", "onCopy", "onDelete"])) : m("", !0)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["list", "onAdd"])
                            ]),
                            _: 2
                          }, 1032, ["span"]))), 128)),
                          ((B = e.widgetFormSelect) == null ? void 0 : B.key) === w.key ? (s(), C("div", Il, [
                            o(v, {
                              iconClass: "delete",
                              onClick: fe(($) => e.handleDeleteClick(S, e.widgetForm.list), ["stop"])
                            }, null, 8, ["onClick"])
                          ])) : m("", !0),
                          ((O = e.widgetFormSelect) == null ? void 0 : O.key) === w.key ? (s(), C("div", Rl, [
                            o(f, {
                              iconClass: "move",
                              className: "drag-widget"
                            })
                          ])) : m("", !0)
                        ];
                      }),
                      _: 2
                    }, 1032, ["class", "gutter", "justify", "align", "onClick"])) : m("", !0)
                  ], 64)) : (s(), C(A, { key: 1 }, [
                    w.key ? (s(), g(p, {
                      key: w.key,
                      element: w,
                      config: e.widgetForm.config,
                      selectWidget: e.widgetFormSelect,
                      onClick: (B) => e.handleItemClick(w),
                      onCopy: (B) => e.handleCopyClick(S, e.widgetForm.list),
                      onDelete: (B) => e.handleDeleteClick(S, e.widgetForm.list)
                    }, null, 8, ["element", "config", "selectWidget", "onClick", "onCopy", "onDelete"])) : m("", !0)
                  ], 64))
                ];
              }),
              _: 2
            }, 1024)
          ]),
          _: 1
        }, 8, ["list", "onAdd"])
      ]),
      _: 1
    }, 8, ["layout", "labelAlign", "labelCol", "hideRequiredMark"])
  ]);
}
const Nl = /* @__PURE__ */ K(Vl, [["render", Pl]]), Ll = J({
  emits: ["uploadJson", "clearable", "preview", "generateJson", "generateCode", "save"]
});
function Hl(e, t, a, n, u, y) {
  const p = Le, r = At;
  return s(), g(r, { class: "btn-bar" }, {
    default: i(() => [
      Et(e.$slots, "default"),
      e.$attrs.uploadJson ? (s(), g(p, {
        key: 0,
        type: "link",
        size: "small",
        onClick: t[0] || (t[0] = (d) => e.$emit("uploadJson"))
      }, {
        icon: i(() => []),
        default: i(() => [
          b(" 导入JSON ")
        ]),
        _: 1
      })) : m("", !0),
      e.$attrs.clearable ? (s(), g(p, {
        key: 1,
        type: "link",
        size: "small",
        onClick: t[1] || (t[1] = (d) => e.$emit("clearable"))
      }, {
        icon: i(() => []),
        default: i(() => [
          b(" 清空 ")
        ]),
        _: 1
      })) : m("", !0),
      e.$attrs.preview ? (s(), g(p, {
        key: 2,
        type: "link",
        size: "small",
        onClick: t[2] || (t[2] = (d) => e.$emit("preview"))
      }, {
        icon: i(() => []),
        default: i(() => [
          b(" 预览 ")
        ]),
        _: 1
      })) : m("", !0),
      e.$attrs.generateJson ? (s(), g(p, {
        key: 3,
        type: "link",
        size: "small",
        onClick: t[3] || (t[3] = (d) => e.$emit("generateJson"))
      }, {
        icon: i(() => []),
        default: i(() => [
          b(" 生成JSON ")
        ]),
        _: 1
      })) : m("", !0),
      e.$attrs.generateCode ? (s(), g(p, {
        key: 4,
        type: "link",
        size: "small",
        onClick: t[4] || (t[4] = (d) => e.$emit("generateCode"))
      }, {
        icon: i(() => []),
        default: i(() => [
          b(" 生成代码 ")
        ]),
        _: 1
      })) : m("", !0),
      o(p, {
        type: "link",
        size: "small",
        onClick: t[5] || (t[5] = (d) => e.$emit("save"))
      }, {
        default: i(() => [
          b(" 保存 ")
        ]),
        _: 1
      })
    ]),
    _: 3
  });
}
const Jl = /* @__PURE__ */ K(Ll, [["render", Hl]]), ql = J({
  name: "ComponentGroup",
  components: {
    Draggable: qe
  },
  props: {
    title: {
      type: String,
      required: !0
    },
    fields: {
      required: !0
    },
    list: {
      required: !0
    }
  }
}), Kl = { class: "widget-cate" };
function Wl(e, t, a, n, u, y) {
  const p = G("Draggable");
  return s(), C(A, null, [
    T("div", Kl, L(e.title), 1),
    o(p, {
      tag: "ul",
      "item-key": "type",
      ghostClass: "ghost",
      group: { name: "people", pull: "clone", put: !1 },
      sort: !1,
      list: e.list
    }, {
      item: i(({ element: r }) => [
        e.fields.includes(r.type) ? (s(), C("li", {
          key: 0,
          class: x(["form-edit-widget-label", { "no-put": r.tpye === "divider" }])
        }, [
          T("a", null, [
            T("span", null, L(r.label), 1)
          ])
        ], 2)) : m("", !0)
      ]),
      _: 1
    }, 8, ["list"])
  ], 64);
}
const Gl = /* @__PURE__ */ K(ql, [["render", Wl]]), Yl = J({
  emits: ["save", "preview"],
  props: {
    widgetForm: {},
    customPreview: {
      type: Boolean,
      default: !1
    },
    preview: {
      type: Boolean,
      default: !0
    },
    generateCode: {
      type: Boolean,
      default: !1
    },
    generateJson: {
      type: Boolean,
      default: !1
    },
    uploadJson: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    basicFields: {
      type: Array,
      default: () => [
        "input",
        "password",
        "textarea",
        "number",
        "radio",
        "checkbox",
        "time",
        "date",
        "rate",
        "select",
        "switch",
        "slider",
        "text"
      ]
    },
    advanceFields: {
      type: Array,
      default: () => ["img-upload", "richtext-editor", "cascader"]
    },
    layoutFields: {
      type: Array,
      default: () => ["grid"]
    }
  },
  setup(e) {
    const t = He({
      antd: la,
      codeType: "",
      widgetForm: JSON.parse(JSON.stringify(e.widgetForm || X)),
      widgetFormSelect: void 0,
      generateFormRef: null,
      configTab: "widget",
      previewVisible: !1,
      uploadJsonVisible: !1,
      dataJsonVisible: !1,
      generateJsonVisible: !1,
      generateCodeVisible: !1,
      generateJsonTemplate: JSON.stringify(X, null, 2),
      dataJsonTemplate: "",
      dataCodeTemplate: "",
      codeLanguage: "vue",
      jsonEg: JSON.stringify(X, null, 2)
    }), a = () => {
      try {
        d(JSON.parse(t.jsonEg)), t.uploadJsonVisible = !1, et.success("上传成功");
      } catch {
        et.error("上传失败");
      }
    }, n = () => {
      t.generateFormRef.getData().then((f) => {
        t.dataJsonTemplate = JSON.stringify(f, null, 2), t.dataJsonVisible = !0;
      });
    }, u = () => (t.generateJsonTemplate = JSON.stringify(
      t.widgetForm,
      null,
      2
    )) && (t.generateJsonVisible = !0), y = () => {
      t.widgetForm.list = [], t.widgetFormSelect = void 0;
    }, p = () => t.generateFormRef.reset(), r = () => t.widgetForm, d = (f) => {
      t.widgetForm.list = [], f.list.length && (t.widgetFormSelect = f.list[0]);
    }, v = () => y();
    return {
      ...Bt(t),
      handleUploadJson: a,
      handleGetData: n,
      handleGenerateJson: u,
      handleClearable: y,
      handleReset: p,
      getJson: r,
      setJson: d,
      clear: v
    };
  }
}), Ql = { class: "fc-style" }, Zl = { class: "components" };
function Xl(e, t, a, n, u, y) {
  const p = Gl, r = qt, d = Jl, v = Nl, f = Kt, c = Wt, h = At, w = ca, S = ma, z = ua, B = Gt;
  return s(), C("div", Ql, [
    o(c, { class: "fc-container" }, {
      default: i(() => [
        o(f, { class: "fc-main" }, {
          default: i(() => [
            o(c, null, {
              default: i(() => [
                o(r, {
                  theme: "light",
                  width: 250
                }, {
                  default: i(() => [
                    T("div", Zl, [
                      o(p, {
                        title: "基础字段",
                        fields: e.basicFields,
                        list: e.antd.basicComponents
                      }, null, 8, ["fields", "list"]),
                      o(p, {
                        title: "高级字段",
                        fields: e.advanceFields,
                        list: e.antd.advanceComponents
                      }, null, 8, ["fields", "list"])
                    ])
                  ]),
                  _: 1
                }),
                o(c, { class: "center-container" }, {
                  default: i(() => [
                    o(d, Be(e.$props, {
                      onPreview: t[0] || (t[0] = (O) => (e.previewVisible = e.customPreview === !1, e.$emit("preview", e.widgetForm))),
                      onSave: t[1] || (t[1] = (O) => e.$emit("save", e.widgetForm)),
                      onUploadJson: t[2] || (t[2] = () => e.uploadJsonVisible = !0),
                      onGenerateJson: e.handleGenerateJson,
                      onClearable: e.handleClearable
                    }), {
                      default: i(() => [
                        Et(e.$slots, "header")
                      ]),
                      _: 3
                    }, 16, ["onGenerateJson", "onClearable"]),
                    o(f, {
                      class: x({ "widget-empty": e.widgetForm.list })
                    }, {
                      default: i(() => [
                        o(v, {
                          ref: "widgetFormRef",
                          widgetForm: e.widgetForm,
                          "onUpdate:widgetForm": t[3] || (t[3] = (O) => e.widgetForm = O),
                          widgetFormSelect: e.widgetFormSelect,
                          "onUpdate:widgetFormSelect": t[4] || (t[4] = (O) => e.widgetFormSelect = O)
                        }, null, 8, ["widgetForm", "widgetFormSelect"])
                      ]),
                      _: 1
                    }, 8, ["class"])
                  ]),
                  _: 3
                }),
                o(r, {
                  theme: "light",
                  class: "widget-config-container",
                  width: 300
                }, {
                  default: i(() => [
                    o(c, null, {
                      default: i(() => [
                        o(h, null, {
                          default: i(() => [
                            T("div", {
                              class: x(["config-tab", { active: e.configTab === "widget" }]),
                              onClick: t[5] || (t[5] = (O) => e.configTab = "widget")
                            }, " 字段属性 ", 2),
                            T("div", {
                              class: x(["config-tab", { active: e.configTab === "form" }]),
                              onClick: t[6] || (t[6] = (O) => e.configTab = "form")
                            }, " 表单属性 ", 2)
                          ]),
                          _: 1
                        }),
                        o(f, { class: "config-content" }, {
                          default: i(() => [
                            _e(o(w, {
                              select: e.widgetFormSelect,
                              "onUpdate:select": t[7] || (t[7] = (O) => e.widgetFormSelect = O)
                            }, null, 8, ["select"]), [
                              [xe, e.configTab === "widget"]
                            ]),
                            _e(o(S, {
                              config: e.widgetForm.config,
                              "onUpdate:config": t[8] || (t[8] = (O) => e.widgetForm.config = O)
                            }, null, 8, ["config"]), [
                              [xe, e.configTab === "form"]
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        o(B, {
          open: e.previewVisible,
          "onUpdate:open": t[9] || (t[9] = (O) => e.previewVisible = O),
          width: 800,
          footer: null,
          title: "预览"
        }, {
          default: i(() => [
            o(z, {
              ref: "generateFormRef",
              data: e.widgetForm
            }, null, 8, ["data"])
          ]),
          _: 1
        }, 8, ["open"])
      ]),
      _: 3
    })
  ]);
}
const _l = /* @__PURE__ */ K(Yl, [["render", Xl]]), ln = {
  install(e) {
    e.component("AntdDesignForm", _l);
  }
};
export {
  _l as AntdDesignForm,
  ua as AntdGenerateForm,
  ln as default
};
