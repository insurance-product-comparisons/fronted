import PropTypes from 'prop-types';
import styles from './Label.module.scss';

function Label({ mode, inputId, text }) {
	return (
		<label className={styles[mode]} htmlFor={inputId}>
			{text}
		</label>
	);
}

Label.propTypes = {
	mode: PropTypes.string,
	inputId: PropTypes.string,
	text: PropTypes.string,
};

export default Label;
