import React from 'react';
import styles from './ListItem.module.scss'

function ListItem({ children, mode }) {
    const linkComponentStyle = React.useMemo(
		() => (mode ? styles[mode] : ' '),
		[mode]
	);
	return (
		<li
        className={[styles.root, linkComponentStyle].join(' ')}
        >
            {children}
        </li>
	);
}

export default ListItem;
