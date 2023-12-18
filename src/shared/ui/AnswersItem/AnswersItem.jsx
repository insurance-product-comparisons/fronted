import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Typography } from 'shared/ui';
import styles from './AnswersItem.module.scss';

function AnswersItem({ data, mode }) {
	const [isOpen, setIsOpen] = React.useState(false);

	const contentClassName = classNames(styles[`content-${mode}`], {
		[styles.open]: isOpen,
	});
	const arrowClassName = classNames(styles[`arrow-${mode}`], {
		[styles.rotate]: isOpen,
	});

	return (
		<div className={styles[mode]}>
			<div className={styles[`wrapper-${mode}`]}>
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
