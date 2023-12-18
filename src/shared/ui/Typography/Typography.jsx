import React from 'react';
import cn from 'classnames';
import styles from './Typography.module.scss';

const VARIANTS_MAPPING = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4',
	body1: 'p',
	body2: 'p',
	body3: 'p',
};

function Typography({ variant, color, children, ...args }) {
	const Component = variant ? VARIANTS_MAPPING[variant] : 'p';
	return (
		<Component
			className={cn({
				[styles[`typography--variant-${variant}`]]: variant,
				[styles[`typography--color-${color}`]]: color,
			})}
			{...args}
		>
			{children}
		</Component>
	);
}

export default Typography;
