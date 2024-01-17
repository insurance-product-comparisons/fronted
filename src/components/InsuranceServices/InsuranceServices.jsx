import { List, ListItem, Typography } from 'shared/ui';
import styles from './InsuranceServices.module.scss';

function InsuranceServices({ data }) {
	return (
		<List listmode="tinkoff">
			{data.map((card) => (
				<ListItem key={card.id} mode="tinkoff">
					<div
						className={styles.icon}
						style={{ backgroundImage: `url(${card.image})` }}
					></div>
					<Typography variant="body1">{card.title}</Typography>
					<Typography variant="body3">{card.subtitle}</Typography>
				</ListItem>
			))}
		</List>
	);
}

export default InsuranceServices;
