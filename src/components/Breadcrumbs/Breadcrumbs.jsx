import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { CRUMBS } from 'shared/store/breadcrumbs';
import { LinkRouter, Typography } from 'shared/ui';
import classNames from 'classnames';
import { BREADCRUMBS, DEFAULT } from 'shared/utils/constants/modes';
import useWidth from 'shared/hooks/useWidth';
import styles from './Breadcrumbs.module.scss';

function Breadcrumbs({ mode = DEFAULT }) {
	const windowWidth = useWidth();

	const breadcrumbs = useBreadcrumbs(CRUMBS);
	const breadcrumbsClass = classNames(styles.root, styles[mode]);
	return (
		<div className={breadcrumbsClass}>
			{breadcrumbs.map(({ match, breadcrumb }) => (
				<LinkRouter
					key={match.pathname}
					route={match.pathname}
					mode={BREADCRUMBS}
					text={
						<Typography
							variant={windowWidth > 1024 ? 'body2' : 'mob2'}
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
