import PropTypes from 'prop-types';
import styles from './InputError.module.scss';
import { DEFAULT } from 'shared/utils/constants/modes.js';

function InputError({ errorMode, errorMessage, isVisible }) {
	const modeComponent = errorMode ? errorMode : DEFAULT;

	return (
		<span className={styles[modeComponent]}>{isVisible && errorMessage}</span>
	);
}

InputError.propTypes = {
	mode: PropTypes.string,
	text: PropTypes.string,
	isVisible: PropTypes.bool,
};

export default InputError;
