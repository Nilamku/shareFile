const fs = require("fs");

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes))
}

const loadNotes = () => {
    try {
        let notesBuffer = fs.readFileSync("notes.json");
        let notesString = notesBuffer.toString();
        return JSON.parse(notesString)
    } catch (e) {
        return [];
    }
}

const addNote = (title, body) => {
    const allNotes = loadNotes();
    const duplicateNotes = allNotes.filter(note => note.title === title);
    if(duplicateNotes.length === 0){
        allNotes.push({title, body})
        saveNotes(allNotes)
    }else{
        console.log("Duplicate ....");        
    }
}

const readNote = (title) => {
    const allNotes = loadNotes();
    allNotes.forEach(element => {
        if(element.title === title){
            console.log("Title = ", element.title);
            console.log("Body = ", element.body);   
            return;               
        }
    });
}

const removeNote = (title) => {
    const allNotes = loadNotes();
    let ele = -1;
    allNotes.forEach(element => {
        ele += 1;
        if(element.title === title){
            allNotes.splice(ele, 1);
            saveNotes(allNotes)
            console.log("Notes of title " + title + " removed");
            
            return;               
        }
    });
    if(ele == allNotes.length){
        console.log("No notes");
        
    }
}

const listNote = () => {
    const allNotes = loadNotes();    
    allNotes.forEach(element => {
        console.log(element.title + " " + element.body);        
    });
}




module.exports = {
    addNote, removeNote, readNote, listNote
}