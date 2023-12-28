import cn from 'classnames';
import PropTypes from 'prop-types';
import { DEFAULT } from 'shared/utils/constants/modes.js';
import styles from './Input.module.scss';

function Input({
	name,
	type,
	placeholder,
	id,
	mode = DEFAULT,
	submode,
	isValid,
	isDisabled,
	required,
	register,
	validation,
	...props
}) {
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
			{...(register ? register(name, validation) : null)}
			{...props}
		></input>
	);
}

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
