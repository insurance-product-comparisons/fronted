import React from 'react';
import styles from './RadioBtn.module.scss';
import { DEFAULT } from 'shared/utils/constants/modes.js';
import cn from 'classnames';
import Typography from '../Typography';

const RadioBtn = React.forwardRef(function RadioBtn(
	{
		label,
		id,
		name,
		mode = DEFAULT,
		value,
		typoVariant,
		typoColor,
		disabled,
		...props
	},
	ref
) {
	const pseudoClassName = cn(styles[`pseudo-${mode}`], {
		[styles.disable]: disabled,
	});

	return (
		<label className={styles[`label-${mode}`]} htmlFor={id}>
			<input
				className={styles.radio}
				type="radio"
				name={name}
				id={id}
				value={value}
				required
				disabled={disabled}
				ref={ref}
				{...props}
			/>
			<span className={pseudoClassName}></span>
			<Typography variant={typoVariant} color={typoColor}>
				{label}
			</Typography>
		</label>
	);
});

export default RadioBtn;
