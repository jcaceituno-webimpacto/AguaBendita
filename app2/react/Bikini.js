import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {Col} from 'react-flexbox-grid';
import styles from './styles.css';
import classnames from 'classnames';
import { Link } from 'vtex.render-runtime';


window.ga =
    window.ga ||
    function() {
        ;(ga.q = ga.q || []).push(arguments)
    }
// Load analytics script
const script = document.createElement('script')
script.src = `https://www.google-analytics.com/analytics.js`
document.head.appendChild(script);



function listener(e){
    ga('create', 'UA-140390494-1', 'auto');

    ga('send', 'event', 'Click', 'click', 'Click en la imagen');
}



export default class Bikini extends Component{
    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('click', listener);
    }

    render(){
        const {img, boton, subtitulo, link}=this.props;

        return(
            <Col sm={{ size: 'auto'}}>
                <Link to={link} className={styles.link}>
                    <img src={img}></img>
                    <div className="w-100 flex justify-center"><button className={classnames(styles.boton,'ph8 pv5')}>{boton}</button></div>
                    <h2 className={styles.subt}>{subtitulo}</h2>
                </Link>
            </Col>
        );
    }
}