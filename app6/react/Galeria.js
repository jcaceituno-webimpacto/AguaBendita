import React, { Component } from 'react';
import { Grid} from 'react-flexbox-grid';
import styles from "./styles.css";
import Slider from "react-slick";
import classnames from 'classnames';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "inline-block", position: "absolute", cursor:"pointer" , right:"0"}}
        onClick={onClick}
      > <img style={{ ...style}} width="1rem" src="https://images.vexels.com/media/users/3/136478/isolated/preview/c2b55f6d425a0a35ccec3aa2a4c6ba47-siguiente-flecha-by-vexels.png" width="50px"></img> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}
        style={{ ...style, display: "block",zIndex:1, position: "absolute", cursor:"pointer", left:"0"}}
      > <img style={{ ...style,transform: "rotate(180deg)",zIndex:100}} src="https://images.vexels.com/media/users/3/136478/isolated/preview/c2b55f6d425a0a35ccec3aa2a4c6ba47-siguiente-flecha-by-vexels.png" width="50px"></img> </div>
    );
  }


export default class Galeria extends Component {
    static defaultProps = {
        imagen: "Titulo",
        images: [],
        numerodefotos: "",
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
                    default: '',
                    widget: {
                        'ui:widget': 'image-uploader',
                    },
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
                            link: {
                                title: 'Link Vestido',
                                type: 'string',
                                default: '',
                            },
                        },
                        title: 'Foto',
                        type: 'object',
                    },
                    minItems: 1,
                    title: 'Looks We Love',
                    type: 'array',
                },
                numerodefotos: {
                    title: 'Número de fotos',
                    type: 'number',
                    default: 3

                },
            },
            title: 'Looks We Love',
            type: 'object',
        }
    }



    render() {

        const  numerodefotos  = this.props.numerodefotos;
         console.log( numerodefotos );
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: numerodefotos,
            slidesToScroll: numerodefotos,
            initialSlide: 0,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
            
        };

        const { images, titulo } = this.props;

        return (

            <Grid>
                <div className="container">
                    <div className={styles.logoWelove}>
                        <img src={titulo} ></img>
                    </div>
                    <Slider {...settings} className={styles.fueraScroll} >

                        {images.map((d, i) =>
                        <div className={classnames(styles.containerShop,'dib')}>                                
                                <img src={d.image} className={styles.imagenslider } ></img>
                                <h3 className={styles.centered}> shop the look </h3>
                            </div>
                        )}
                    </Slider>
                </div>
            </Grid>
        )
    }
} 