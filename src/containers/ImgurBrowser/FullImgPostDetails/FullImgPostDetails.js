import React, { Component } from 'react';
import Header from '../../../components/Header/header';
//import {withRouter} from '../../../components/withRouter';
import styles from './fullImgPostDetails.module.css';
//import { withRouter } from 'react-router';
import {useParams} from 'react-router-dom';

class FullPost extends Component {

    componentDidMount() {
         //console.log(this.props);
        //this.props.getPost(this.props.match.params.id);
        //let { imgid } = useParams(); 

        //this.props.getPost(imgid);
        this.props.getPost(this.props.params.id);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.album.id !== this.props.album.id) {
           // this.props.getPost(this.props.match.params.id);
           this.props.getPost(this.props.params.id);
        }

    }
    componentWillUnmount() {
        this.props.clearPost();
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Something went wrong!</p>,
            header = (
                <Header nav="false"></Header>
            );


        if (this.props.album.images !== undefined && this.props.album.images[0].mp4 === undefined) {
            post = (
                <>

                    <div className={styles['postwrapper']}>
                        <div className={styles['postTitle']}>
                            <h2>
                                {this.props.album.title}
                            </h2>
                        </div>
                        <div className={styles['postBody']}>
                            <div className={styles['postBodyImage']}>
                                <img src={this.props.album.images[0].link} alt="" />
                            </div>
                            <div className={styles['postDecription']}>
                                {this.props.album.description}
                            </div>
                        </div>
                        <div className={styles['postFooter']}>
                            <i className="material-icons">
                                arrow_upward
                            </i> <span>{this.props.album.ups}</span>
                            <i className="material-icons">
                                arrow_downward
                            </i><span>{this.props.album.downs}</span>
                            <i className="material-icons">
                                score
                            </i><span>{this.props.album.score}</span>
                        </div>

                    </div>
                </>
            );
        }




        return (
            <>
                {header}
                {post}
            </>
        );

    }


};

//export default withRouter(FullPost);

export default (props) => (
    <FullPost
        {...props}
        params={useParams()}
    />
);