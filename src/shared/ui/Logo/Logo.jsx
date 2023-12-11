import React from 'react';
import styles from './Logo.module.scss'
import cn from 'classnames'

function Logo({ mode }) {
	return (
        <div 
        className={cn(styles.logo,{[styles[mode]] : mode})}
        ></div>
    );
}

export default Logo;
