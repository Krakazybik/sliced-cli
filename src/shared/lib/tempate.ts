import { readFile } from 'node:fs/promises';
import Mustache from 'mustache';

const getTemplate = (templatePath: string) => {
  return readFile(templatePath, 'utf8');
};

export const getFilledTemplate = async (path: string, config: Record<string, string>) => {
  const template = await getTemplate(path);
  return Mustache.render(template, config);
};
