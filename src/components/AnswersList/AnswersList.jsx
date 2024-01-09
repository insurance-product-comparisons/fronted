import PropTypes from 'prop-types';
import { AnswersItem, Typography, List, ListItem } from 'shared/ui';
import { DEFAULT } from 'shared/utils/constants/modes';
import styles from './AnswersList.module.scss';

function AnswersList({ title, data, mode = DEFAULT }) {
	return (
		<>
			<div className={styles[mode]}>
				<Typography variant="h2">{title}</Typography>
				<div className={styles.wrapper}>
					<List mode={mode}>
						{data.map((item, index) => (
							<ListItem key={index} mode={mode}>
								<AnswersItem data={item} mode={mode} listmode={data.listmode} />
							</ListItem>
						))}
					</List>
				</div>
			</div>
		</>
	);
}

AnswersList.propTypes = {
	title: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			title: PropTypes.string,
			content: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.array,
				PropTypes.object,
			]),
		})
	),
	mode: PropTypes.string,
};

export default AnswersList;
