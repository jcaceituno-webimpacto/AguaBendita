import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart);
import styles from './styles.css';


export default class Minicart extends Component {
    render() {
        return (
            <FontAwesomeIcon icon="shopping-cart" className={styles.iconoCarro}/>
        )
    }
}