import React from "react";
import {SearchOfContent} from '../SearchOfContent/SearchOfContent';
import './Header.css';

export const Header = (props) => {
    return (
        <header className="header">
            <img src="https://resources.nestimg.com/nestoria/img/logo_v1.svg" alt="logo"/>
            <SearchOfContent getInputValue={props.getInputValue}/>
        </header>
    )
};