import ReactInputMask from 'react-input-mask';
import { forwardRef } from 'react';
import cn from 'classnames';
import { DEFAULT } from 'shared/utils/constants/modes.js';
import styles from './PhoneInput.module.scss';

const PhoneInput = forwardRef(function PhoneInput(
	{ mode = DEFAULT, submode, isValid, isDisabled, name, id, ...rest },
	ref
) {
	const inputClassName = cn(styles[`input-${mode}`], styles[submode], {
		[styles[`input-${mode}-error`]]: !isValid,
		[styles[`input-${mode}-disable`]]: isDisabled,
	});

	return (
		<ReactInputMask
			name={name}
			id={id}
			mask="+7(999)9999999"
			placeholder="+7 ("
			className={inputClassName}
			ref={ref}
			{...rest}
		></ReactInputMask>
	);
});
export default PhoneInput;
