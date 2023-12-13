import React from 'react';
import { Typography } from 'shared/ui';
import cn from 'classnames';
import styles from './Input.module.scss';

function Input({
	type,
	label,
	name,
	placeholder,
	pattern,
	id,
	mode,
	submode,
	typoVariant,
	typoColor,
	isValid,
	isDisabled,
	value,
	...args
}) {
	const inputClassName = cn(styles[`input-${mode}`], styles[submode], {
		[styles[`input-${mode}-error`]]: !isValid,
		[styles[`input-${mode}-disable`]]: isDisabled,
	});

	return (
		<div className={cn(styles.root, { [styles[mode]]: mode })}>
			<Typography variant={typoVariant} color={typoColor}>
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
					className={inputClassName}
					id={id}
					pattern={pattern}
					value={value}
					{...args}
				></input>
				<span className={cn(styles.span, { [styles[mode]]: mode })}>
					Text error
				</span>
			</Typography>
		</div>
	);
}

export default Input;
