import React from "react";
import {SearchOfContent} from '../../components/SearchOfContent/SearchOfContent';
import './Header.css';
import {Link, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {logout} from '../../actions/registrationAction';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <Link to="/"><img src="https://resources.nestimg.com/nestoria/img/logo_v1.svg" alt="logo"/></Link>
                <SearchOfContent getInputValue={this.props.getInputValue}/>
                <div className="register_button">
                    {
                        (!this.props.authentication) ?
                            <Link to='/login' ><span>Login</span></Link> :
                            <Link to='/login'><span onClick={() => this.props.logout()}>Logout</span></Link>
                    }
                    <Link to="/registration"><span>Registration</span></Link>
                </div>
            </header>
        )
    }
}

export default withRouter(connect(
    store => ({
        authentication: store.registrationReducer.authentication
    }),
    dispatch => ({
        logout: () => {
            dispatch(logout())
        }
    }))(Header));
