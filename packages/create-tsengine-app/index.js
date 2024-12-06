const readline = require('readline');
const fs = require('fs');
const fsExtra = require('fs-extra');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function askQuestions() {
  const answers = {};
  
  try {
    const askQuestion = (question) => {
      return new Promise((resolve) => {
        rl.question(question, resolve);
      });
    };

    answers.projectName = await askQuestion('What is your project name?: ');
    answers.type = await askQuestion('Project type (web, desktop ): ');


    rl.close();
    return answers;
    
  } catch (error) {process.exit()}
}

async function initApp(name, type) {
    console.log('WARNING! If your using desktop platform. Install cargo using rustup');
    const currentDirectory = process.cwd();
    const newPath = `${currentDirectory}/${name}`;
    let cpPath;

    if (type == 'desktop') {
      cpPath = './platform/desktop';
    } else {
      cpPath = './platform/web';
    }

    try {
      fs.mkdirSync(newPath);
      await fsExtra.copy(cpPath, newPath);
    } catch(err) {process.exit()};
    
}

async function main() {
    const answers = await askQuestions();

    const name = answers.projectName;
    const type = answers.type;

    initApp(name, type);
}

main();