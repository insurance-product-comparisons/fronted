import { Sber, Tinkoff, Vsk, NotFound } from 'pages';
import { SBERBANK, TINKOFF, VSK } from 'shared/utils/constants/modes';
import { useParams } from 'react-router-dom';

function CompaniesPage({ result }) {
	let { code } = useParams();

	switch (code) {
		case SBERBANK:
			return <Sber result={result} />;
		case TINKOFF:
			return <Tinkoff result={result} />;
		case VSK:
			return <Vsk result={result} />;
		default:
			return <NotFound />;
	}
}

export default CompaniesPage;
