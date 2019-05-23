import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Banner from './Banner';
import styles from './styles.css';
import classnames from 'classnames';

export default class App5 extends Component {
    static defaultProps= {       
        titulo: "titulo",
        images: []
    }
    
    static uiSchema = {
        banners: {
          items: {
            images: {
              'ui:widget': 'image-uploader',
            },
          }
        }
    }

    static getSchema = (props) => {
        return {
            // description: 'admin/editor.carousel.description',
            title: 'App5',
            type: 'object',
            properties: {
                titulo: {
                    title: 'Título',
                    type: 'string',
                    default: 'Título del bloque'
                },
                images: {
                    minItems: 1,
                    title: 'App5',
                    type: 'array',
                    items: {
                        properties: {
                            image: {
                                default: '',
                                title: 'Imagen',
                                type: 'string',
                                widget: {
                                    'ui:widget': 'image-uploader',
                                },
                            },
                            texto1: {
                                title: 'Texto 1',
                                type: 'string',
                                default: 'Texto 1 de la imagen'
                            },
                            texto2: {
                                title: 'Texto 2',
                                type: 'string',
                                default: 'Texto2 de la imagen'
                            },
                            link: {
                                title: 'Link',
                                type: 'string',
                                default: 'Link del producto'
                            }
                        },
                        title: 'Item',
                        type: 'object',
                    },                 
                },
            },
        }
    }
    
    render(){
        const { images,
                titulo} = this.props;

        return(
            <Grid className="mt5">
                <Row>
                    <Col sm={5} className={styles.hr}><hr></hr></Col>
                    <Col sm={2} className={classnames(styles.titulo, "tc f4")}>{titulo}</Col>
                    <Col sm={5} className={styles.hr}><hr></hr></Col>

                    {images.map((d, i) =>
                        <Banner img={d.image} texto1={d.texto1} texto2={d.texto2} link={d.link} /> 
                    )} 
                </Row>
            </Grid>           
        );
    }
}