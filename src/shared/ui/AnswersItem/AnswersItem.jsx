import React from 'react';
import PropTypes from 'prop-types';
import styles from './AnswersItem.module.scss';

function AnswersItem({ data, mode }) {
	return (
		<div className={styles[mode]}>
			<h3 className={styles[`title-${mode}`]}>{data.title}</h3>
			<p className={styles[`content-${mode}`]}>{data.content}</p>
		</div>
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
