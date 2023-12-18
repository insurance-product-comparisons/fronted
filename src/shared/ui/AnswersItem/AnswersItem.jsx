import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography } from 'shared/ui';
import { DEFAULT } from 'shared/utils/constants/modes';
import styles from './AnswersItem.module.scss';

function AnswersItem({ data, mode }) {
	const [isOpen, setIsOpen] = React.useState(false);
	const componentMode = mode ? mode : DEFAULT;

	const componentClassName = classNames(styles[componentMode], {
		[styles.open]: isOpen,
	});
	const contentClassName = classNames(styles[`content-${componentMode}`], {
		[styles.open]: isOpen,
	});
	const arrowClassName = classNames(styles[`arrow-${componentMode}`], {
		[styles.rotate]: isOpen,
	});

	return (
		<div className={componentClassName}>
			<div className={styles[`wrapper-${componentMode}`]}>
				<Typography
					variant="body1"
					style={{ cursor: 'pointer' }}
					onClick={() => setIsOpen((prev) => !prev)}
				>
					{data.title}
				</Typography>
				<div className={contentClassName}>
					<Typography variant="body2">{data.content}</Typography>
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
		content: PropTypes.string,
	}),
	mode: PropTypes.string,
};

export default AnswersItem;
