import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography, List, ListItem } from 'shared/ui';
import { DEFAULT } from 'shared/utils/constants/modes';
import styles from './AnswersItem.module.scss';

function AnswersItem({ data, mode = DEFAULT }) {
	const [isOpen, setIsOpen] = React.useState(false);

	const componentClassName = classNames(styles[mode], {
		[styles.open]: isOpen,
	});
	const contentClassName = classNames(styles[`content-${mode}`], {
		[styles.open]: isOpen,
	});
	const titleClassName = classNames(styles.title, {
		[styles.rotate]: isOpen,
	});

	return (
		<div className={componentClassName}>
			<div className={styles[`wrapper-${mode}`]}>
				<Typography
					variant="body1"
					style={{ cursor: 'pointer' }}
					onClick={() => setIsOpen((prev) => !prev)}
				>
					<span className={titleClassName}>{data.title}</span>
				</Typography>
				<div className={contentClassName}>
					{typeof data.content === 'object' ? (
						<div>
							<Typography variant="body2" padding="answerlist-title">
								{data.content.title}
							</Typography>
							<List listmode={data.listmode}>
								{data.content.array?.map((item, i) => (
									<ListItem key={i} mode={data.listmode}>
										<Typography variant="body2">{item} </Typography>
									</ListItem>
								))}
							</List>
						</div>
					) : (
						<Typography variant="body2">{data.content}</Typography>
					)}
				</div>
			</div>
		</div>
	);
}

AnswersItem.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		content: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.array,
			PropTypes.object,
		]),
	}),
	mode: PropTypes.string,
};

export default AnswersItem;
