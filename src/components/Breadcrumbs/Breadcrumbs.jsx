import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { CRUMBS } from 'shared/store/breadcrumbs';
import { LinkRouter, Typography } from 'shared/ui';
import { BREADCRUMBS } from 'shared/utils/constants/modes';
import styles from './Breadcrumbs.module.scss';

function Breadcrumbs() {
	const breadcrumbs = useBreadcrumbs(CRUMBS);
	return (
		<div className={styles.root}>
			{breadcrumbs.map(({ match, breadcrumb }) => (
				<LinkRouter
					key={match.pathname}
					route={match.pathname}
					mode={BREADCRUMBS}
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
