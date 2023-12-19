import CardStages from 'components/CardStages/CardStages';
import styles from './StagesContainer.module.scss';
import { DEFAULT } from 'shared/utils/constants/modes';
const { default: Section } = require('components/Section');

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
