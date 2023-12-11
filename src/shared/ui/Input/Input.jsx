import React from 'react';
import styles from './Input.module.scss'
import cn from 'classnames'

function Input({ type, label, name, placeholder, pattern, id, mode }) {
	return (
		<div className={cn({
			[styles.root] : true,
			[styles[mode]] : mode
		})}>
			<label className={cn({
				[styles.label] : true,
				[styles[mode]] : mode
			})}
			htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className={cn({
					[styles.input] : true,
					[styles[mode]] : mode
				})}
				id={id}
				pattern={pattern}
				value=''
				>
			</input>
			<span className={cn({
				[styles.span] : true,
				[styles[mode]] : mode
			})}></span>
		</div>
	);
}

export default Input;
