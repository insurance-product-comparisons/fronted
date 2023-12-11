import React from 'react';
import styles from './Checkbox.module.scss'
import cn from 'classnames'

function Checkbox({label, id, name, mode}) {
	return (
		<div className={cn({
			[styles.root] : true,
			[styles[mode]] : mode
		})}>
			<label className={cn({
				[styles.label] : true,
				[styles[mode]] : mode
			})}>{label}</label>
			<input 
				type='checkbox'
				id={id}
				name={name}
				className={cn({
					[styles.checkbox] : true,
					[styles[mode]] : mode
				})}
			>
		</input>
		</div>
	);
}

export default Checkbox;
