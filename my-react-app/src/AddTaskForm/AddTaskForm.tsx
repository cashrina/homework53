import React from 'react'

const AddTaskForm = () => {

    const onFormSubmit = (event:React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <form className="add-task-form" onSubmit={onFormSubmit}>
            <h6>Create Tasks</h6>
            <label>Add:
                <input placeholder="Add a task" type="text" />
            </label>
            <button type="submit" >Add</button>
        </form>
    );
};

export default AddTaskForm;