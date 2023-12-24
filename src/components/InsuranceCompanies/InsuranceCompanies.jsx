import React from 'react';
import { Typography, Button } from 'shared/ui';
import styles from './InsuranceCompanies.module.scss';

function InsuranceCompanies({ nameButton, modeButton, data }) {
	return (
		<>
			<div className={styles.container}>
				<Typography variant="h2" color="black">
					{data.title}
				</Typography>
				<div className={styles['container-description']}>
					<Typography variant="body2" color="black">
						{data.description}
					</Typography>
				</div>
				<a href="/">
					<Button type="button" bgcolor="ghost" mode={modeButton}>
						{nameButton}
					</Button>
				</a>
			</div>
		</>
	);
}

export default InsuranceCompanies;
