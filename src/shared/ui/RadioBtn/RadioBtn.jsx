import React from 'react';
import styles from './RadioBtn.module.scss'
import cn from 'classnames'

function RadioBtn({label, placeholder, id, name, mode}) {
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
				type='radio'
				label={label}
				id={id}
				name={name}
				className={cn({
					[styles.input] : true,
					[styles[mode]] : mode
				})}
			/>
		</div>
	);
}

export default RadioBtn;
