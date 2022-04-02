import React, { Component } from 'react';
import classes from './media.module.css'



class Media extends Component {
    render(props) {
        // console.log(this.props.item.images);

        let images = null;
        if (this.props.item.images !== undefined) {
            if (this.props.item.images[0].mp4 !== undefined) {
                images = null
            } else {

                images = (
                    <>
                        <img src={this.props.item.images[0].link} alt={this.props.item.title} />
                        <div className={classes.caption}>{this.props.item.title}</div>
                    </>
                )

            }

        }

        return (

            // <div className={classes['grid-layout']}>
            //     <div className={classes['grid-item']}>{this.props.item.title}</div>
            // </div>
            <>
                {images}
            </>
            // <img src={this.props.item.images[0].link} />

        )
    }
}

export default Media;