import React from 'react';
import styles from './Button.module.scss'

function Button({ type, children, mode, bgcolor }) {
	return (
		<button 
			type={type} 
			className={[styles[bgcolor], [styles[mode]]].join(' ')}
		>
			{children}
		</button>
	);
}

export default Button;
