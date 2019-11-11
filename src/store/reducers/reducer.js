import * as actions from '../actions/actions';

const INITIAL_STATE = {
    tasks: []
};

/* 
task = {
    description: 'string',
    id: 'math.random()',
    finished: false
}
*/

const rootReducer = (state = INITIAL_STATE, action) => {
    if (action.type === actions.ADD_NEW_TASK) {
        //create a copy of the state:
        const newState = {...state};
        //create new task:
        const newTask = {
            description: action.payload.input,
            id: Math.floor(Math.random() * 10000),
            finished: false
        }
        console.log(newTask);

        //push new task to the list:
        newState.tasks.push(newTask);
        console.log(newState);

        return newState;
    }

    if (action.type === actions.CHANGE_STATUS) {
        //create a copy of the state:
        const newState = {...state};
        console.log(newState);

        //get ID
        const inputID = action.payload.id;

        console.log(newState.tasks);
        // find index
        const elementID = newState.tasks.findIndex( el => {
            return el.id === inputID;
        });

        console.log(newState.tasks[elementID]);

        newState.tasks[elementID].finished = !newState.tasks[elementID].finished;

        console.log(`element ID : ${elementID}`);
        console.log(action.payload)

        return newState;
    }

    if (action.type === actions.REMOVE_TASK) {
        const newState = {...state};

        const inputID = action.payload.id;

        const elementID = newState.tasks.findIndex( el => {
            return el.id === inputID;
        });

        newState.tasks.splice(elementID, 1);

        return newState;
    }
    return state;

};

export default rootReducer;