import axios from 'axios';

import { GET_SINGLE_POST, CLEAR_POST } from './types';
import {CLIENT_ID as CID}  from '../env/constants';

export const getSingleImgPostDetails = (id) => {
    return (dispatch) => {
        /*axios.get(URL +'api/gallery/' + id)
            .then(response => { // Success
                if (response && response.data) {
                    dispatch(getImgPostDetails(response.data));
                }
            }, error => { // Failed
                throw (error);
            });
            */
            let url = 'https://api.imgur.com/3/gallery/album/' + id;
            console.log(url);
            axios({
                method: 'get',
                url: url,
                headers: { 'authorization': 'Client-ID ' + CID  }
            }).then(function (response) {
                if (response && response.data) {
                    dispatch(getImgPostDetails(response.data));
                }
            }).catch(function (error) {
                console.log(error);
            });

    }
};

export const clearImgPostState = () => {
    return (dispatch) => {
        dispatch(clearImgPostDetails())
    }
};

export const clearImgPostDetails = () => {
    return {
        type: CLEAR_POST,
        payload: {
            post: {}
        }
    }
}


export const getImgPostDetails = (data) => {
    return {
        type: GET_SINGLE_POST,
        payload: {
            body: data
        }

    }
}