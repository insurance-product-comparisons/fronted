import styles from './Section.module.scss';

export function Section({ children }) {
	return <section className={styles.root}>{children}</section>;
}

export default Section;
