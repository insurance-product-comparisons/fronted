import {
	Breadcrumbs,
	Section,
	Rating,
	InsuranceConditionsResult,
	InsuranceServices,
} from 'components';
import { Typography, List, ListItem, Button, Logo } from 'shared/ui';
import { DOCUMENTS } from 'shared/store/sberbank';
import { SBERBANK, SBERBANK_SERV } from 'shared/utils/constants/modes';
import { SERVICES_SBERBANK } from 'shared/store/servicesSber';
import styles from './Sber.module.scss';

function Sber({ result }) {
	const companyData = result.find((company) => SBERBANK === company.code);

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
							<Rating rating={companyData ? companyData.rating : 0} />
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
						<div className={styles['about-container']}>
							<Typography variant={'body2'}>
								ООО СК «Сбербанк Страхование» предоставляет широкий спектр
								страховых услуг в сегменте имущественного и личного страхования,
								кроме страхования жизни.
							</Typography>
							<Typography variant={'body2'}>
								Компания основана в 2014 году.
							</Typography>
						</div>
					</Section>
					<Section>
						<Typography variant={'h4'}>Что входит в страхование</Typography>
						<InsuranceServices data={SERVICES_SBERBANK} mode={SBERBANK_SERV} />
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
							<span className={styles.license}>
								АА №0123-44 АА №0123-44 АА №0123-44 АА
							</span>
						</Typography>
					</Section>
					<Section>
						<div className={styles['button-container']}>
							<Button type="button" bgcolor="ghost" mode={SBERBANK}>
								Вернуться к выбору
							</Button>
							<Button type="button" bgcolor="accent" mode={SBERBANK}>
								Перейти на сайт
							</Button>
						</div>
					</Section>
				</div>
				<div className={styles['right-column']}>
					<Logo mode={SBERBANK} />
				</div>
			</div>
		</main>
	);
}

export default Sber;
