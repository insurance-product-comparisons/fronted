import React from 'react';
import styles from './TextArea.module.scss'

function TextArea({label, name, id, placeholder, mode}) {
	const linkComponentStyle = React.useMemo(
		() => (mode ? styles[mode] : ' '),
		[mode]
	);
	return (
		<div className={[styles.root, linkComponentStyle].join(' ')}>
			<label
			className={[styles.label, linkComponentStyle].join(' ')}
			>{label}</label>
			<textarea
				name={name}
				placeholder={placeholder}
				className={[styles.textarea, linkComponentStyle].join(' ')}
				id={id}
				value=''
				>
			</textarea>
		</div>
	);
}

export default TextArea;
