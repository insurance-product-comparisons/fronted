import React from 'react';
import cn from 'classnames';
import styles from './RadioBtn.module.scss';

function RadioBtn({ label, id, name, mode }) {
	return (
		<div className={cn(styles.root, { [styles[mode]]: mode })}>
			<label className={cn(styles.label, { [styles[mode]]: mode })}>
				{label}
			</label>
			<input
				type="radio"
				label={label}
				id={id}
				name={name}
				className={cn(styles.input, { [styles[mode]]: mode })}
			/>
		</div>
	);
}

export default RadioBtn;
