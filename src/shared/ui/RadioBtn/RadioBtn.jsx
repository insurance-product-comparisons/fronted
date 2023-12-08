import React from 'react';
import styles from './RadioBtn.module.scss'

function RadioBtn({label, placeholder, id, name, mode}) {
	const linkComponentStyle = React.useMemo(
		() => (mode ? styles[mode] : ' '),
		[mode]
	);
	return (
		<div className={[styles.root, linkComponentStyle].join(' ')}>
			<label className={[styles.label, linkComponentStyle].join(' ')}>{label}</label>
			<input 
				type='radio'
				label={label}
				id={id}
				name={name}
				className={[styles.input, linkComponentStyle].join(' ')}
			/>
		</div>
	);
}

export default RadioBtn;
