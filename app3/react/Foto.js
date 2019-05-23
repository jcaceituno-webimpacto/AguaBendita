import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from "./styles.css";
import classnames from "classnames";


window.ga =
    window.ga ||
    function () {
        ; (ga.q = ga.q || []).push(arguments)
    }
// Load analytics script
const script = document.createElement('script')
script.src = `https://www.google-analytics.com/analytics.js`
document.head.appendChild(script);



export default class Foto extends Component {

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('click', function () {
            ga('create', 'UA-140464273-1', 'auto');
            ga('send', 'event', 'Click', 'click', 'Click en la imagen');
        });
    }

    render() {
        const { img, boton, subtitulo, link } = this.props;


        return (
            <Col sm={{ size: 'auto' }}>
                <img src={img} ></img>
                <div className="w-100 flex justify-center"><button className={styles.subirBoton}>{boton}</button></div>
            </Col>
        );
    }
}