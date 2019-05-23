import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Hashtags from './Hashtags';
import styles from './styles.css';
import classnames from 'classnames';


export default class App14 extends Component {
    static defaultProps= {       
        titulo: "titulo",
        texto: [],
    }


    static getSchema = (props) => {
        return {
            title: 'Hashtags Home',
            type: 'object',
            properties: {
                titulo: {
                    title: 'Título',
                    type: 'string',
                    default: 'Título del bloque'
                },
                texto: {
                    minItems: 1,
                    title: 'Hashtags',
                    type: 'array',
                    items: {
                        title: 'Hashtag',
                        type: 'object',
                        properties: {                        
                            subtitulo: {
                                title: 'Hashtag',
                                type: 'string',
                                default: 'Título del hashtag'
                            },
                            link: {
                                title: 'Link',
                                type: 'string',
                                default: 'Link del hashtag'
                            }
                        },                    
                    },
                },
            },
        }
    }
    
    render(){
        const {
            texto,
            titulo
        } = this.props
        return(
            <Grid>
                <Row>
                    <Col sm={5} className={styles.hr}><hr></hr></Col>
                    <Col sm={2} className={classnames(styles.titulo, "tc f4")}>{titulo}</Col>
                    <Col sm={5} className={styles.hr}><hr></hr></Col>
                    {texto.map((d, i) => 
                        <Hashtags subtitulo={d.subtitulo} link={d.link} /> 
                    )}   
                </Row>
            </Grid>           
        );
    }
}