import styles from './CardStages.module.scss';
import { Typography } from 'shared/ui';
import { DEFAULT } from 'shared/utils/constants/modes';

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
