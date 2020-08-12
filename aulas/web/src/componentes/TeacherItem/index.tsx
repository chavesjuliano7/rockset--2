import React from 'react';

import WhatsappIcon from '../../assests/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem ( ) {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://avatars1.githubusercontent.com/u/3664022?s=460&u=0756f981473df7a69ce2f1ae7ceba65f438f1aa3&v=4" alt="foto do marcelo pereira"/>
				<div>
					<strong>Marcelo Pererira</strong>
						<span>Química</span>
				</div>
			</header>

			<p>Entusiasta das melhores tecnologias de química avançada.<br/><br/>
			Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
			</p>

			<footer>
				<p>
					Preço/hora
					<strong>
						R$ 80,00
					</strong>
				</p>
				<button type='button'>
					<img src={WhatsappIcon} alt="icone do whataspp"/>
					Entrar em contato
				</button>
			</footer>
		</article>
	)
}

export default TeacherItem
