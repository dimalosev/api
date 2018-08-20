import React from 'react';
import "../Form.css";
import {registration} from "../../../actions/registrationAction";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'

class FormRegistration extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("username", JSON.stringify(this.inputValue.value));
        this.props.registration(this.inputValue.value);
        this.props.history.push("/")
    };

    render() {
        return (
            <div className="container_form">
                <form onSubmit={this.handleSubmit}>
                    <h3>Registration:</h3>
                    <input
                        type="text"
                        placeholder="E-mail"
                        name='username'
                        ref={inputValue => this.inputValue = inputValue}
                    />
                    <input type="password"
                           name='password'
                           placeholder="password"
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(connect(
    store => ({
        username: store.registrationReducer.username
    }),
    dispatch => ({
        registration: (username) => {
            dispatch(registration(username))
        }
    }))(FormRegistration));

