import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import styles from './styles.css';
import classnames from 'classnames';


export default class Banner11 extends Component {
  static defaultProps= {
    image:"",
    titulo:"",
    texto:"",
    subtitulo:"",
  }


  static uiSchema = {
    image: {
        'ui:widget': 'image-uploader',
    },

  }


  static getSchema = (props) => {
    return {
        properties: {
            image: {
                default: '',
                title: 'Imagen 1',
                type: 'string',
                widget: {
                    'ui:widget': 'image-uploader',
                }
            },
            titulo:{
                title: 'Título 1',
                type: 'string',
                default: 'Título por defecto'
            },
            texto:{
                title: 'Texto 1',
                type: 'string',
                default: 'Texto banner 11'
            },
            subtitulo:{
                title: 'Subtítulo 1',
                type: 'string',
                default: 'Subtítulo',
            },
            image2: {
              default: '',
              title: 'Imagen 2',
              type: 'string',
              widget: {
                  'ui:widget': 'image-uploader',
              }
            },
            image3: {
              default: '',
              title: 'Imagen 3',
              type: 'string',
              widget: {
                  'ui:widget': 'image-uploader',
              }
            },
        },
        title: 'Banner11',
        type: 'object',
    }
  }
  

  render(){
    const {image, titulo, texto, subtitulo, image2, image3} = this.props;
    
    return (
      <Grid className="mt9">
        <Row className={styles.rowBanner11}>
            <Col sm={4} className={classnames(styles.colIzquierda)}>
              <div>
                  <h1>{titulo}</h1>
                  <p>{texto}</p>
                  <h2>{subtitulo}</h2>
              </div>
            </Col>
            <Col sm={8} className={styles.colDerecha}>
              <img src={image} className={styles.imagen}></img>
            </Col>

            <Col sm={8} className={styles.nomarnopad}>
              <img src={image2} className={styles.imagen2}></img>
            </Col>
            <Col sm={4}>
              <img src={image3} className={styles.imagen2}></img>
            </Col>
        </Row>
      </Grid>
    )
  }
}