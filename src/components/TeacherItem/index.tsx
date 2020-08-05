import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

// import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
        <img src="https://avatars0.githubusercontent.com/u/6172978?s=460&u=429ed7767e15d8e5202b1ea7f92b585cd5e2294f&v=4" alt="Thiago Demas"/>
      <div>
          <strong>Thiago Demas</strong>
          <span>Informática</span>
      </div>
    </header>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget laoreet mauris. <br></br>
    Integer lacinia, libero vel tincidunt pharetra, velit purus luctus odio, non auctor metus augue vel urna. Ut at lectus nulla. Curabitur euismod at dui a pharetra. Vestibulum imperdiet leo nec nunc ullamcorper, non ultrices sapien lobortis.
    </p>
    <footer>
        <p>
            Preço/hora
            <strong>R$ 80,00</strong>
        </p>

        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
        </button>
    </footer>
</article>
  );
}

export default TeacherItem;