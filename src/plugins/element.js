import Vue from 'vue'

//因为安装 element 的时候，用了 按需加载，因此要在这里 引入需要加载的 模块
import { Button,Form,FormItem,Input } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)