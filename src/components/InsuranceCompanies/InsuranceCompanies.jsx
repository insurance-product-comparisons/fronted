import React from 'react';
import styles from './InsuranceCompanies.module.scss';
// import cn from 'classnames';

import { Typography, Button } from 'shared/ui';

import { Section } from 'components';

function InsuranceCompanies({
	title,
	description,
	nameButton,
	modeButton,
	disabled,
}) {
	return (
		<Section>
			<div className={styles.container}>
				<Typography variant="h2" color="black">
					{title}
				</Typography>
				<div className={styles['container-description']}>
					<Typography variant="body2" color="black">
						{description}
					</Typography>
				</div>
				<a href="/">
					<Button
						type="button"
						bgcolor="ghost"
						mode={modeButton}
						disabled={disabled}
					>
						{nameButton}
					</Button>
				</a>
			</div>
		</Section>
	);
}

export default InsuranceCompanies;
