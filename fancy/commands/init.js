const { prompt } = require('inquirer');
const chalk = require('chalk');
const download = require('download-git-repo');
const ora = require('ora');

const question = [
  {
    type: 'input',
    name: 'gitPlace',
    message: 'Project gitPlace:',
    validate(val) {
      if (val !== '') {
        return true;
      }
      return 'Project name is required!';
    }
  },
  {
    type: 'input',
    name: 'gitBranch',
    message: 'Project gitBranch:',
    default: 'master'
  },
  {
    type: 'input',
    name: 'project',
    message: 'Project name:',
    validate(val) {
      if (val !== '') {
        return true;
      }
      return 'Project name is required!';
    }
  },
  {
    type: 'input',
    name: 'place',
    message: 'Where to init the project:',
    default: './'
  }
];

module.exports = prompt(question).then(({ gitPlace, gitBranch, project, place }) => {
  // gitPlace = 'fancymo/fan-react';
  // gitBranch = 'master';
  const spinner = ora('Downloading template...');

  spinner.start();

  download(`${gitPlace}#${gitBranch}`, `${place}/${project}`, (err) => {
    if (err) {
      console.log(chalk.red(err));
      process.exit();
    }
    spinner.stop();
    console.log(chalk.green('New project has been initialized successfully!'));
  })
})
