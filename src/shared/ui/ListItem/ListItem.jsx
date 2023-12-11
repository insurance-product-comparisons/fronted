import React from 'react';
import styles from './ListItem.module.scss';
import cn from 'classnames';

function ListItem({ children, mode }) {
	return (
		<li className={cn(styles.root, { [styles[mode]]: mode })}>{children}</li>
	);
}

export default ListItem;
