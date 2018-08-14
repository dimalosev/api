import {fetchPostsRequest, fetchPostsSuccess, fetchPostsError} from '../actions/fetchAction';

export function fetchPostsWithRedux(val) {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return fetchPosts(val).then(([response, json]) => {
            if(response.status === 200) {
                dispatch(fetchPostsSuccess(json.response.listings))
            } else
                dispatch(fetchPostsError())
        })
    }
}

function fetchPosts(val) {
    const URL = `https://cors-anywhere.herokuapp.com/https://api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&country=uk&place_name=${val}`;
    return fetch(URL, { method: 'GET'})
        .then( response => Promise.all([response, response.json()]));
}
