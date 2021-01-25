const inquirer = require('inquirer');
const figlet = require('figlet');
const  { addNote, listNotes, removeNote } = require ('../utils/notes.js')
const chalk  = require('chalk')

const topLevelQuestions =[
    {type: "list",
    name: "options",
    message: "what would like to do",
    choices:["add","list","remove","exit"]}
]


const main = () => {
    app();
};

const addQuestion = [
    {type : 'input', name: 'add', message:'what would you like to add?'}
]
const removeQuestion = [
    {type : 'input', name: 'remove', message:'what would you like to remove?'}
]

const app = async () =>{
    const answers = await inquirer.prompt(topLevelQuestions);
    if (answers.options == "add"){
        const answer = await inquirer.prompt(addQuestion);
        addNote(answer.add);
        app();
    }else if (answers.options == "list") {
        console.log("listing a note...");
        listNotes();
        app();
    }else if (answers.options == "remove") {
        listNotes();
        const answer = await inquirer.prompt(removeQuestion)
        removeNote(answer.remove);
        app();
    }else if (answers.options == "exit" ) {
        console.log("exiting");
        app();
    }
};



main();