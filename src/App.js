import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components';
import { Main, Osago, Kasko, Dms, Request, NotFound } from 'pages';

function App() {
	/* @TODO: Создаем глобальные стейты приложения */
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/osago" element={<Osago />} />
				<Route path="/kasko" element={<Kasko />} />
				<Route path="/dms" element={<Dms />} />
				<Route path="/request" element={<Request />} />
				{/* <Route path="/products/:id" element={<Product />} /> Просмотр предложения страхованя */}
				{/* <Route path="/admin" element={<Admin />} /> Панель администратора */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
