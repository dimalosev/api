import React from 'react';
import './ContentItem.css';

export const ContentItem = (props) => {
    return (
        <React.Fragment>
            <img src={props.flats.img_url} alt="img"/>
            <div className="content">
                <a href={props.flats.lister_url}>
                    <p>{props.flats.title}</p>
                </a>
                <span>Price: {props.flats.price_formatted}</span>
                <p>{props.flats.summary}</p>
            </div>
        </React.Fragment>
    )
};
