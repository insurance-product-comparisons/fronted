import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { Layout } from 'components';
import {
	Main,
	Osago,
	Kasko,
	Dms,
	Request,
	NotFound,
	SearchResult,
} from 'pages';

function App() {
	const [osagoResult, setOsagoResult] = React.useState([]);

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/osago" element={<Osago />} />
				<Route
					path="/osago/result"
					element={<SearchResult result={osagoResult} />}
				/>
				<Route path="/kasko" element={<Kasko />} />
				<Route path="/dms" element={<Dms />} />
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
