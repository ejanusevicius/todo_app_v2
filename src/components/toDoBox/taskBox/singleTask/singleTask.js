import React from 'react';

import classes from './singleTask.module.css';

import { connect } from 'react-redux';

import * as actions from '../../../../store/actions/actions';



const singleTask = (props) => {


    let conditionalClass = null;

    if(!props.finishedStatus) {
        conditionalClass = `${classes.SingleTask}`;
    }

    if(props.finishedStatus) {
        conditionalClass = `${classes.SingleTask} ${classes.completed}`
    }



    return (
        <p className={conditionalClass}><span className={classes.UpdateButton} onClick={props.changeStatus}>(Update)</span>   {props.description}   <span className={classes.UpdateButton} onClick={props.deleteTask}>(Delete)</span></p>
    );

};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeStatus: () => dispatch({type: actions.CHANGE_STATUS, payload: {id: ownProps.id}}),
        deleteTask: () => dispatch({type: actions.REMOVE_TASK, payload: {id: ownProps.id }})
    }
}


export default connect(null, mapDispatchToProps)(singleTask);