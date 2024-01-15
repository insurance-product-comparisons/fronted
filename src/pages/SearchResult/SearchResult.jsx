import { Section, Breadcrumbs, ResultCardContainer } from 'components';
import React from 'react';
import { Typography, SelectComponent, Button } from 'shared/ui';
import { OPTIONS_SORT } from 'shared/store/sortOptions';
import { RESULT_DEFAULT } from 'shared/store/resultDefault';
import styles from './SearchResult.module.scss';

function SearchResult() {
	const [sortValue, setSortValue] = React.useState('popular');
	const [isShowMore, setIsShowMore] = React.useState(true);
	const [resultsPerPage, setResultsPerPage] = React.useState(5);
	const [resultsPerLoad, setResultsPerLoad] = React.useState(3);

	const handleChange = (selectedOption) => {
		setSortValue(selectedOption.value);
	};

	function showMoreResults() {
		setResultsPerPage((prevValue) => prevValue + resultsPerLoad);
	}

	const renderList = React.useMemo(() => {
		if (sortValue === 'popular') {
			return RESULT_DEFAULT.sort((option1, option2) =>
				option1['rating'] > option2['rating'] ? -1 : 1
			);
		} else if (sortValue === 'increase') {
			return RESULT_DEFAULT.sort((option1, option2) =>
				option1['price']['value'] > option2['price']['value'] ? 1 : -1
			);
		} else if (sortValue === 'decrease') {
			return RESULT_DEFAULT.sort((option1, option2) =>
				option1['price']['value'] > option2['price']['value'] ? -1 : 1
			);
		}
	}, [sortValue]);

	React.useEffect(() => {
		if (renderList.length <= resultsPerPage) {
			setIsShowMore(false);
		}
	}, [renderList, resultsPerPage]);

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
					<SelectComponent
						options={OPTIONS_SORT}
						placeholder=""
						mode="sort"
						onChange={handleChange}
					/>
					<ResultCardContainer data={renderList.slice(0, resultsPerPage)} />
					{isShowMore && (
						<Button bgcolor="ghost" mode="more" onClick={showMoreResults}>
							Загрузить ещё
						</Button>
					)}
				</div>
			</Section>
		</main>
	);
}

export default SearchResult;
