import React, { Component } from 'react';
import {Link} from 'vtex.render-runtime';
import styles from './styles.css';
import classnames from 'classnames';

export default class InfoBanners extends Component {
    
    render(){
        const { img, 
                boton, 
                subtitulo, 
                link,
                maxItems
            } = this.props
                
        return(
            <div style={{width: `calc(100%/${maxItems})`}} className={"pa3 flex justify-center"}>
                <Link to={link} className="no-underline">
                    <h2 className={classnames(styles.subtitulo, "tc pa3")}>{subtitulo}</h2>
                    <img src={img}></img>
                    <div className="w-100 flex justify-center">
                        <button className={styles.boton}>{boton}</button>
                    </div>                   
                </Link>
            </div>
        );
    }
}