import React, { forwardRef } from 'react';
import styles from './TextArea.module.scss';
import cn from 'classnames';

const TextArea = forwardRef(({ name, id, mode, ...props }, ref) => {
	return (
		<textarea
			{...props}
			name={name}
			className={cn(styles.default, { [styles[mode]]: mode })}
			id={id}
			ref={ref}
		></textarea>
	);
});

export default TextArea;
