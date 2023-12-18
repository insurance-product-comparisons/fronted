import React from 'react';
import styles from './SelectOption.module.scss';

function SelectOption({ option, onClick }) {
	const optionRef = React.useRef(null);

	function handleClick(value) {
		onClick(value);
	}

	React.useEffect(() => {
		const option = optionRef.current;
		if (!option) return;

		function handleEnterPress(event) {
			if (document.activeElement === option && event.key === 'Enter') {
				onClick(option.value);
			}
		}

		option.addEventListener('keydown', handleEnterPress);

		return () => {
			option.removeEventListener('keydown', handleEnterPress);
		};
	}, [option, onClick]);

	return (
		<li
			className={styles.option}
			value={option.value}
			onClick={handleClick(option.value)}
			tabIndex={0}
			ref={optionRef}
		>
			{option.title}
		</li>
	);
}

export default SelectOption;
