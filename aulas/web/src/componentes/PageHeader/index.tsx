import React, { FC } from 'react';

import { Link } from 'react-router-dom';

// imagens
import backIcon from '../../assests/images/icons/back.svg'
import logoImg from '../../assests/images/logo.svg'

import './style.css'

interface PageHeaderProps {
	title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props ) =>  {

	return (
		<header className="page-header">
			<div className="top-bar-container">
				<Link to="/">
					<img src={backIcon} alt="voltar"/>
				</Link>
				<img src={logoImg} alt="logo proffy"/>
			</div>

			<div className="header-content">
				<strong>
					{props.title}
				</strong>
				{props.children}
			</div>
		</header>

	);


}


export default PageHeader
