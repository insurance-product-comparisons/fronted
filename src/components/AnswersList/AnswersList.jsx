import PropTypes from 'prop-types';
import { AnswersItem } from 'shared/ui';
import styles from './AnswersList.module.scss';

function AnswersList({ title, data, mode }) {
	return (
		<div className={styles[mode]}>
			<h2 className={styles[`title-${mode}`]}>{title}</h2>
			<ul className={styles[`list-${mode}`]}>
				{data.map((item, index) => (
					<AnswersItem key={index} data={item} mode="default" />
				))}
			</ul>
		</div>
	);
}

AnswersList.propTypes = {
	title: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			content: PropTypes.string,
		})
	),
	mode: PropTypes.string,
};

export default AnswersList;