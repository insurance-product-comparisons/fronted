import logo from 'images/logo.svg';
import styles from './Main.module.scss';

function Main() {
	return (
		<>
			<img src={logo} alt="test" />
			<div className={styles.test}></div>
		</>
	);
}

export default Main;
