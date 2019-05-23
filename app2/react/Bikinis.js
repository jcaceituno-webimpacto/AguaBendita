import React, { Component } from 'react';
import Bikini from './Bikini';
import {Grid, Col, Row} from 'react-flexbox-grid';
import styles from './styles.css';


export default class Bikinis extends Component {
  static defaultProps= {
    titulo: "Título del bloque",
    images: [],
  }

  static uiSchema = {
    images: {
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
          title: 'Título',
          type: 'string',
          default: 'Título del bloque'
        },
        images: {
          items: {
            properties: {
              image: {
                default: '',
                title: 'Imagen',
                type: 'string',
                widget: {
                  'ui:widget': 'image-uploader',
                }
              },
              boton:{
                title: 'Botón',
                type: 'string',
                default: 'Texto del botón'
              },
              subtitulo:{
                title: 'Subtítulo',
                type: 'string',
                default: 'Subtítulo de la imagen'
              },
              link:{
                title: 'Link',
                type: 'string',
                default: 'Enlace del bloque',
              }
            },
            title: 'Bikini',
            type: 'object',
          },
          minItems: 1,
          title: 'Bikinis',
          type: 'array',
        }
      },
      title: 'Bikinis',
      type: 'object',
    }
  }

  render(){
    const {images, titulo} = this.props;
    
    return (
      <Grid>
        <Row>
          <Col xs={5} className={styles.hrcol}><hr></hr></Col>
          <Col xs={2}><h1 className={styles.titulo}>{titulo}</h1></Col>
          <Col xs={5} className={styles.hrcol}><hr></hr></Col>

          {images.map((d, i) => 
            <Bikini img={d.image} boton={d.boton} subtitulo={d.subtitulo} link={d.link}/>
          )}
        </Row>
      </Grid>
    )
  }
}