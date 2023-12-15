import PropTypes from 'prop-types';
import { AnswersItem, Typography, List, ListItem } from 'shared/ui';
import styles from './AnswersList.module.scss';

function AnswersList({ title, data, mode }) {
	return (
		<div className={styles[mode]}>
			<Typography variant="h4">{title}</Typography>
			<List mode="default">
				{data.map((item, index) => (
					<ListItem key={index} mode="default">
						<AnswersItem key={index} data={item} mode="default" />
					</ListItem>
				))}
			</List>
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
