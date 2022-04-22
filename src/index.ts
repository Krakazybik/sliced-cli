import { Render } from 'shared/core/render';
import { createFileByTemplate } from 'shared/lib/file';
import { getFilledTemplate } from './shared/lib/tempate';

console.clear();

const bootstrap = async () => {
  try {
    const file = './dist/entities/hello/index.ts';
    await createFileByTemplate(file, await getFilledTemplate('effectorModel', { name: 'Form' }));
    Render.complete(`file: ${file} created.`);
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
