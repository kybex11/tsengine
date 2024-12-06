const readline = require('readline');

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

    answers.projectName = await askQuestion('What is your project name?📄 ');
    answers.description = await askQuestion('Project description (optional): 📖');
    answers.type = await askQuestion('Project type (web 💻, desktop 🖥️): ');


    rl.close();
    return answers;
    
  } catch (error) {process.exit()}
}

function initApp(name, description, type) {
    
}

function main() {
    const answers = askQuestions();
    console.log('Creating project...');

    const name = answers.projectName;
    const description = answers.description;
    const type = answers.type;

    if (description) {
        initApp(name, description, type);
    } else {
        initApp(name, '', type);
    }
}