import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { Layout } from 'components';
import { useNavigate } from 'react-router-dom';
import {
	Main,
	Osago,
	Kasko,
	Dms,
	Request,
	NotFound,
	SearchResult,
	CompaniesPage,
} from 'pages';

function App() {
	const [osagoResult, setOsagoResult] = React.useState([]);
	const [kaskoResult, setKaskoResult] = React.useState([]);
	const [dmsResult, setDmsResult] = React.useState([]);

	const navigate = useNavigate();

	function handleOsagoSearch(result) {
		setOsagoResult(result);
		navigate('/osago/result');
	}

	function handleKaskoSearch(result) {
		setKaskoResult(result);
		navigate('/kasko/result');
	}

	function handleDmsSearch(result) {
		setDmsResult(result);
		navigate('/dms/result');
	}

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/osago" element={<Osago onSearch={handleOsagoSearch} />} />
				<Route
					path="/osago/result"
					element={<SearchResult result={osagoResult} />}
				/>
				<Route path="/osago/result/:code" element={<CompaniesPage />} />

				<Route path="/kasko" element={<Kasko onSearch={handleKaskoSearch} />} />
				<Route
					path="/kasko/result"
					element={<SearchResult result={kaskoResult} />}
				/>
				<Route path="/dms" element={<Dms onSearch={handleDmsSearch} />} />
				<Route
					path="/dms/result"
					element={<SearchResult result={dmsResult} />}
				/>
				<Route path="/request" element={<Request />} />
				{/* <Route path="/products/:id" element={<Product />} /> Просмотр предложения страхованя */}
				{/* <Route path="/admin" element={<Admin />} /> Панель администратора */}
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</Layout>
	);
}

export default App;
