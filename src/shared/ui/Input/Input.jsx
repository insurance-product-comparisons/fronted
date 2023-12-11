import React from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

function Input({ type, label, name, placeholder, pattern, id, mode }) {
	return (
		<div className={cn(styles.root, { [styles[mode]]: mode })}>
			<label
				className={cn(styles.label, { [styles[mode]]: mode })}
				htmlFor={name}
			>
				{label}
			</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className={cn(styles.input, { [styles[mode]]: mode })}
				id={id}
				pattern={pattern}
				value=""
			></input>
			<span className={cn(styles.span, { [styles[mode]]: mode })}></span>
		</div>
	);
}

export default Input;
