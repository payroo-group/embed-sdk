import type { Components, ComponentSchemaMap, Options } from '@payroo-group/embed-sdk'

export type ComponentProps<K extends Components> = {
  options?: Options;
  params?: ComponentSchemaMap[K];
  getEmbedUrl: (component: K, params?: ComponentSchemaMap[K]) => Promise<string>;
} & ComponentSchemaMap[K];
