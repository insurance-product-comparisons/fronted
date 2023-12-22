import Logo from 'shared/ui/Logo';
import Button from 'shared/ui/Button';
import { NavigationBar, Section } from 'components';
import Input from 'shared/ui/Input';
import { useState } from 'react';
import cn from 'classnames';
import { HEADER, MAIN, ENTER } from 'shared/utils/constants/modes';
import { HEADER_LINKS } from 'shared/store/links';
import styles from './Header.module.scss';

export function Header() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const headerClass = cn(styles.menu, {
		[styles['header-search']]: isSearchOpen,
	});

	const openSearch = () => {
		setIsSearchOpen(true);
	};

	const closeSearch = () => {
		setIsSearchOpen(false);
		setSearchValue('');
	};

	// отслеживание информации в инпуте
	const handleInputChange = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<header className={styles.root}>
			<Section>
				<div className={headerClass}>
					<Logo mode={MAIN} />

					{!isSearchOpen && (
						<NavigationBar
							data={HEADER_LINKS}
							mode={HEADER}
							variant="body1"
							color="black"
						/>
					)}

					<div className={styles['buttons']}>
						<div className={styles['search-block']}>
							{!isSearchOpen ? (
								<button
									className={styles['button-search']}
									onClick={openSearch}
								></button>
							) : (
								<div className={styles['search-input']}>
									<div className={styles['icon-search']}></div>
									<Input
										name="search"
										type="search"
										placeholder="Поиск по сайту"
										id="search"
										submode={HEADER}
										isValid={true}
										isDisabled={false}
										value={searchValue}
										onChange={handleInputChange}
									/>
									<button
										className={styles['icon-close']}
										onClick={closeSearch}
									></button>
								</div>
							)}
						</div>
						<Button type="Button" bgcolor="ghost" mode={ENTER} disabled={false}>
							Войти
						</Button>
					</div>
				</div>
			</Section>
		</header>
	);
}

export default Header;
