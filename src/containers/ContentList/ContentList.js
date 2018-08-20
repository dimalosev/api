import React from 'react';
import {connect} from 'react-redux';
import {ContentItem} from '../../components/ContentItem/ContentItem';
import Header from '../Header/Header';
import "./ContentList.css";
import PropTypes from 'prop-types';
import {SectionSort} from '../../components/SectionSort/SectionSort';
import {fetchPostsWithRedux} from "../../middleware/midleware";
import {choiceTypeApartment, getSelectValue} from "../../actions/selectAction";

class ContentList extends React.Component {
    choiceTypeApartment = (e) => {
        this.props.choiceTypeApartment(e.target.value, this.props.valueWithApi)
    };

    getSelectValue = (e) => {
        this.props.getSelectValue(e.target.value, this.props.valueWithApi);
    };

    getInputValue = (val) => {
        this.props.fetchPostsWithRedux(val);
    };

    render() {
        return (
            <div className='container'>
                <Header getInputValue={this.getInputValue}/>
                <div className="main">
                    <SectionSort getSelectValue={this.getSelectValue} choiceTypeApartment={this.choiceTypeApartment}/>
                    <ul className="list_container">
                        {
                            this.props.flats && this.props.flats.map(flats =>
                                <li key={flats.id}  className="list_item"><ContentItem flats={flats}/></li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

ContentList.PropTypes = {
    flats: PropTypes.array.isRequired,
    valueWithApi: PropTypes.string.isRequired
};

export default connect(
    state => ({
        valueWithApi: state.fetchReducer.flats,
        flats: state.selectReducer.sortArray ? state.selectReducer.sortArray : state.fetchReducer.flats,
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
    }))(ContentList);