import { Typography } from 'shared/ui';
import PropTypes from 'prop-types';
import styles from './Label.module.scss';

function Label({ mode, inputId, text, typoVariant, typoColor }) {
	return (
		<label className={styles[mode]} htmlFor={inputId}>
			<Typography variant={typoVariant} color={typoColor}>
				{text}
			</Typography>
		</label>
	);
}

Label.propTypes = {
	mode: PropTypes.string,
	inputId: PropTypes.string,
	text: PropTypes.string,
	typoVariant: PropTypes.string,
	typoColor: PropTypes.string,
};

export default Label;
