import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  {/* Setting the three initial States*/}
  {/* todos: To represent an array of todo items.
  Initialized with an empty array [] */}
  const [todos, setTodos] = useState([]);
  {/* headingInput: To represent the value entered by user into
  an input field for adding a new heading for a todo item. */}
  const [headingInput, setHeadingInput] = useState('');
  {/* listInputs: Initialize listInputs as an empty object {}.
  This state will hold the value of input fields for each item individually. */}
  const [listInputs, setListInputs] = useState({});

  // const handleAddTodo = () => {...}: Declares a constant named
  // handleAddTodo and assigns it an arrow function.
  const handleAddTodo = () => {
    // line 22: Checks if the headingInput variable, a piece of text input
    // from the user, is empty after trimming any whitespace characters
    // from the beginning and end.
    if (headingInput.trim() !== '') {
      // Line 29: If the condition in the if statement is met,
      // this line updates the state variable todos.
      // It spreads the existing array (todos) into a new array
      // using the spread syntax (...todos) and appends a new object to it.
      // The new object contains a heading property set to the value
      // of headingInput and a lists property initialized as an empty array.
      setTodos([...todos, {heading: headingInput, lists: [] }]); 
      setHeadingInput(''); // After adding a new todo item, this line clears headingInput
      // state variable, resetting the text input field for the user.
    }
};
  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}} // Add onChange event handler to update headingInput state
          />
          <button className="add-list-button" onClick={handleAddTodo} >Add Heading</button>
        </div>
      </div>
      <div className="todo_main">
        
      </div>
    </>
  );
};

export default TodoList;
