import {
	Breadcrumbs,
	InsuranceConditionsResult,
	InsuranceServices,
	Rating,
	Section,
} from 'components';
import React from 'react';
import { SERVICES_TINKOFF } from 'shared/store/servicesTinkoff';
import { Button, Typography } from 'shared/ui';
import { TINKOFF } from 'shared/utils/constants/modes';
import { useNavigate } from 'react-router-dom';
import styles from './Tinkoff.module.scss';

function Tinkoff({ result }) {
	const navigate = useNavigate();

	const companyData = React.useMemo(
		() => result.find((company) => TINKOFF === company.code),
		[result]
	);

	function handleBackButton() {
		navigate(-1);
	}

	function handleToSiteButton() {
		window.open('https://www.tinkoff.ru/insurance/', '_blank');
	}

	return (
		<main>
			<Section>
				<Breadcrumbs />

				<section className={styles['main-info']}>
					<div>
						<Typography variant="h2">Тинкофф Страхование</Typography>
						<div className={styles.rating}>
							<Rating rating={companyData ? companyData.rating : 0} />
						</div>
						<InsuranceConditionsResult
							data={companyData}
							page="tinkoff"
							font="body1"
						/>
					</div>
					<div className={styles.logo}></div>
				</section>

				<section className={styles.description}>
					<Typography variant="h4">О компании</Typography>
					<div className={styles.paragraphs}>
						<Typography variant="body2">
							В настоящее время компания является розничной, специализирующейся
							на директ-страховании, то есть продажах полисов через Интернет
							и кол-центр.
						</Typography>
						<Typography variant="body2">
							Основные направления деятельности — розничное страхование
							от несчастных случаев и болезней, страхование финансовых рисков,
							связанных с потерей работы, моторное страхование и страхование
							имущества граждан.
						</Typography>
						<Typography variant="body2">
							Компания является действующим членом Всероссийского Союза
							Страховщиков, Российского Союза Автостраховщиков и Ассоциации
							Европейского Бизнеса.
						</Typography>
					</div>
				</section>

				<section className={styles.services}>
					<Typography variant="h4">Что входит в страхование</Typography>
					<InsuranceServices data={SERVICES_TINKOFF} mode={TINKOFF} />
				</section>

				<section className={styles.documents}>
					<Typography variant="h4">
						Необходимые для оформления документы
					</Typography>
					<div className={styles.passport}>
						<Typography variant="body2">Паспорт</Typography>
					</div>
				</section>

				<section className={styles.license}>
					<Typography variant="h4">Лицензии</Typography>
					<Typography variant="body2">
						АА №0123-44 АА №0123-44 АА №0123-44 АА{' '}
					</Typography>
				</section>

				<section className={styles.buttons}>
					<Button
						children="Вернуться к выбору"
						type="button"
						bgcolor="ghost"
						mode="back-button"
						onClick={handleBackButton}
					/>
					<Button
						children="Перейти на сайт "
						type="button"
						bgcolor="accent"
						onClick={handleToSiteButton}
					/>
				</section>
			</Section>
		</main>
	);
}

export default Tinkoff;
