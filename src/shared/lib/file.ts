import fs from 'fs/promises';
import fse from 'fs-extra';
import { reactTemplate } from '../config/templates/react';

export const fileIsExist = async (file) => {
  try {
    await fs.access(file);
  } catch (err) {
    return false;
  }
  throw new Error('File exist');
};

export const createFile = async (filePath, data = undefined) => {
  try {
    // FIXME: wx
    await fse.outputFile(filePath, data ?? '', { flag: 'w' });
  } catch (err) {
    throw err;
  }
};

export const createFileByTemplate = async (filePath, template) => {
  await createFile(filePath, reactTemplate('hello-hello'));
};
