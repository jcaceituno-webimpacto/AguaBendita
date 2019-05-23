import React, { Component } from 'react';
import Foto from './Foto.js';
import { Grid, Row } from 'react-flexbox-grid';

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
                                title: 'imagen',
                                type: 'string',
                                widget: {
                                    'ui:widget': 'image-uploader',
                                },
                            },
                            boton: {
                                title: 'Boton',
                                type: 'string',
                                default: 'Texto del boton',
                            },
                            subtitulo: {
                                title: 'Titulo Bikini',
                                type: 'string',
                                default: 'Titulo del bikini',
                            },
                            link: {
                                title: 'Link Bikini',
                                type: 'string',
                                default: 'Link del bikini',
                            },
                        },
                        title: 'Foto',
                        type: 'object',
                    },
                    minItems: 1,
                    title: 'Aplicacion 3',
                    type: 'array',
                },
            },
            title: 'Aplicacion 3',
            type: 'object',
        }
    }



    render() {
        const { images, titulo } = this.props;

        return (
            <Grid>
                <Row>
                    {images.map((d, i) =>
                        <Foto boton={d.boton} img={d.image} subtitulo={d.subtitulo} link={d.link} className="mt2"></Foto>
                    )}
                </Row>
            </Grid>
        )
    }
} 