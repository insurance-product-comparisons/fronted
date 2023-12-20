import { Typography } from 'shared/ui';
import { DEFAULT } from 'shared/utils/constants/modes';
import styles from './CardStages.module.scss';

function CardStages({ data, mode = DEFAULT }) {
	return (
		<div className={styles[mode]}>
			<Typography variant="h5" color="yellow">
				{data.number}
			</Typography>
			<Typography variant="body1" color="black">
				{data.text}
			</Typography>
		</div>
	);
}

export default CardStages;
