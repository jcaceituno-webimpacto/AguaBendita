import React, { Component } from 'react';
import {Col} from 'react-flexbox-grid';
import {Link} from 'vtex.render-runtime';
import styles from './styles.css';
import classnames from 'classnames';

export default class Banner extends Component {
    
    render(){
        const { img,
                subtitulo, 
                link,
            } = this.props

        return(
            <Col sm={{size: 'auto'}} className={classnames(styles.imgs,"flex justify-center")}>
                <Link to={link} className="no-underline tc">                  
                    <img src={img}></img>
                    <h4 className={classnames(styles.subtitulo, "tc")}>{subtitulo}</h4>                 
                </Link>
            </Col>
        );
    }
}