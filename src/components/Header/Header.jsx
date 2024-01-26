import Logo from 'shared/ui/Logo';
import Button from 'shared/ui/Button';
import { NavigationBar, Section } from 'components';
import Input from 'shared/ui/Input';
import { useState } from 'react';
import cn from 'classnames';
import { HEADER, MAIN, ENTER } from 'shared/utils/constants/modes';
import { HEADER_LINKS } from 'shared/store/links';
import ScrollToTop from 'shared/utils/handlers/scrolltop';
import { Typography } from 'shared/ui';
import styles from './Header.module.scss';

export function Header() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [isMenuOpen, setIsMenuOpen] = useState(false);

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

	// отслеживание информации в кнопке меню
	const handleClickMenuButton = () => {
		setIsMenuOpen((current) => !current);
	};

	return (
		<header className={styles.root}>
			<Section>
				<div className={headerClass}>
					<Logo mode={MAIN} />

					<div className={styles.container}>
						<Button
							type="button"
							bgcolor="ghost"
							mode="menu"
							submode={isMenuOpen ? 'activated' : ''}
							onClick={handleClickMenuButton}
						></Button>
						<div
							className={cn(
								styles.mobileMenu,
								isMenuOpen ? styles['mobileMenu-active'] : ''
							)}
						>
							{!isMenuOpen ? (
								!isSearchOpen && (
									<NavigationBar
										data={HEADER_LINKS}
										mode={HEADER}
										variant="body1"
										color="black"
									/>
								)
							) : (
								<NavigationBar
									data={HEADER_LINKS}
									mode={HEADER}
									variant="body1"
									color="black"
									onClick={handleClickMenuButton}
								/>
							)}
							<div className={styles['search-block']}>
								{!isSearchOpen ? (
									<button
										className={styles['button-search']}
										onClick={openSearch}
									>
										<Typography
											variant="search"
											color="black"
											children="Поиск по сайту"
										/>
									</button>
								) : (
									<div className={styles['search-input']}>
										<div className={styles['icon-search']}></div>
										<Input
											name="search"
											type="text"
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
						</div>
						<Button type="Button" bgcolor="ghost" mode={ENTER} disabled={false}>
							Войти
						</Button>
					</div>
				</div>
				<ScrollToTop />
			</Section>
		</header>
	);
}

export default Header;
