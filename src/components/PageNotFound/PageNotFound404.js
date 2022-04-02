import React from 'react';
import styles from './fourofour.module.css'
//import Header from '../Header/header';
import { Link } from 'react-router-dom';

const PageNotFound404 = (props) => (

    <>
        <div className={styles.heading}>Page Not Found : 404</div>
        <div className={styles.description}>The requested Page does'nt exist</div>
        <div className={styles.link}>
            <Link className={styles.link} to="/gallery">Go back to Gallery</Link>
        </div>
    </>
);


export default PageNotFound404;