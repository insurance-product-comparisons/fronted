import { Sber, Tinkoff, NotFound } from 'pages';
import { SBERBANK, TINKOFF } from 'shared/utils/constants/modes';
import { useParams } from 'react-router-dom';

function CompaniesPage() {
	let { code } = useParams();

	return code === SBERBANK ? (
		<Sber />
	) : code === TINKOFF ? (
		<Tinkoff />
	) : (
		<NotFound />
	);
}

export default CompaniesPage;
