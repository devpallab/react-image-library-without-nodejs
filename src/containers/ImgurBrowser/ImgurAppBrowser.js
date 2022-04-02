import React, { Component } from 'react'
import { Route, Routes, Navigate} from 'react-router-dom';

import {withRouter} from '../../components/customWithRouteComp/withRouter';
import ImgGallery from './ImgGallery/ImgGallery';
import FullImgPostDetails from './FullImgPostDetails/FullImgPostDetails';
import PageNotFound404 from "../../components/PageNotFound/PageNotFound404";


import { getGallery } from '../../actions/galleryDetails';
import { getSingleImgPostDetails, clearImgPostState } from '../../actions/postDetails';
import { handleSection } from '../../actions/section';
import { handleWindow } from '../../actions/window';
import { handleSort } from '../../actions/sort';
//import { handleViralImageVisiblity } from '../../actions/viralImages';

import { connect } from 'react-redux';

import withImgGalInterceptor from '../../hoc/withImgGalInterceptor';


import axios from 'axios';


class ImgurAppBrowser extends Component {

    render() {
        return (
            <>
      <Routes>
      <Route path="/gallery" exact element={<ImgGallery {...this.props} />} />
      <Route path={"/gallery/:id"} exact element={<FullImgPostDetails {...this.props} />} />
      <Route path={"/404"} exact element={<PageNotFound404 />} />
      <Route path="" exact element={<Navigate replace to="/gallery" />} />          
      <Route element={<PageNotFound404 />} />
      </Routes>
            </>
        )
    }


}

const mapStateToProps = state => {
    return {
        gal: state.gallery,
        sect: state.section,
        sortParam: state.sort,
        wnd: state.window,
        viral: state.showViral,
        album: state.post
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onload: (props) => dispatch(getGallery(props)),
        handleSection: (section) => dispatch(handleSection(section)),
        handleWindow: (section) => dispatch(handleWindow(section)),
        handleSort: (sort) => dispatch(handleSort(sort)),
        //handleViralImageVisiblity: (visiblity) => dispatch(handleViralImageVisiblity(visiblity)),
        getPost: (id) => dispatch(getSingleImgPostDetails(id)),
        clearPost: () => dispatch(clearImgPostState())
    };
};

//export default ImgurBrowser;
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withImgGalInterceptor(ImgurAppBrowser, axios)));
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ImgurBrowser));
//export default connect(mapStateToProps, mapDispatchToProps)(withInterceptor(ImgurBrowser, axios));