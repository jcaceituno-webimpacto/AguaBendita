import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from "./styles.css";
import Slider from "react-slick";
import classnames from 'classnames';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style}}
        onClick={onClick}
      >  </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
          className={className}
          style={{ ...style}}
          onClick={onClick}
        >  </div>
      );
  }


export default class Galeria extends Component {
    static defaultProps = {
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
                        },
                        title: 'Foto',
                        type: 'object',
                    },
                    minItems: 1,
                    title: 'Looks We Love',
                    type: 'array',
                },               
            },
            title: 'Aplicación 1',
            type: 'object',
        }
    }



    render() {
        const  numerodefotos  = this.props.numerodefotos;
        console.log( numerodefotos );
        var settings = {
            dots: true,
            infinite: true,
            fade:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            autoplay: true,
            speed: 400,
            autoplaySpeed: 8000,
            cssEase: "linear"          
        };

        const { images } = this.props;

        return (
            <Grid>
                <div className="container">                    
                    <Slider {...settings} className={styles.fueraScroll} >
                        {images.map((d, i) =>
                            <div className={classnames(styles.containerShop,'dib')}>                                
                                <img src={d.image} className={styles.imagenslider}></img>
                            </div>
                        )}
                    </Slider>
                </div>
            </Grid>
        )
    }
} 