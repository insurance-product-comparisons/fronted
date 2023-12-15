import styles from './Header.module.scss';
import Logo from 'shared/ui/Logo';
import Button from 'shared/ui/Button';
import NavigationBar from 'components/NavigationBar';
import Input from 'shared/ui/Input';
import { useState } from 'react';
import cn from 'classnames';

export function Header() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const headerClass = cn(styles.root, {
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

	// массив ссылок в header
	const arrLinks = [
		{ id: 1, route: '/', text: 'ОСАГО' },
		{ id: 2, route: '/', text: 'КАСКО' },
		{ id: 3, route: '/', text: 'ДМС' },
		{ id: 4, route: '/', text: 'Страховым компаниям' },
	];

	return (
		<header className={headerClass}>
			<Logo mode="main" />

			{!isSearchOpen && (
				<NavigationBar
					data={arrLinks}
					mode="header"
					variant="body1"
					color="black"
				/>
			)}

			<div className={styles['buttons']}>
				<div className={styles['search-block']}>
					{!isSearchOpen && (
						<button
							className={styles['button-search']}
							onClick={openSearch}
						></button>
					)}

					{isSearchOpen && (
						<div className={styles['search-input']}>
							<div className={styles['icon-search']}></div>
							<Input
								name="search"
								type="search"
								placeholder="Поиск по сайту"
								id="search"
								mode="default"
								submode="header"
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
				<Button
					type="Button"
					bgcolor="ghost"
					mode="enter"
					disabled={false}
					onClick
				>
					Войти
				</Button>
			</div>
		</header>
	);
}

export default Header;
