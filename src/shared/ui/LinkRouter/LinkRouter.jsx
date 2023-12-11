import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkRouter.module.scss';
import cn from 'classnames'

function LinkRouter({ route, text, mode, ...args }) {
	return (
		<Link
			to={route}
			className={cn(styles.root,{[styles[mode]] : mode})}
			{...args}
		>
			{text}
		</Link>
	);
}

export default LinkRouter;
