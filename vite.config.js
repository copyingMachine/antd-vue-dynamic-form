import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
//组件自动引入
import Components from "unplugin-vue-components/vite";
//hooks自动引入
import AutoImport from "unplugin-auto-import/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/components/index.js'),
      name: 'AntdDesignForm',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue', 'vue-types', 'ant-design-vue', 'ant-design-vue/es', 'vuedraggable'],
      output: {
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'Antd',
          'ant-design-vue/es': 'Antdes',
          vuedraggable: 'vuedraggable'
        },
        exports: 'named'
      }
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        })
      ],
    }),
    AutoImport({
      // targets to transform
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        "vue",
      ],
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    open: "/"
  }
})