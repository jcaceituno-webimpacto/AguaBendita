import React, { Component } from 'react'
import {Col} from 'react-flexbox-grid';
import styles from './styles.css';
import classnames from 'classnames';
import { Link } from 'vtex.render-runtime';


export default class MiniBanner extends Component{
    render(){
        const {img}=this.props;
        const {text}=this.props;
        const {hoverText}=this.props;
        const {link}=this.props;


        let estiloCol={
            backgroundImage: 'url('+img+')'
        }


        return(
            <Col sm={{ size: 'auto'}} className={styles.colMiniBanner}>
                <Link to={link} className={styles.link}>
                    <div className={styles.divImagen} style={estiloCol}></div>
                    <div className={styles.divMiniBanner}>
                        <h2 className={styles.text}>{text}</h2>
                        <h2 className={classnames(styles.hoverText,"dn")}>{hoverText}</h2>
                    </div> 
                </Link>
            </Col>
        );
    }
}