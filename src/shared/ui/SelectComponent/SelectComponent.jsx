import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT } from 'shared/utils/constants/modes';
import classNames from 'classnames';
import Select from 'react-select';
import styles from './SelectComponent.module.scss';

function SelectComponent({
	options = [],
	mode = DEFAULT,
	placeholder,
	submode,
	...props
}) {
	const selectClassNames = {
		container: (state) => classNames(styles[mode], styles[submode]),
		control: ({ isDisabled, isFocused }) =>
			classNames(styles[`control-${mode}`], isFocused && styles.focused),
		valueContainer: (state) => classNames(styles[`value-container-${mode}`]),
		input: (state) => classNames(styles[`input-${mode}`]),
		indicatorSeparator: (state) => classNames(styles[`separator-${mode}`]),
		indicatorsContainer: (state) => classNames(styles[`indicator-${mode}`]),
		dropdownIndicator: ({ isFocused }) =>
			classNames(styles[`arrow-${mode}`], isFocused && styles.focused),
		option: ({ isDisabled, isFocused, isSelected }) =>
			classNames(styles[`option-${mode}`], isSelected && styles.selected),
		menu: (state) => classNames(styles[`menu-${mode}`]),
		menuList: (state) => classNames(styles[`menu-list-${mode}`]),
	};

	return (
		<Select
			classNames={selectClassNames}
			options={options}
			placeholder={placeholder}
			noOptionsMessage={() => 'Нет доступных вариантов'}
			defaultValue={options[0]}
			{...props}
		/>
	);
}

Select.propTypes = {
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string,
			label: PropTypes.string,
		})
	),
	mode: PropTypes.string,
	placeholder: PropTypes.string,
	submode: PropTypes.string,
	initialValue: PropTypes.string,
};

export default SelectComponent;
