import React, { Component } from 'react';
import { ExtensionPoint, Link } from 'vtex.render-runtime'
import styles from './styles.css';


export default class HeaderBikinis extends Component {

    static defaultProps = {
        image: "",
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
                    title: 'Imagen Header',
                    type: 'string',
                    widget: {
                        'ui:widget': 'image-uploader',
                    }
                },
            },
            title: 'HeaderJC',
            type: 'object',
        }
    }


    render() {
        const {image}=this.props;

        return (
            <div>
                <ExtensionPoint id="topbar"/>
                <div className={styles.parent}>
                    <Link to="/" className={styles.child}><img src={image}/></Link>

                    <div className={styles.child}>
                        <ExtensionPoint id="minicart"/>
                    </div>
                </div>

                <ExtensionPoint id="menujc" className=""/>
            </div>
        )
    }
}