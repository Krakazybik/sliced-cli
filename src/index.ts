import chalk from 'chalk';
import { clear } from 'console';
import inquirer, { ListQuestion } from 'inquirer';
import meow from 'meow';

clear();

// Cli creation
const cli = meow({
  importMeta: import.meta,
  flags: {
    auto: {
      type: 'string',
      alias: 'au',
    },
    features: {
      type: 'string',
      alias: 'fe',
    },
    entites: {
      type: 'string',
      alias: 'en',
    },
    shared: {
      type: 'string',
      alias: 'sh',
    },
    widgets: {
      type: 'string',
      alias: 'wi',
    },
  },
});

const allowedTemplates = ['react', 'dotenv'];
const template = 'dotenv' in cli?.pkg?.dependencies;

const autoPatterns = {
  entites: ['form'],
  pages: ['page'],
};

// Questions tree
interface IQuestionTree {
  question: string;
  choices: Array<IQuestionTree>;
  endCallback: () => void | undefined;
}

const selectLayer: ListQuestion<any> = {
  type: 'list',
  choices: [
    chalk.bgMagenta.black(' auto '),
    chalk.bgGreen.black(' entites '),
    chalk.bgBlue.black(' features '),
    chalk.bgGreen.black(' shared '),
    chalk.bgCyan.black(' pages '),
    chalk.bgBlueBright.black(' widgets '),
  ],
  name: 'layers',
  message: `${chalk.bgGreen.black(
    ' Feature-sliced CLI '
  )}  Detected template: ${template}\nPlease select layer:`,
};

// Interactive creation
inquirer.prompt([selectLayer]).then((answers) => {
  console.log(answers);
});
