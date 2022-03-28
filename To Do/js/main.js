const STATUS = {
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TO_DO: "To Do",
}
const DEFAULT_STATUS = STATUS.TO_DO;
const list = {
    "Create a new practice task": STATUS.IN_PROGRESS,
    "Make a bed": STATUS.DONE,
    "Write a post": STATUS.TO_DO,
}
function changeStatus( task, status ) {
    if (task in list) {
        list[task] = status;
    } else {
        console.log( "No task" )
    }
};

function addTask( task ) {
    list[task] = DEFAULT_STATUS;
};

function deleteTask( task ) {
    delete list[task];
};

function showList() {
    let toDo = "";
    let done = "";
    let inProgress = "";
    for (let key in list) {
        switch (list[key]) {
            case STATUS.TO_DO:
                toDo += key + "\n"
                break;
            case STATUS.IN_PROGRESS:
                inProgress += key + "\n"
                break;
            case STATUS.DONE:
                done += key + "\n"
                break;
            default:
                break;
        }
    }
    if ( toDo === "") {
        toDo = "- \n "
    };
    if ( done === "") {
        done = "- \n "
    };
    if ( inProgress === "") {
        inProgress = "- \n"
    };
    console.log( " To do:\n", toDo, "Done:\n", done, "In Progress:\n", inProgress )
};
changeStatus("Make a bed", "In Progress");
addTask( "Do the cleaning" );
changeStatus("Do the cleaning", "Done");
addTask( "task" );
deleteTask("task")
showList();