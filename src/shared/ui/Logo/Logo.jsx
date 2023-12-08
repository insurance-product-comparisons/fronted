import React from 'react';
import styles from './Logo.module.scss'

function Logo({ mode }) {
	return (
        <div 
        className={
            [styles['logo'], 
            styles[mode]]
            .join(' ')}
        ></div>
    );
}

export default Logo;
