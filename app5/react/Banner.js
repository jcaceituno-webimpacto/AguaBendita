import React, { Component } from 'react';
import {Col} from 'react-flexbox-grid';
import {Link} from 'vtex.render-runtime';
import styles from './styles.css';
import classnames from 'classnames';

export default class Banner extends Component {
    
    render(){
        const { img, 
                texto1, 
                texto2, 
                link,
            } = this.props

        return(
            <Col sm={{size: 'auto'}} className={"mt4 pa3 flex justify-center"}>
                <Link to={link} className={classnames(styles.opacityDiv, "no-underline")}>                  
                    <img src={img}></img>
                    <div className={classnames(styles.divHover)}>
                        <h4 className={classnames(styles.texto1, "ma1 fw8")}>{texto1}</h4>
                        <span className={classnames(styles.texto2)}>{texto2}</span>  
                    </div>               
                </Link>
            </Col>
        );
    }
}