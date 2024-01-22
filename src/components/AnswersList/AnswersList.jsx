import PropTypes from 'prop-types';
import { AnswersItem, Typography, List, ListItem } from 'shared/ui';
import cn from 'classnames';
import { DEFAULT } from 'shared/utils/constants/modes';
import styles from './AnswersList.module.scss';

function AnswersList({ title, data, mode = DEFAULT, fontSize, page, padding }) {
	return (
		<>
			<div className={styles[mode]}>
				<Typography variant={fontSize}>{title}</Typography>
				<div
					className={cn(styles.wrapper, {
						[styles[page]]: page,
					})}
				>
					<List mode={mode}>
						{data.map((item, index) => (
							<ListItem key={index} mode={mode}>
								<AnswersItem
									data={item}
									mode={mode}
									listmode={data.listmode}
									padding={padding}
								/>
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
