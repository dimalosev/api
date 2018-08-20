import React from 'react';
import "../Form.css";
import {connect} from 'react-redux';
import {authentication} from '../../../actions/registrationAction';
import { withRouter } from 'react-router-dom'

export class FormLogin extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const username = JSON.parse(localStorage.getItem("username"));
        if (username === this.value.value) {
            this.props.authentication(username === this.value.value)
            this.props.history.push('/')
        } else {
            alert('incorrect data');
        }
    };

    render() {
        return (
            <div className="container_form">
                <form onSubmit={this.handleSubmit}>
                    <h3>Login</h3>
                    <input
                        type="text"
                        placeholder="E-mail"
                        name='username'
                        ref={value => this.value = value}
                    />
                    <input type="password"
                           name='password'
                           placeholder="password"
                    />
                    <button>login</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        username: state.registrationReducer.username
    }),
    dispatch => ({
        authentication: (val) => {
            dispatch(authentication(val))
        }
    }))(FormLogin));
