import React, { Component } from 'react';
import Foto from './Foto.js';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from "./styles.css";

export default class Galeria extends Component {
    static defaultProps = {
        titulo: "Titulo",
        images: [],
    }


    static uiSchema = {
        banners: {
            items: {
                image: {
                    'ui:widget': 'image-uploader',
                },
            },
        },
    }


    static getSchema = (props) => {
        return {
            properties: {
                titulo: {
                    title: 'Titulo',
                    type: 'string',
                    default: 'Titulo del bloque'
                },
                images: {
                    items: {
                        properties: {
                            image: {
                                default: '',
                                title: 'Imagen delantera',
                                type: 'string',
                                widget: {
                                    'ui:widget': 'image-uploader',
                                },
                            },
                            imagedos: {
                                default: '',
                                title: 'Imagen trasera',
                                type: 'string',
                                widget: {
                                    'ui:widget': 'image-uploader',
                                },
                            },
                            subtitulo: {
                                title: 'Titulo Bikini',
                                type: 'string',
                                default: 'Titulo del bikini',
                            },                            
                        },
                        title: 'Foto',
                        type: 'object',
                    },
                    minItems: 1,
                    title: 'Aplicación 4',
                    type: 'array',
                },
            },
            title: 'Aplicación 4',
            type: 'object',
        }
    }



    render() {

        const { images, titulo } = this.props;

        return (
            <Grid>
                <Row>
                    <Col sm={4} className="pa3" ><hr></hr></Col>
                    <Col sm={4} className={styles.letra}>{titulo}</Col>
                    <Col sm={4} className="pa3" ><hr></hr></Col>                        
                    {images.map((d,i) =>
                        <Foto img={d.image} imgdos={d.imagedos} subtitulo={d.subtitulo}  className="mt2"></Foto>
                    )}
                </Row>
            </Grid>
        )
    }
} 