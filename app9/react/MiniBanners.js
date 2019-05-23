import React, { Component } from 'react';
import MiniBanner from './MiniBanner';
import {Grid, Row} from 'react-flexbox-grid';


export default class MiniBanners extends Component {
  static defaultProps= {
    banners: [],
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
        banners: {
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
              text:{
                title: 'Texto',
                type: 'string',
                default: 'Texto por defecto'
              },
              hoverText:{
                title: 'Texto hover',
                type: 'string',
                default: 'Texto hover'
              },
              link:{
                title: 'Link',
                type: 'string',
                default: 'Enlace del mini banner',
              }
            },
            title: 'Mini Banner',
            type: 'object',
          },
          minItems: 1,
          title: 'Mini Banners',
          type: 'array',
        }
      },
      title: 'Mini Banners',
      type: 'object',
    }
  }
  

  render(){
    const {banners} = this.props;
    
    return (
      <Grid  className="mt8">
        <Row>
          {banners.map((b, i) => 
            <MiniBanner img={b.image} text={b.text} hoverText={b.hoverText} link={b.link}/>
          )}
        </Row>
      </Grid>
    )
  }
}