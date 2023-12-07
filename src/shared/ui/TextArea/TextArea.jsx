import React from 'react';
import styles from './TextArea.module.scss'

function TextArea({label = 'Textarea', name, id, placeholder, mode}) {
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
				className={[styles.default, linkComponentStyle].join(' ')}
				id={id}
				value=''
				rows='4'
				cols='20'
				>
			</textarea>
		</div>
	);
}

export default TextArea;
