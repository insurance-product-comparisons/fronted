import React from 'react';
import styles from './RadioBtn.module.scss'
import cn from 'classnames'

function RadioBtn({label, placeholder, id, name, mode}) {
	return (
		<div className={cn(styles.root,{[styles[mode]] : mode})}>
			<label className={cn(styles.label,{[styles[mode]] : mode})}>
				{label}</label>
			<input 
				type='radio'
				label={label}
				id={id}
				name={name}
				className={cn(styles.input,{[styles[mode]] : mode})}
			/>
		</div>
	);
}

export default RadioBtn;
