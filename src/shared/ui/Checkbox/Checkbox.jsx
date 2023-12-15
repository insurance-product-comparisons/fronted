import React, { forwardRef } from 'react';
import { Typography } from 'shared/ui';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Checkbox.module.scss';

const Checkbox = forwardRef(
	(
		{
			id,
			name,
			value,
			mode,
			typoVariant,
			typoColor,
			label,
			disabled,
			...props
		},
		ref
	) => {
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
	}
);

Checkbox.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	mode: PropTypes.string,
	typoVariant: PropTypes.string,
	typoColor: PropTypes.string,
	label: PropTypes.string,
	disabled: PropTypes.bool,
};

export default Checkbox;
