import CardStages from 'components/CardStages/CardStages';
import { DEFAULT } from 'shared/utils/constants/modes';
import Section from 'components/Section';
import styles from './StagesContainer.module.scss';

function StagesContainer({ data, mode = DEFAULT }) {
	return (
		<Section>
			<div className={styles[mode]}>
				{data.map((item, id) => (
					<CardStages data={item} key={id} />
				))}
			</div>
		</Section>
	);
}

export default StagesContainer;
