import { Sber, Tinkoff, NotFound } from 'pages';
import { SBERBANK, TINKOFF } from 'shared/utils/constants/modes';
import { useParams } from 'react-router-dom';

function CompaniesPage({ result }) {
	let { code } = useParams();

	switch (code) {
		case SBERBANK:
			return <Sber result={result} />;
		case TINKOFF:
			return <Tinkoff result={result} />;
		default:
			return <NotFound />;
	}
}

export default CompaniesPage;
