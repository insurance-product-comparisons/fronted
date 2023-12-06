import React from 'react';

function AccordionItem({ id, activeId, title, content, onClick }) {
	const isActive = React.useMemo(() => id === activeId, [id, activeId]);

	return (
		<div className="accordion-item">
			<div className="accordion-title" onClick={() => onClick(id)}>
				<div>{title}</div>
				<div>{isActive ? '-' : '+'}</div>
			</div>
			{isActive && <div className="accordion-content">{content}</div>}
		</div>
	);
}

export default AccordionItem;
