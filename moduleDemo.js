const yargs = require("yargs")
const notes = require("./utils/notes")

yargs.command({
    command: "add",
    description: "To add new note",
    builder: {
        title: {
            type: String,
            demandOption: true,
            description: "New Title to add"
        },
        body: {
            type: String,
            demandOption: true,
            description: "New Body to add"
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})


yargs.command({
    command: "read",
    description: "To read note by Title",
    builder: {
        title: {
            type: String,
            demandOption: true,
            description: "New Title to add"
        }
    },
    handler: (argv) => {        
        notes.readNote(argv.title)
    }
})


yargs.command({
    command: "delete",
    description: "To remove note by Title",
    builder: {
        title: {
            type: String,
            demandOption: true,
            description: "New Title to add"
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})


yargs.command({
    command: "list",
    description: "To read all note",
    handler: (argv) => {
        notes.listNote()
    }
})

yargs.parse();


