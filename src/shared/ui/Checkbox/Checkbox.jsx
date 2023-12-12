import React from 'react';
import { Typography } from 'shared/ui';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';

function Checkbox({
	id,
	name,
	value,
	mode,
	typoVariant,
	typoColor,
	label,
	disabled,
}) {
	const pseudoClassName = classNames(styles[`pseudo-${mode}`], {
		[styles.disable]: disabled,
	});

	return (
		<label className={styles[`label-${mode}`]} htmlFor={id}>
			<input
				className={styles.checkbox}
				type="checkbox"
				name={name}
				value={value}
				id={id}
				required
			/>
			<span className={pseudoClassName}></span>
			<Typography variant={typoVariant} color={typoColor}>
				{label}
			</Typography>
		</label>
	);
}

export default Checkbox;
