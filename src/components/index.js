
import AntdDesignForm from "./AntdDesignForm.vue";
import AntdGenerateForm from "./AntdGenerateForm.vue";
import '@/assets/index.less'

export { AntdDesignForm, AntdGenerateForm };

export default {
    install(app) {
        app.component("AntdDesignForm", AntdDesignForm);
    },
}
