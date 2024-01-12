import React from 'react';

import { List, ListItem } from 'shared/ui';

import { ResultCard } from 'components';

function ResultCardContainer({ data }) {
	return (
		<List listmode="result">
			{data.map((card) => (
				<ListItem key={card.id}>
					<ResultCard data={card} />
				</ListItem>
			))}
		</List>
	);
}

export default ResultCardContainer;
