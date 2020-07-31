import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  useEffect(() => {
    const Url = 'http://localhost:8080/categorias';
    fetch(Url)
      .then(async (response) => {
        const resp = await response.json();
        return resp;
      })
      .then((data) => setCategorias([...data]));
  }, []);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [novaCategoria, setNovaCategoria] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, novaCategoria]);
    setNovaCategoria(valoresIniciais);
  }

  function setValoresIniciais(chave, valor) {
    setNovaCategoria({
      ...novaCategoria,
      [chave]: valor,
    });
  }

  function handleChange(values) {
    setValoresIniciais(
      values.target.getAttribute('name'),
      values.target.value,
    );
  }

  return (
    <>
      <PageDefault>
        <h1>
          Cadastro categoria:
          {
          novaCategoria.nome
          }
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>

          <FormField
            label="Nome da categoria"
            type="text"
            name="nome"
            value={novaCategoria.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="textarea"
            name="descricao"
            value={novaCategoria.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor da categoria"
            type="color"
            name="cor"
            value={novaCategoria.cor}
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>

          {categorias.length === 0 && <p>Loading...</p>}
        </form>
        <table>
          <thead>
            <tr>
              <th>
                Nome
              </th>
              <th>
                Descricao
              </th>
              <th>
                Cor
              </th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria, index) => (
              <tr key={`${index} ${categoria}`}>
                <th>{categoria.nome}</th>
                <th>{categoria.descricao}</th>
                <th style={{ backgroundColor: categoria.cor }}>{categoria.cor}</th>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
