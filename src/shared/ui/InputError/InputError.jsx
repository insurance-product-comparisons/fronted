import PropTypes from 'prop-types';
import styles from './InputError.module.scss';

function InputError({ mode, text, isVisible }) {
	return <span className={styles[mode]}>{isVisible && text}</span>;
}

InputError.propTypes = {
	mode: PropTypes.string,
	text: PropTypes.string,
	isVisible: PropTypes.bool,
};

export default InputError;
