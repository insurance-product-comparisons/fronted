import ReactInputMask from 'react-input-mask';
import styles from './PhoneInput.module.scss';
import cn from 'classnames';
import { DEFAULT } from 'shared/utils/constants/modes.js';

function PhoneInput({
	mode,
	submode,
	isValid,
	isDisabled,
	name,
	id,
	...props
}) {
	const modeComponent = mode ? mode : DEFAULT;

	const inputClassName = cn(styles[`input-${modeComponent}`], styles[submode], {
		[styles[`input-${modeComponent}-error`]]: !isValid,
		[styles[`input-${modeComponent}-disable`]]: isDisabled,
	});

	return (
		<ReactInputMask
			{...props}
			name={name}
			id={id}
			mask="+7(999)-999-99-99"
			className={inputClassName}
			alwaysShowMask={true}
		></ReactInputMask>
	);
}

export default PhoneInput;
