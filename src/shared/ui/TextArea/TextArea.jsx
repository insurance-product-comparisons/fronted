import { DEFAULT } from 'shared/utils/constants/modes.js';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './TextArea.module.scss';

const TextArea = forwardRef(function TextArea(
	{ name, id, mode = DEFAULT, isValid, ...props },
	ref
) {
	const textareaClassName = classNames(styles.default, styles[mode], {
		[styles[`${DEFAULT}-error`]]: !isValid,
	});

	return (
		<textarea
			name={name}
			className={textareaClassName}
			id={id}
			ref={ref}
			{...props}
		></textarea>
	);
});

export default TextArea;
