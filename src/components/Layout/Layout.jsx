import styles from './Layout.module.scss';
import { Header, Footer } from 'components';

export function Layout({ children }) {
	return (
		<div className={styles.root}>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default Layout;
