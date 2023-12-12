import PropTypes from 'prop-types';
import styles from './AnswersItem.module.scss';

function AnswersItem({ data, mode }) {
	return (
		<li className={styles[mode]}>
			<input type="checkbox" className={styles.checkbox} id={data.id} />
			<label className={styles[`title-${mode}`]} htmlFor={data.id}>
				{data.title}
			</label>
			<p className={styles[`content-${mode}`]}>{data.content}</p>
		</li>
	);
}

AnswersItem.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string,
		content: PropTypes.string,
	}),
	mode: PropTypes.string,
};

export default AnswersItem;
