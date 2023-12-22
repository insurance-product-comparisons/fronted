import React from 'react';
import { List } from 'shared/ui';
import { LinkRouter, Typography, ListItem } from 'shared/ui';
import { DEFAULT } from 'shared/utils/constants/modes';

function NavigationBar({ data, mode = DEFAULT, variant, color }) {
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

	return <List children={linkItems} listmode={mode} />;
}

export default NavigationBar;
