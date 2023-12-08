import React from 'react';
import styles from './Input.module.scss'

function Input({ type, label, name, placeholder, pattern, id, mode }) {
	const linkComponentStyle = React.useMemo(
		() => (mode ? styles[mode] : ' '),
		[mode]
	);
	return (
		<div className={[styles.root, linkComponentStyle].join(' ')}>
			<label className={[styles.label, linkComponentStyle].join(' ')} htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				className={[styles.input, linkComponentStyle].join(' ')}
				id={id}
				pattern={pattern}
				value=''
				>
			</input>
			<span className={[styles.span, linkComponentStyle].join(' ')}></span>
		</div>
	);
}

export default Input;
