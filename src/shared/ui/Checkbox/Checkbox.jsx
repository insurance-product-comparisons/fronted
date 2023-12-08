import React from 'react';
import styles from './Checkbox.module.scss'

function Checkbox({label, id, name, mode}) {
	const linkComponentStyle = React.useMemo(
		() => (mode ? styles[mode] : ' '),
		[mode]
	);
	return (
		<div className={[styles.root, linkComponentStyle].join(' ')}>
			<label className={[styles.label, linkComponentStyle].join(' ')}>{label}</label>
			<input 
				type='checkbox'
				id={id}
				name={name}
				className={[styles.checkbox, linkComponentStyle].join(' ')}
			>
		</input>
		</div>
	);
}

export default Checkbox;
