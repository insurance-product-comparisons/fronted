import PropTypes from 'prop-types';
import { AnswersItem, Typography, List, ListItem } from 'shared/ui';
import { DEFAULT } from 'shared/utils/constants/modes';
import { Section } from 'components';
import styles from './AnswersList.module.scss';

function AnswersList({ title, data, mode = DEFAULT }) {
	return (
		<Section>
			<div className={styles[mode]}>
				<Typography variant="h4">{title}</Typography>
				<List mode={mode}>
					{data.map((item, index) => (
						<ListItem key={index} mode={mode}>
							<AnswersItem data={item} />
						</ListItem>
					))}
				</List>
			</div>
		</Section>
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
