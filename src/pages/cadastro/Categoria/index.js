import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }
  const [novaCategoria, setNovaCategoria] = useState(valoresIniciais)
  const [categorias, setCategorias] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    setCategorias([...categorias, novaCategoria])
    setNovaCategoria(valoresIniciais)
  }

  function setValoresIniciais(chave, valor){
    setNovaCategoria({
      ...novaCategoria,
      [chave]: valor
    })
  }

  function handleChange(values){
    setValoresIniciais(
      values.target.getAttribute('name'), 
      values.target.value
    )
  }

  return (
    <>
      <PageDefault>
        <h1>Cadastro categoria: {novaCategoria.nome}</h1>
        <form onSubmit={e => handleSubmit(e)}>

          <FormField 
        label="Nome da categoria"
        type="text"
        name="nome"
        placeholder="nome"
        value={novaCategoria.nome}
        handleChange={handleChange}
        />

        <FormField 
        label="Descrição"
        type="text"
        name="descricao"
        placeholder="descricao"
        value={novaCategoria.cor}
        handleChange={handleChange}
        />

        <FormField 
        label="Cor da categoria"
        type="color"
        name="cor"
        value={novaCategoria.cor}
        handleChange={handleChange}
        />

          <button>Cadastrar</button>
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
            {categorias.map((categoria, index) =>
              <tr key={`${index} ${categoria}`}>
                <th>{categoria.nome}</th>
                <th>{categoria.descricao}</th>
                <th style={{backgroundColor:categoria.cor}}>{categoria.cor}</th>
              </tr>
            )}
          </tbody>
        </table>

        <Link to="/">
          Ir para home
            </Link>
      </PageDefault>
    </>
  )
}

export default CadastroCategoria
