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
		<input
			type={type}
			name={name}
			placeholder={placeholder}
			className={inputClassName}
			id={id}
			pattern={pattern}
			value={value}
			disabled={isDisabled}
			{...args}
		></input>
	);
}

export default Input;
