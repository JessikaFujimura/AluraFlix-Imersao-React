import React from 'react';
import Menu from './components/Menu'
import Footer from './components/Footer'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Data from './data/dados_iniciais.json'

function App() {
  return (
    <>
      <Menu />

      <BannerMain 
        videoTitle="O que faz uma desenvolvedora front-end? #HipstersPontoTube"
        videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
        url="https://www.youtube.com/watch?v=ZY3-MFxVdEw&feature=emb_title"
      />

      {Data.categorias.map(i => <Carousel 
      ignoreFirstVideo="true"
      category = {i}
      />)}

      <Footer />
    </>
  );
}

export default App;
