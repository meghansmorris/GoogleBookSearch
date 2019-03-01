import React from 'react';
import "./style.css";

export function Input(props) {
    return (
      <div className="form-group">
        <input 
          className="form-control"
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          placeholder="Enter a title or keyword"
         />
      </div>
    );
}
  
  export function FormBtn(props) {
    return (
      <button onClick={props.handleFormSubmit} type="submit" style={{ float: "right", marginBottom: 10 }} className="btn btn-secondary">
        {props.children}
      </button>
    );
  }