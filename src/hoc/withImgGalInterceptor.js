import React, { Component } from 'react';

import ImgGalSpinner from '../components/UI/ImgGalSpinner/ImgGalSpinner';
import ImgGalModal from '../components/UI/ImgGalModal/ImgGalModal';

const withImgGalInterceptor = (WrappedComponent, axios) => {
    console.log(WrappedComponent);
    return class extends Component {
        state = {
            error: null,
            spinner: false
        }

        UNSAFE_componentWillMount() {
            let self = this;
            this.reqImgGalInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null, spinner: true });
                return req;
            });
            // this.resInterceptor = axios.interceptors.response.use(res => {
            //     this.setState({ error: null, spinner: false });
            //     return res;
            // }, error => {
            //     if (error.response.status === 404) {
            //         this.props.history.push('/gallery');
            //         console.log("pushed");
            //     }
            //     console.log(this.props.history);
            //     this.setState({ error: error.response, spinner: false });
            //     // return error;
            // });

            this.resImgGalInterceptor = axios.interceptors.response.use(response => {
                this.setState({ error: null, spinner: false });
                return response;
            }, error => {
                if (error.response.status === 404) {
                    //this.props.history.push('/404');
                    // console.log("pushed");
                    this.props.navigate('/404');
                }
                //console.log(self.props.history);
                self.setState({ error: error, spinner: false });
                return error;
                //return Promise.reject(error);
            });
        }


        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqImgGalInterceptor);
            axios.interceptors.response.eject(this.resImgGalInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <>
                    <ImgGalSpinner show={this.state.spinner}></ImgGalSpinner>
                    <ImgGalModal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </ImgGalModal>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    }
}

export default withImgGalInterceptor;