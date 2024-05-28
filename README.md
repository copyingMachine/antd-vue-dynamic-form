# antd-vue-dynamic-form
Dynamic form implementation based on ant-design-vue.
[github link](https://github.com/copyingMachine/antd-vue-dynamic-form#readme)
## Using npm or yarn



```bash
$ npm install antd-vue-dynamic-form -D
```

```bash
$ yarn add antd-vue-dynamic-form -D
```
## Usage
In components 
```
<AntdDesignForm />
...
import { AntdDesignForm } from 'antd-vue-dynamic-form' 
```
<br>or globally<br>
```
import AntdDesignForm  from 'antd-vue-dynamic-form' 
import 'antd-vue-dynamic-form/dist/style.css'


app.use(AntdDesignForm).mount('#app')
```
## To test source code
 ```bash
$ yarn dev
```
## Build by yourself
```bash
$ yarn build
```
## announcements
 - If your ant-design-vue version < 4.x,you need to add `import 'ant-design-vue/dist/antd.css'`