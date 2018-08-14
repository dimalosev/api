import React from 'react';
import './SectionSort.css';

export const SectionSort = (props) => {
    return (
        <div className="section_sort">
            <h3>Kind of apartaments:</h3>
            <div onClick={props.choiceTypeApartment} className="block_choice">
                <button value="house">House</button>
                <button value="flat">Flat</button>
            </div>
            <h3>Quantity room:</h3>
            <div className="select_choice">
                <select onChange={props.getSelectValue} name="number room" id="">
                    <option value="all">all</option>
                    <option value="1">one-room flat</option>
                    <option value="2">double-room flat</option>
                    <option value="3">three-room flat</option>
                    <option value="4">four-room flat</option>
                </select>
            </div>
        </div>
    )
};