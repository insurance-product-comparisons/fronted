import React from 'react';
import styles from './AccordionItem.module.scss';

function AccordionItem({ id, activeId, title, content, onClick, mode }) {
	const isActive = React.useMemo(() => id === activeId, [id, activeId]);

	return (
		<div className={styles[`type_${mode}`]}>
			<div className={styles[`title_type_${mode}`]} onClick={() => onClick(id)}>
				<div>{title}</div>
				<div
					className={[
						styles[`arrow_type_${mode}`],
						styles[isActive ? 'open' : 'close'],
					].join(' ')}
				></div>
			</div>
			<div
				className={[
					styles[`content_type_${mode}`],
					styles[isActive ? 'open' : 'close'],
				].join(' ')}
			>
				{content}
			</div>
		</div>
	);
}

export default AccordionItem;
