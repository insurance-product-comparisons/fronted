import React from 'react';
import styles from './TextArea.module.scss'
import cn from 'classnames'

function TextArea({label, name, id, placeholder, mode}) {
	return (
		<div className={cn(styles.root,{[styles[mode]] : mode})}>
			<label
			className={cn(styles.label,{[styles[mode]] : mode})}
			>{label}</label>
			<textarea
				name={name}
				placeholder={placeholder}
				className={cn(styles.textarea,{[styles[mode]] : mode})}
				id={id}
				value=''
				>
			</textarea>
		</div>
	);
}

export default TextArea;
