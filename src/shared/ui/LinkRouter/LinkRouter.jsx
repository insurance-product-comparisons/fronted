import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { DEFAULT } from 'shared/utils/constants/modes';
import styles from './LinkRouter.module.scss';

function LinkRouter({ route, text, mode = DEFAULT, ...args }) {
	return (
		<Link
			to={route}
			className={cn(styles.root, { [styles[mode]]: mode })}
			{...args}
		>
			{text}
		</Link>
	);
}

export default LinkRouter;
