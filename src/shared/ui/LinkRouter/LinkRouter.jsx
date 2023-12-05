import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkRouter.module.scss';

function LinkRouter({ route, text, mode, ...args }) {
	const linkComponentStyle = React.useMemo(
		() => (mode ? styles[mode] : ' '),
		[mode]
	);
	return (
		<Link
			to={route}
			className={[styles.root, linkComponentStyle].join(' ')}
			{...args}
		>
			{text}
		</Link>
	);
}

export default LinkRouter;
