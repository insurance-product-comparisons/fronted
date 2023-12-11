import React from 'react';
import styles from './TextArea.module.scss'
import cn from 'classnames'

function TextArea({label, name, id, placeholder, mode}) {
	return (
		<div className={cn({
			[styles.root] : true,
			[styles[mode]] : mode
		})}>
			<label
			className={cn({
				[styles.label] : true,
				[styles[mode]] : mode
			})}
			>{label}</label>
			<textarea
				name={name}
				placeholder={placeholder}
				className={cn({
					[styles.textarea] : true,
					[styles[mode]] : mode
				})}
				id={id}
				value=''
				>
			</textarea>
		</div>
	);
}

export default TextArea;
