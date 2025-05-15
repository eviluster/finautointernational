declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// shims para carpetas internas sin .d.ts
declare module '@/core/helpers/*'
declare module '@/core/data/*'
declare module '@/stores/*'
declare module '@/assets/ts/*'