import { Section, NavigationBar } from 'components';
import { Logo, Typography, List, ListItem, LinkComponent } from 'shared/ui';
import {
	FOOTER_NAVIGATION,
	FOOTER_CONTACTS,
	FOOTER_DOCUMENTS,
} from 'shared/store/links';
import { FOOTER } from 'shared/utils/constants/modes';
import styles from './Footer.module.scss';

function Footer() {
	return (
		<footer className={styles.root}>
			<Section>
				<div className={styles.columns}>
					<div className={styles.column}>
						<Logo mode="main" />
					</div>
					<div className={styles.column}>
						<Typography variant="body1" color="grey5">
							Меню
						</Typography>
						<NavigationBar
							data={FOOTER_NAVIGATION}
							mode={FOOTER}
							variant="body2"
							color="grey5"
						/>
					</div>
					<div className={styles.column}>
						<Typography variant="body1" color="grey5">
							Контакты
						</Typography>

						<List mode={FOOTER}>
							{FOOTER_CONTACTS.map((contact) => (
								<ListItem key={contact.id}>
									<Typography variant="body2" color="grey5">
										<LinkComponent
											link={contact.link}
											text={contact.text}
											mode={FOOTER}
										/>
									</Typography>
								</ListItem>
							))}
						</List>
					</div>
					<div className={styles.column}>
						<Typography variant="body1" color="grey5">
							Документы
						</Typography>

						<List mode={FOOTER}>
							{FOOTER_DOCUMENTS.map((document) => (
								<ListItem key={document.id}>
									<Typography variant="body2" color="grey5">
										<LinkComponent
											link={document.link}
											text={document.text}
											mode={'footer'}
										/>
									</Typography>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</Section>
		</footer>
	);
}

export default Footer;
