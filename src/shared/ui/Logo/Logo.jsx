import React from 'react';
import cn from 'classnames';
import styles from './Logo.module.scss';

function Logo({ mode }) {
	return <div className={cn(styles.logo, { [styles[mode]]: mode })}></div>;
}

export default Logo;
