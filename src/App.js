import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header>
        <img className='hero' src="./eder.jpg" alt='Foto perfil' />
        <h2 id='title'>Eder Soares Sena</h2>
        <hr/>
      </header>
      <section>
        <header>
          <h2 className='subtitle'>Posts</h2>
        </header>
        <article className='post'>
          <header>
            <h3 className='post_title'>Post #1 - Beneficios do poder de luta do Karatoto</h3>
            <hr/>
          </header>
          <img className='article_img' src="./programacao.jpg" alt='Foto perfil' />
          <p className='post_content'>
            <h4 className='post_title_2'>
            <a href='https://github.com/' target='_blank' rel="noreferrer">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a><br></br>
            <a href="mailto:eder.sena@live.com" target="_blank" rel="noreferrer">eder.sena@live.com</a><br></br>
            </h4>
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </article>
      </section>
      <footer>
        <ul className='contact_list'>
          <li>
            <a href="mailto:eder.sena@live.com" 
              target='_blank'
              rel="noreferrer">eder.sena@live.com</a>
          </li>
          <li>
            <a href="https://github.com/ederusena/"
              target='_blank'
              rel="noreferrer">github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/edersena/"
              target='_blank'
              rel="noreferrer">linkedin</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
