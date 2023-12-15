import React from 'react';
import List from 'shared/ui/List';
import { LinkRouter } from 'shared/ui';
import { Typography } from 'shared/ui';
import { ListItem } from 'shared/ui';

function NavigationBar({ data, mode, variant, color }) {
	const linkItems = data.map((item) => (
		<ListItem key={item.id}>
			<LinkRouter
				route={item.route}
				text={
					<Typography variant={variant} color={color}>
						{item.text}
					</Typography>
				}
				mode="default"
			/>
		</ListItem>
	));

	return <List children={linkItems} mode={mode} />;
}

export default NavigationBar;
