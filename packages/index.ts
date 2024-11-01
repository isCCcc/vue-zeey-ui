//index.ts
import type { App } from 'vue';
import ZButton from './Button/index';

// 组件列表
const components = [ZButton];

export { ZButton };

export default {
  // 定义 install 方法
  install(app: App) {
    components.forEach((component) =>
      app.component(component.__name as string, component),
    );
  },
};
