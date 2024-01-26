import useWidth from 'shared/hooks/useWidth';
import { List, ListItem, Typography } from 'shared/ui';
import styles from './InsuranceServices.module.scss';

function InsuranceServices({ data, mode }) {
	const windowWidth = useWidth();

	return (
		<List listmode={mode}>
			{data.map((card) => (
				<ListItem key={card.id} mode={mode}>
					<div
						className={styles.icon}
						style={{ backgroundImage: `url(${card.image})` }}
					></div>
					{windowWidth[0] > 720 ? (
						<>
							<Typography variant="body1">{card.title}</Typography>
							<Typography variant="body3">{card.subtitle}</Typography>
						</>
					) : (
						''
					)}
					{windowWidth[0] <= 720 ? (
						<Typography variant="body3">
							<span className={styles.bold}>{card.title}.</span> {card.subtitle}
						</Typography>
					) : (
						''
					)}
				</ListItem>
			))}
		</List>
	);
}

export default InsuranceServices;
