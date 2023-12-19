import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { crumbs } from 'shared/store/breadcrumbs';
import { LinkRouter, Typography } from 'shared/ui';
import styles from './Breadcrumbs.module.scss';

function Breadcrumbs() {
	const breadcrumbs = useBreadcrumbs(crumbs);
	return (
		<div className={styles.root}>
			{breadcrumbs.map(({ match, breadcrumb }) => (
				<LinkRouter
					key={match.pathname}
					route={match.pathname}
					mode={'breadscrumbs'}
					text={
						<Typography
							variant={'body2'}
							color={'grey5'}
							children={breadcrumb}
						/>
					}
				/>
			))}
		</div>
	);
}

export default Breadcrumbs;
