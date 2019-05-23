import React, { Component } from 'react';
import {Col} from 'react-flexbox-grid';
import {Link} from 'vtex.render-runtime';
import styles from './styles.css';
import classnames from 'classnames';

export default class Hashtags extends Component {
    
    render(){
        const { subtitulo, 
                link
            } = this.props

        return(
            <Col sm={{size: 'auto'}} className={"pa2 flex justify-center"}>
                <Link to={link} className="no-underline">
                    <h2 className={classnames(styles.subtitulo)}>{subtitulo}</h2>                  
                </Link>
            </Col>
        );
    }
}