import React from 'react';

import { useEffect } from 'react';

import classes from './taskBox.module.css';

import SingleTask from './singleTask/singleTask';

import { connect } from 'react-redux';


const TaskBox = (props) => {


    useEffect( () => {
        console.log(props.tasks);
    }, [props.tasks]);

    let taskList = null;

    if (props.tasks) {
        taskList = props.tasks.tasks.map(el => {
            return <SingleTask
                    description={el.description}
                    key={el.id.toString()}
                    id={el.id}
                    finishedStatus={el.finished} 
                    />
        })
    }

    return (
        <div className={classes.TaskBox}>
            {taskList}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        tasks: state
    }
};

export default connect(mapStateToProps)(TaskBox);