import PropTypes from 'prop-types';
import styles from './Label.module.scss';
import { DEFAULT } from 'shared/utils/constants/modes.js';

function Label({ labelMode = DEFAULT, inputId, textLabel }) {
	return (
		<label className={styles[labelMode]} htmlFor={inputId}>
			{textLabel}
		</label>
	);
}

Label.propTypes = {
	mode: PropTypes.string,
	inputId: PropTypes.string,
	text: PropTypes.string,
};

export default Label;
