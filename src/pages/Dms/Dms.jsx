import {
	AnswersList,
	Breadcrumbs,
	DmcForm,
	Layout,
	Section,
	StagesContainer,
} from 'components';
import { ANSWERS_DMS } from 'shared/store/answers';
import { Typography } from 'shared/ui';
import STEPS_FOR_DMS from 'shared/utils/constants/cardStepDms';

function Dms() {
	return (
		<Layout>
			<main>
				<Section>
					<Breadcrumbs />
				</Section>

				<Section>
					<Typography variant="h2" color="black">
						Добровольное медицинское страхование
					</Typography>
					<StagesContainer data={STEPS_FOR_DMS} />
				</Section>

				<Section>
					<DmcForm />
				</Section>

				<Section>
					<AnswersList title="Вопросы и ответы" data={ANSWERS_DMS} />
				</Section>
			</main>
		</Layout>
	);
}

export default Dms;
