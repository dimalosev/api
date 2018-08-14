import React from 'react';
import {ContentItem} from '../ContentItem/ContentItem';
import "./ContentList.css";
import {SectionSort} from '../SectionSort/SectionSort';

export const ContentList = (props) => {
    return (
        <div className='main'>
            <SectionSort getSelectValue={props.getSelectValue} choiceTypeApartment={props.choiceTypeApartment}/>
            <ul className="list_container">
            {
                props.flats && props.flats.map(flats =>
                <li key={flats.id}  className="list_item"><ContentItem flats={flats}/></li>)
            }
            </ul>
        </div>
    )
};
