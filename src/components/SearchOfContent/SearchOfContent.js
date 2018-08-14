import React from 'react';
import './SearchOfContent.css';

export const SearchOfContent = ({getInputValue}) => {
   return (
       <div className="search_container">
           <input placeholder="enter..." type="text" ref={(input) => this.testInput = input}/>
           <button onClick={ () => getInputValue(this.testInput.value)}>Search</button>
       </div>
   )
};