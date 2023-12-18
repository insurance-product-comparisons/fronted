import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';
import { DEFAULT } from 'shared/utils/constants/modes.js';

function Input({
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
}) {
	const modeComponent = mode ? mode : DEFAULT;

	const inputClassName = cn(styles[`input-${modeComponent}`], styles[submode], {
		[styles[`input-${modeComponent}-error`]]: !isValid,
		[styles[`input-${modeComponent}-disable`]]: isDisabled,
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
