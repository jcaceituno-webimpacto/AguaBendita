import React, { Component } from 'react';
import {Grid, Row} from 'react-flexbox-grid';
import Banner from './Banner';

export default class App8 extends Component {
    static defaultProps= {       
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
            title: 'App8',
            type: 'object',
            properties: {
                images: {
                    minItems: 1,
                    title: 'App8',
                    type: 'array',
                    items: {
                        title: 'Item',
                        type: 'object',
                        properties: {
                            image: {
                                default: '',
                                title: 'Imagen',
                                type: 'string',
                                widget: {
                                    'ui:widget': 'image-uploader',
                                },
                            },
                            titulo: {
                                title: 'Título',
                                type: 'string',
                                default: 'Título del bloque'
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
                            }
                        },    
                    },                 
                },
            },
        }
    }
    
    render(){
        const {images} = this.props;

        return(
            <Grid className="mt7">
                <Row>
                    {images.map((d, i) =>
                        <Banner img={d.image} titulo={d.titulo} texto1={d.texto1} texto2={d.texto2} /> 
                    )} 
                </Row>
            </Grid>           
        );
    }
}