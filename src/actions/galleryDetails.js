import axios from 'axios';

import { GET_GALLERY_CONTENT } from './types';
import {SERVER_URL as URL}  from '../env/constants';


export const getGallery = (props) => { 
    const filterData = getFilterData(props);
    console.log(filterData);
    return (dispatch) => {
        axios.post(URL+ 'api/gallery', filterData)
            .then(response => {
                console.log(response);
                dispatch(gallery(response.data));
            })
            .catch(error => {
                throw (error);
            });
    }
};

const getFilterData = (props) => {
    return {
        section: props.sect,
        sort: props.sortParam,
        showViral: props.viral,
        window: props.wnd
    }
}

export const gallery = (data) => {
    return {
        type: GET_GALLERY_CONTENT,
        payload: {
            // _id: data._id,
            // title: data.title,
            body: data
        }

    }
}