import React from 'react';
// import { DEFAULT } from 'shared/utils/constants/modes';
import { SelectOption } from 'shared/ui';
import styles from './SelectComponent.module.scss';

const options = [
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' },
];

function SelectComponent({
	onClose,
	mode,
	status,
	selected,
	onChange,
	placeholder,
}) {
	const [isOpen, setIsOpen] = React.useState(false);
	const placeholderRef = React.useRef(null);

	function handlePlaceholderClick() {
		setIsOpen((prev) => !prev);
	}

	function handleOptionClick(value) {
		setIsOpen(false);
		onChange(value);
	}

	React.useEffect(() => {
		const placeholderEl = placeholderRef.current;
		if (!placeholderEl) return;

		function handleClick(event) {
			if (event.key === 'Enter') {
				setIsOpen((prev) => !prev);
			}
		}

		placeholderEl.addEventListener('keydown', handleClick);

		return () => {
			placeholderEl.removeEventListener('keydown', handleClick);
		};
	}, []);

	return (
		<div className={styles.wrapper} data-is-active={isOpen} data-mode={mode}>
			<div className={styles.arrow}></div>
			<div
				className={styles.placeholder}
				data-status={status}
				data-selected={!!selected?.value}
				ref={placeholderRef}
			>
				{selected?.title || placeholder}
			</div>
			{isOpen && (
				<ul className={styles.select}>
					{options.map((option, index) => (
						<SelectOption
							key={index}
							option={option}
							onClick={handleOptionClick}
						/>
					))}
				</ul>
			)}
		</div>
	);
}

export default SelectComponent;
