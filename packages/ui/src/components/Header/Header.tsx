import cn from 'clsx';
import React, { PropsWithChildren } from 'react';
import { NavLink } from 'react-router-dom';
import { useUIConfig } from '../../hooks/useUIConfig';
import { getStaticPath } from '../../utils/getStaticPath';
import { useSidebar } from '../../context/SidebarContext';
import { Button } from '../Button/Button';
import s from './Header.module.css';

export const Header = ({ children }: PropsWithChildren<any>) => {
	const uiConfig = useUIConfig();
	const logoPath = uiConfig.boardLogo?.path ?? getStaticPath('/images/logo.svg');
	const boardTitle = uiConfig.boardTitle ?? 'Bull Dashboard';
	const { toggleSidebar } = useSidebar();

	return (
		<header className={s.header}>
			<Button id="toggle-sidebar" className={s.toggleButton} onClick={toggleSidebar}>
				☰
			</Button>
			<NavLink to="/" className={s.logo}>
				{!!logoPath && (
					<img
						src={logoPath}
						className={cn(s.img, { [s.default]: !uiConfig.boardLogo })}
						width={uiConfig.boardLogo?.width}
						height={uiConfig.boardLogo?.height}
						alt={boardTitle}
					/>
				)}
				<span className={s.boardTitle}>{boardTitle}</span>
			</NavLink>
			<div className={s.content}>{children}</div>
		</header>
	);
};
