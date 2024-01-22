import {
	Section,
	Breadcrumbs,
	ResultCardContainer,
	SearchNotFound,
} from 'components';
import React from 'react';
import { Typography, SelectComponent, Button } from 'shared/ui';
import { OPTIONS_SORT } from 'shared/store/sortOptions';
import styles from './SearchResult.module.scss';

function SearchResult({ result }) {
	const [sortValue, setSortValue] = React.useState('popular');
	const [isShowMore, setIsShowMore] = React.useState(true);
	const [isResult, setIsResult] = React.useState(false);
	const [resultsPerPage, setResultsPerPage] = React.useState(5);
	const [resultsPerLoad] = React.useState(3);

	const handleChange = (selectedOption) => {
		setSortValue(selectedOption.value);
	};

	function showMoreResults() {
		setResultsPerPage((prevValue) => prevValue + resultsPerLoad);
	}

	const renderList = React.useMemo(() => {
		switch (sortValue) {
			case 'increase':
				return result.sort((option1, option2) =>
					option1['price']['value'] > option2['price']['value'] ? 1 : -1
				);
			case 'decrease':
				return result.sort((option1, option2) =>
					option1['price']['value'] > option2['price']['value'] ? -1 : 1
				);
			default:
				return result.sort((option1, option2) =>
					option1['rating'] > option2['rating'] ? -1 : 1
				);
		}
	}, [sortValue, result]);

	React.useEffect(() => {
		if (renderList.length <= resultsPerPage) {
			setIsShowMore(false);
		}
	}, [renderList, resultsPerPage]);

	React.useEffect(() => {
		setIsResult(result.length !== 0);
	}, [result]);

	return (
		<main className={styles.root}>
			<Section>
				<Breadcrumbs />
			</Section>
			{isResult && (
				<>
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
				</>
			)}
			{!isResult && (
				<Section>
					<SearchNotFound />
				</Section>
			)}
		</main>
	);
}

export default SearchResult;
