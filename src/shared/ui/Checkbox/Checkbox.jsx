import React from 'react';
import styles from './Checkbox.module.scss';
import cn from 'classnames';

function Checkbox({ label, id, name, mode }) {
	return (
		<div className={cn(styles.root, { [styles[mode]]: mode })}>
			<label className={cn(styles.label, { [styles[mode]]: mode })}>
				{label}
			</label>
			<input
				type="checkbox"
				id={id}
				name={name}
				className={cn(styles.checkbox, { [styles[mode]]: mode })}
			></input>
		</div>
	);
}

export default Checkbox;
