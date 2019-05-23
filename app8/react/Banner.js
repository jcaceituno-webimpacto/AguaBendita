import React, { Component } from 'react';
import {Col, Row} from 'react-flexbox-grid';
import styles from './styles.css';
import classnames from 'classnames';

export default class Banner extends Component {
    
    render(){
        const { img, 
                titulo,
                texto1,
                texto2
            } = this.props

        return(
            <Col sm={{size: 'auto'}}>
                <Row>
                    <Col sm={12} md={2} className={classnames(styles.alignItems)}>
                        <h1 className={classnames(styles.titulo)}>{titulo}</h1>
                        <span className={classnames(styles.texto1, "db")}>{texto1}</span>  
                        <span className={classnames(styles.texto2)}>{texto2}</span>    
                    </Col>
                    <Col sm={12} md={10} className={styles.floatImg}>
                        <img src={img} className="w-100"></img>  
                    </Col>                
                </Row>
            </Col>
        );
    }
}