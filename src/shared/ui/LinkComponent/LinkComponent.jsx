import React from 'react';
import styles from './LinkComponent.module.scss';

function LinkComponent({ link, text, mode }) {
	const linkComponentStyle = React.useMemo(
		() => (mode ? styles[mode] : ' '),
		[mode]
	);

	return (
		<a
			href={link}
			className={[styles.root, linkComponentStyle].join(' ')}
			target="_blank"
			rel="noopener noreferrer"
		>
			{text}
		</a>
	);
}

export default LinkComponent;
