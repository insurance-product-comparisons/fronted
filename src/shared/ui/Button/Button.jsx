import React from 'react';
import styles from './Button.module.scss'
import cn from 'classnames'

function Button({ type, children, mode, bgcolor }) {
	return (
		<button 
			type={type} 
			className={cn({
				[styles[bgcolor]] : bgcolor,
				[styles[mode]] : mode
			})}
		>
			{children}
		</button>
	);
}

export default Button;
