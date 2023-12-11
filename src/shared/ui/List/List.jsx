import React from 'react';
import styles from './List.module.scss';
import ListItem from '../ListItem';

function List({ array, mode }) {
	return (
		<ul className={styles[`type_${mode}`]}>
			{array.map((item, index) => (
				<ListItem key={index} children={item} mode="default" />
			))}
		</ul>
	);
}

export default List;
