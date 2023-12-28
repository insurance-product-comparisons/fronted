import CardStages from 'components/CardStages/CardStages';
import { DEFAULT } from 'shared/utils/constants/modes';
import styles from './StagesContainer.module.scss';

function StagesContainer({ data, mode = DEFAULT }) {
	return (
		<div className={styles[mode]}>
			{data.map((item, id) => (
				<CardStages data={item} key={id} />
			))}
		</div>
	);
}

export default StagesContainer;
