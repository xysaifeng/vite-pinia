import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())

// const plugin = {
//   install(app) {
//     console.log(app, 22);
//   }
// }
// app.use(plugin)

app.mount('#app')


// 多个组件共享数据
// vuex 
// 优点：共享数据 （每个模块 又有自己的共享数据 =》需要模块拆分nameSpace,又要拆分很多命名空间，最后如果我们命名空间非常多 就很恶心了 =》 $store.state.a.b.c.d.xx）
// 优点有：可以封装公共的逻辑 mutaion（统一提交状态）和action（封装一些异步公共逻辑）区别？
// 缺点：模块化

// pinia 优点：体积小 基于ts 没有命名空间了=》创建多个store来进行统一管理  只有action没有mutaion