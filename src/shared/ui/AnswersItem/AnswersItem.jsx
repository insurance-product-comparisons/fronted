import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography, List, ListItem } from 'shared/ui';
import { DEFAULT, ANSWER } from 'shared/utils/constants/modes';
import styles from './AnswersItem.module.scss';

function AnswersItem({ data, mode = DEFAULT }) {
	const [isOpen, setIsOpen] = React.useState(false);

	const componentClassName = classNames(styles[mode], {
		[styles.open]: isOpen,
	});
	const contentClassName = classNames(styles[`content-${mode}`], {
		[styles.open]: isOpen,
	});
	const arrowClassName = classNames(styles[`arrow-${mode}`], {
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
					{data.title}
				</Typography>
				<div className={contentClassName}>
					{typeof data.content === 'string' ? (
						<Typography variant="body2">{data.content}</Typography>
					) : (
						<List mode={ANSWER}>
							{data.content.map((item, i) => (
								<ListItem key={i}>
									<Typography variant="body2">{item} </Typography>
								</ListItem>
							))}
						</List>
					)}
				</div>
			</div>
			<div className={arrowClassName}></div>
		</div>
	);
}

AnswersItem.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
		content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	}),
	mode: PropTypes.string,
};

export default AnswersItem;
