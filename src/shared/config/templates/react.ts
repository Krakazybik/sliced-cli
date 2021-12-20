import { toCamelCase } from '../../lib/helpers';

export const reactTemplate = (name) =>
  `import 'React' from 'react';\n` +
  `\n\n\n` +
  `const ${toCamelCase(name)} = () => {\n` +
  ` return <></>\n` +
  `}\n\n\n` +
  `export default ${toCamelCase(name)};\n`;

export const publicApiUITemplate = (name) =>
  `export {default as ${toCamelCase(name)}} from './ui';\r\n`;
