import { Sber, Tinkoff, NotFound } from 'pages';
import { SBERBANK, TINKOFF } from 'shared/utils/constants/modes';
import { useParams } from 'react-router-dom';

function CompaniesPage({ result }) {
	let { code } = useParams();

	return code === SBERBANK ? (
		<Sber result={result} />
	) : code === TINKOFF ? (
		<Tinkoff result={result} />
	) : (
		<NotFound />
	);
}

export default CompaniesPage;
