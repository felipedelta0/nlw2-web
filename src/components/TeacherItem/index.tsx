import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img 
          src="https://avatars1.githubusercontent.com/u/10116449?s=460&u=aec8cb2ef606eb04426f0bb5d53f0291b4b38ecf&v=4" 
          alt="Luis Felipe Alcântara dos Santos"
        />
        <div>
          <strong>Luis Felipe Alcântara dos Santos</strong>
          <span>Tecnologia</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem ipsam nihil! 
        <br/><br/>
        Molestias ad laborum nobis est nihil eos fuga autem excepturi, ducimus voluptas numquam adipisci voluptatem unde quia natus?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem