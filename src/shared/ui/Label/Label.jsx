import PropTypes from 'prop-types';
import styles from './Label.module.scss';
import { DEFAULT } from 'shared/utils/constants/modes.js';

function Label({ labelMode, inputId, textLabel }) {
	const modeComponent = labelMode ? labelMode : DEFAULT;

	return (
		<label className={styles[modeComponent]} htmlFor={inputId}>
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
