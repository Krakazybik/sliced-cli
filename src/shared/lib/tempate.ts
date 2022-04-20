import { readFile } from 'node:fs/promises';
import Mustache from 'mustache';
import { FSDCliTemplateItem } from '../config/templates';

const getTemplate = (templatePath: string) => {
  return readFile(templatePath, 'utf8');
};

const getConfigWithRules = (
  config: Record<string, string>,
  rules: Record<string, (string) => string>
) => {
  return Object.keys(config).reduce((result, field) => {
    if (rules[field]) {
      return { ...result, [field]: rules[field](config[field]) };
    }
    return result;
  }, {});
};

export const getFilledTemplate = async (
  templateConfig: FSDCliTemplateItem,
  config: Record<string, string>
) => {
  const template = await getTemplate(templateConfig.path);
  return Mustache.render(template, getConfigWithRules(config, templateConfig.rules));
};
