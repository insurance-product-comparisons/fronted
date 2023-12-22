import { DEFAULT } from 'shared/utils/constants/modes.js';
import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './TextArea.module.scss';

const TextArea = forwardRef(function TextArea(
	{ name, id, mode = DEFAULT, ...props },
	ref
) {
	return (
		<textarea
			name={name}
			className={cn(styles.default, { [styles[mode]]: mode })}
			id={id}
			ref={ref}
			{...props}
		></textarea>
	);
});

export default TextArea;
