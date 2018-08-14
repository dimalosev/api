import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ContentList} from '../components/ContentList/ContentList';
import {Header} from '../components/Header/Header';
import {fetchPostsWithRedux} from '../middleware/midleware';
import {getSelectValue} from '../actions/selectAction';
import {choiceTypeApartment} from '../actions/selectAction';

class App extends Component {
    getInputValue = (val) => {
        this.props.fetchPostsWithRedux(val);
    };

    choiceTypeApartment = (e) => {
        this.props.choiceTypeApartment(e.target.value, this.props.valueWithApi)
    };

    getSelectValue = (e) => {
        this.props.getSelectValue(e.target.value, this.props.valueWithApi);
    };

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <Header getInputValue={this.getInputValue}/>
                <ContentList
                    flats={this.props.flats}
                    choiceTypeApartment={this.choiceTypeApartment}
                    getSelectValue={this.getSelectValue}
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        valueWithApi: state.fetchReducer.flats,
        flats: state.selectReducer.sortArray ? state.selectReducer.sortArray : state.fetchReducer.flats
    }),
    dispatch => ({
        choiceTypeApartment: (val, flats) => {
          dispatch(choiceTypeApartment(val, flats))
        },
        getSelectValue: (val, flats) => {
            dispatch(getSelectValue(val, flats))
        },
        fetchPostsWithRedux : (val) => {
            dispatch(fetchPostsWithRedux(val))
        }
    }))(App);



