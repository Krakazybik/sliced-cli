import { readFile } from 'node:fs/promises';
import Mustache from 'mustache';
import { FSDCliTemplates } from '../config/templates';

const genTemplates = async () => {
  const templates = new Map();
  await Promise.all(
    Object.keys(FSDCliTemplates).map(async (templateName) => {
      templates.set(templateName, await getTemplateFile(FSDCliTemplates[templateName].path));
    })
  );

  return (key: string) => templates.get(key);
};

const getTemplateFile = (templatePath: string) => {
  return readFile(templatePath, 'utf8');
};

const getTemplateByName = genTemplates();

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

export const getFilledTemplate = async (name: string, config: Record<string, string>) => {
  try {
    const template = (await getTemplateByName)(name);
    return Mustache.render(template, getConfigWithRules(config, FSDCliTemplates[name].rules));
  } catch (error) {
    throw error;
  }
};
