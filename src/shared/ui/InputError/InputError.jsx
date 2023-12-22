import PropTypes from 'prop-types';
import { DEFAULT } from 'shared/utils/constants/modes.js';
import styles from './InputError.module.scss';

function InputError({ errorMode = DEFAULT, children }) {
	return <span className={styles[errorMode]}>{children}</span>;
}

InputError.propTypes = {
	mode: PropTypes.string,
	text: PropTypes.string,
	isVisible: PropTypes.bool,
};

export default InputError;
