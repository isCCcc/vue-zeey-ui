// index.ts
import type { App } from 'vue'
import ZButton from "./Button.vue"

// 使用install方法，在app.use挂载
ZButton.install = (app: App) => {
    app.component(ZButton.__name as string, ZButton) //注册组件
}

export default ZButton
