import { Section, Breadcrumbs, ResultCardContainer } from 'components';
import { Typography, SelectComponent, Button } from 'shared/ui';
import { OPTIONS_SORT } from 'shared/store/sortOptions';
import { RESULT_DEFAULT } from 'shared/store/resultDefault';
import styles from './SearchResult.module.scss';

function SearchResult() {
	return (
		<main className={styles.root}>
			<Section>
				<Breadcrumbs />
			</Section>
			<Section>
				<Typography variant="h2">Выбор страховой компании</Typography>
			</Section>
			<Section>
				<div className={styles.container}>
					<SelectComponent options={OPTIONS_SORT} placeholder="" mode="sort" />
					<ResultCardContainer data={RESULT_DEFAULT} />
					<Button bgcolor="ghost" mode="enter">
						Загрузить ещё
					</Button>
				</div>
			</Section>
		</main>
	);
}

export default SearchResult;
