import ReactInputMask from 'react-input-mask';
import cn from 'classnames';
import { DEFAULT } from 'shared/utils/constants/modes.js';
import styles from './PhoneInput.module.scss';

function PhoneInput({
	mode = DEFAULT,
	submode,
	isValid,
	isDisabled,
	name,
	id,
	...props
}) {
	const inputClassName = cn(styles[`input-${mode}`], styles[submode], {
		[styles[`input-${mode}-error`]]: !isValid,
		[styles[`input-${mode}-disable`]]: isDisabled,
	});

	return (
		<ReactInputMask
			{...props}
			name={name}
			id={id}
			mask="+7(999)-999-99-99"
			className={inputClassName}
			alwaysShowMask
		></ReactInputMask>
	);
}

export default PhoneInput;
