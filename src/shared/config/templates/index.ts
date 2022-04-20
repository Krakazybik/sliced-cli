import { resolve } from 'path';
import { toCamelCase } from '../../lib/helpers';

export type FSDCliTemplateItem = {
  path: string;
  rules: {
    [key: string]: (string) => string;
  };
};

export const FSDCliTemplates = {
  react: {
    path: resolve(__dirname, './react.tmpl'),
    rules: { name: (name: string) => toCamelCase(name) },
  },
  effectorModel: {
    path: resolve(__dirname, './effector-model.tmpl'),
    rules: { name: (name: string) => name.toLowerCase() },
  },
} as const;
