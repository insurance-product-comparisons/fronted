import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import { forwardRef } from 'react';

const Input = forwardRef(
	(
		{
			name,
			type,
			placeholder,
			id,
			mode,
			submode,
			isValid,
			isDisabled,
			required,
			register,
			...props
		},
		ref
	) => {
		const inputClassName = cn(styles[`input-${mode}`], styles[submode], {
			[styles[`input-${mode}-error`]]: !isValid,
			[styles[`input-${mode}-disable`]]: isDisabled,
		});

		return (
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className={inputClassName}
				id={id}
				disabled={isDisabled}
				required={required}
				ref={ref}
				{...props}
			></input>
		);
	}
);

Input.propTypes = {
	mode: PropTypes.string,
	type: PropTypes.string,
	submode: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	id: PropTypes.string,
	isValid: PropTypes.bool,
	isDisabled: PropTypes.bool,
	value: PropTypes.string,
};

export default Input;
