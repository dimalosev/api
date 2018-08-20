import React from 'react';
import './SearchOfContent.css';

export const SearchOfContent = (props) => {
   return (
       <div className="search_container">
           <input placeholder="enter..." type="text" ref={(input) => this.testInput = input}/>
           <button onClick={ () => props.getInputValue(this.testInput.value)}>Search</button>
       </div>
   )
};