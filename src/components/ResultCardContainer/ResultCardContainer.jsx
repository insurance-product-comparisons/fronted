import React from 'react';

import { List, ListItem } from 'shared/ui';

import { ResultCard, Section } from 'components';

function ResultCardContainer({ data }) {
	return (
		<Section>
			<List mode="result">
				{data.map(
					(card) => (
						<ListItem key={card.id}>
							<ResultCard data={card} />
						</ListItem>
					),
					console.log(data)
				)}
			</List>
		</Section>
	);
}

export default ResultCardContainer;
