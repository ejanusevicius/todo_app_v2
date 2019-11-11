import React from 'react';
import classes from './toDoBox.module.css';

import InputBox from './inputBox/inputBox';
import TaskBox from './taskBox/taskBox';

const toDoBox = () => {
    return (
        <div className={classes.ToDoBox}>
            <InputBox />
            <TaskBox />
        </div>
    );

};

export default toDoBox;