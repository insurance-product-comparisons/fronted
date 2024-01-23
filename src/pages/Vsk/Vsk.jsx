import React from 'react';
import {
	Breadcrumbs,
	Section,
	Rating,
	InsuranceConditionsResult,
} from 'components';
import { Typography, List, ListItem, Button, Logo } from 'shared/ui';
import { useNavigate } from 'react-router-dom';
import { DOCUMENTS } from 'shared/store/vsk';
import { VSK } from 'shared/utils/constants/modes';
import styles from './Vsk.module.scss';

function Vsk({ result }) {
	const navigate = useNavigate();
	const companyData = React.useMemo(
		() => result.find((company) => VSK === company.code),
		[result]
	);

	function handleBackButton() {
		navigate(-1);
	}

	function handleToSiteButton() {
		window.open('https://www.vsk.ru/klientam', '_blank');
	}

	return (
		<main className={styles.root}>
			<Section>
				<Breadcrumbs />
			</Section>
			<div className={styles.container}>
				<div className={styles['left-column']}>
					<Section>
						<Typography variant={'h2'}>ВСК</Typography>
						<div className={styles['rating-container']}>
							<Rating rating={companyData ? companyData.rating : 0} />
						</div>
					</Section>
					<Section>
						<InsuranceConditionsResult
							data={companyData}
							page={VSK}
							font={'body1'}
						/>
					</Section>
					<Section>
						<Typography variant={'h4'}>О компании</Typography>
						<div className={styles['about-container']}>
							<Typography variant={'body2'}>
								Страховой Дом ВСК(САО «ВСК») осуществляет страховую деятельность
								с 11 февраля 1992 года и в настоящее время занимает ведущие
								позиции на рынке страховых услуг России.
							</Typography>
							<Typography variant={'body2'}>
								Высокий уровень работы компании четырежды отмечен благодарностью
								Президента России за большой вклад в развитие страхового дела
								(2002, 2007, 2017 и 2022).
							</Typography>
							<Typography variant={'body2'}>
								ВСК является пятикратным лауреатом Национального конкурса
								«Компания года» (2013, 2015, 2018, 2020 и 2021) в номинации
								«Страховая компания».
							</Typography>
						</div>
					</Section>
					<Section>
						<Typography variant={'h4'}>Что входит в страхование</Typography>
						<div className={styles['term-container']}>
							<Typography variant={'body2'}>
								Страховыми событиями по ОСАГО являются случаи, когда вследствие
								эксплуатации транспорта был причинён имущественный ущерб или
								вред здоровью либо жизни человека.
							</Typography>
						</div>
					</Section>
					<Section>
						<Typography variant={'h4'}>
							Необходимые для оформления документы
						</Typography>
						<List listmode={VSK}>
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
							<Button
								type="button"
								bgcolor="ghost"
								mode={VSK}
								onClick={handleBackButton}
							>
								Вернуться к выбору
							</Button>
							<Button
								type="button"
								bgcolor="accent"
								mode={VSK}
								onClick={handleToSiteButton}
							>
								Перейти на сайт
							</Button>
						</div>
					</Section>
				</div>
				<div className={styles['right-column']}>
					<Logo mode={VSK} />
				</div>
			</div>
		</main>
	);
}

export default Vsk;
