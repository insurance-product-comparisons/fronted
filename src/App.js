import { Routes, Route } from 'react-router-dom';
import { Main, Osago, Kasko, Dms, Request } from 'pages';

function App() {
	/* @TODO: Создаем глобальные стейты приложения */
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/osago" element={<Osago />} />
			<Route path="/kasko" element={<Kasko />} />
			<Route path="/dms" element={<Dms />} />
			<Route path="/request" element={<Request />} />
			{/* <Route path="/products/:id" element={<Product />} /> Просмотр предложения страхованя */}
			{/* <Route path="/admin" element={<Admin />} /> Панель администратора */}
		</Routes>
	);
}

export default App;
