import React from 'react';
import styles from './Typography.module.scss'

const variantsMapping = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	body1: 'p',
	body2: 'p',
	body3: 'p',
  };

function Typography({ variant, color, children }) {
	const Component = variant ? variantsMapping[variant] : 'p';
	return (
		<Component
		  className={
            [styles[`typography--variant-${variant}`], 
            styles[`typography--color-${color}`]]
            .join(' ')}
		>
			{children}
		</Component>
	);
}

export default Typography;
