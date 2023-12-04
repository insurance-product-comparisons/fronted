import styles from './Layout.module.scss';
import Header from 'components/Header';
import Footer from 'components/Footer';

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
