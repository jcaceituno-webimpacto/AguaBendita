import React, {Component} from 'react';
import {Col} from 'react-flexbox-grid';
import {Link} from 'vtex.render-runtime';
import styles from "./styles.css";


export default class Foto extends Component {

    render() {
        const { img, imgdos, boton, subtitulo, link } = this.props;


        return (
            <Col sm={{ size: 'auto' }}>
                <Link to={link} className="no-underline ">
                    <div className={styles.contendorRelative}>
                        <div className={styles.contenedorImgs} >
                            <img className={styles.primeraimg} src={img}></img>
                            <img className={styles.segundaimg} src={imgdos}></img>
                        </div>
                        <h2 className={styles.colorTexto}> {subtitulo}</h2>
                    </div>
                </Link>
            </Col>
        );
    }
}


