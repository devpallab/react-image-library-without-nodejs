import axios from 'axios';

import { GET_GALLERY_CONTENT } from './types';
import {CLIENT_ID as CID}  from '../env/constants';


export const getGallery = (props) => { 
    const filterData = getFilterData(props);
    console.log(filterData);
    return (dispatch) => {
        /*axios.post(URL+ 'api/gallery', filterData)
            .then(response => {
                console.log(response);
                dispatch(gallery(response.data));
            })
            .catch(error => {
                throw (error);
            });
            */
            let url = `https://api.imgur.com/3/gallery/${filterData.section}/${filterData.sort}/${filterData.window}/0?showViral=${filterData.showViral}`;
            
            console.log(url);
       
            axios({
                method: 'get',
                url: url,
                headers: { 'Authorization': 'Client-ID ' + CID}
            }).then(function (response) { 
                console.log(response.data);
                //res.status(200).send(response.data);
                //let item = JSON.parse(response.data.data)   
                dispatch(gallery(response.data));
            }).catch(function (error) {
                console.log(error);
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