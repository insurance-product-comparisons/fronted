import React from 'react';
import List from 'shared/ui/List';
import { LinkRouter } from 'shared/ui';
import { Typography } from 'shared/ui';
import { ListItem } from 'shared/ui';
import { DEFAULT } from 'shared/utils/constants/modes';

function NavigationBar({ data, mode = DEFAULT, variant, color }) {
	// const modeComponent = mode ? mode : DEFAULT;

	const linkItems = data.map((item) => (
		<ListItem key={item.id}>
			<LinkRouter
				route={item.route}
				text={
					<Typography variant={variant} color={color}>
						{item.text}
					</Typography>
				}
				mode={DEFAULT}
			/>
		</ListItem>
	));

	return <List children={linkItems} mode={mode} />;
}

export default NavigationBar;
