import React from 'react';
import cn from 'classnames';
import styles from './LinkComponent.module.scss';

function LinkComponent({ link, text, mode }) {
	return (
		<a
			href={link}
			className={cn(styles.root, { [styles[mode]]: mode })}
			target="_blank"
			rel="noopener noreferrer"
		>
			{text}
		</a>
	);
}

export default LinkComponent;
