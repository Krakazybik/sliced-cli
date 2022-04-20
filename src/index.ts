import { Render } from 'shared/core/render';
import { createFileByTemplate } from 'shared/lib/file';

import { getFilledTemplate } from './shared/lib/tempate';
import { FSDCliTemplates } from './shared/config/templates';

const bootstrap = async () => {
  console.log(await getFilledTemplate(FSDCliTemplates.effectorModel, { name: 'Form' }));

  try {
    const file = './dist/entities/hello/index.ts';
    await createFileByTemplate(file, 'root-template');
    Render.complete(`file: ${file} created.`);
  } catch (error) {
    console.log(error);
  }
};

bootstrap();

console.clear();

Render.completeWithError('Somthing wrong');
