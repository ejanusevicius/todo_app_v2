import React, { useState } from 'react';

import classes from './inputBox.module.css';

import { connect } from 'react-redux';

import * as actions from '../../../store/actions/actions';


let inputValue = null;



const InputBox = (props) => {
    
    const [fieldInput, setFieldInput] = useState('');




    return (
        <div className={classes.InputBox}>
            <form onSubmit={(event) => props.addNewTask(event, fieldInput)}>
                <input
                type="text"
                onChange={event => setFieldInput(event.target.value)}></input>
            </form>
        </div>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewTask: (event, fieldInput) => {
            event.preventDefault();
            dispatch({type: actions.ADD_NEW_TASK, payload: {input: fieldInput}})
        }
    }
}

export default connect(null, mapDispatchToProps)(InputBox);
