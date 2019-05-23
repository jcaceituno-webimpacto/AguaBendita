import React, { Component } from 'react';
import styles from './styles.css';
import Login from 'vtex.login/Login'


export default class Loginjc extends Component {
    render() {
        return (
            <div className="flex items-center">
                <Login />
            </div>
        )
    }
}