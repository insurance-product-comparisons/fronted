import {
	Breadcrumbs,
	Section,
	Rating,
	InsuranceConditionsResult,
} from 'components';
import { RESULT_DEFAULT } from 'shared/store/resultDefault';
import { Typography, List, ListItem, Button, Logo } from 'shared/ui';
import { DOCUMENTS } from 'shared/store/sberbank';
import { SBERBANK } from 'shared/utils/constants/modes';
import styles from './Sber.module.scss';

function Sber({ id = '1' }) {
	const companyData = RESULT_DEFAULT.find((company) => id === company.id);

	return (
		<main className={styles.root}>
			<Section>
				<Breadcrumbs />
			</Section>
			<div className={styles.container}>
				<div className={styles['left-column']}>
					<Section>
						<Typography variant={'h2'}>СберСтрахование</Typography>
						<div className={styles['rating-container']}>
							<Rating rating={4.9} />
						</div>
					</Section>
					<Section>
						<InsuranceConditionsResult
							data={companyData}
							page={SBERBANK}
							font={'body1'}
						/>
					</Section>
					<Section>
						<Typography variant={'h4'}>О компании</Typography>
						<Typography variant={'body2'}>
							ООО СК «Сбербанк Страхование» предоставляет широкий спектр
							страховых услуг в сегменте имущественного и личного страхования,
							кроме страхования жизни. Компания основана в 2014 году.
						</Typography>
					</Section>
					<Section>
						<Typography variant={'h4'}>Что входит в страхование</Typography>
						{/**Карточки с вариантами страхования */}
					</Section>
					<Section>
						<Typography variant={'h4'}>Необходимые документы</Typography>
						<List listmode={SBERBANK}>
							{DOCUMENTS.map((item, index) => (
								<ListItem key={index}>
									<Typography variant={'body2'}>{item}</Typography>
								</ListItem>
							))}
						</List>
					</Section>
					<Section>
						<Typography variant={'h4'}>Лицензии</Typography>
						<Typography variant={'body2'}>
							АА №0123-44 АА №0123-44 АА №0123-44 АА
						</Typography>
					</Section>
					<Section>
						<div className={styles['button-container']}>
							<Button type="button" bgcolor="accent" mode="count">
								Вернуться к выбору
							</Button>
							<Button type="button" bgcolor="ghost" mode="count">
								Перейти на сайт
							</Button>
						</div>
					</Section>
				</div>
				<div className={styles['right-column']}>
					<Logo mode={'sberbank'} />
				</div>
			</div>
		</main>
	);
}

export default Sber;
