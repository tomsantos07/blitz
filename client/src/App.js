import React, { useState, useEffect } from "react";
import './App.css';

import Axios from 'axios';
import Card from './components/cards/card';

function App() {
  const [values, setValues] = useState();
  const [listProducts, setListProducts] = useState();
  
  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };
  
  // O botão ao ser clicado vai enviar o request pra enviar os dados pro banco de dados
  // Após fazer a requisição, vai mandar os dados pro BD pra cadastrar os produtos (por objeto)
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register",{
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then(() => {
      setListProducts([
        ...listProducts,
        {
          name: values.name,
          cost: values.cost,
          category: values.category,
        }
      ])
    });
  }

  // Sempre que o app for aberto, queremos pegar os dados do BD - "efeitos colaterais"
  useEffect(() => {
    Axios.get("http://localhost:3001/getCards")
    .then((response) => {
      // Sempre que o app for renderizado o getCards vai dar o:
      setListProducts(response.data);


    })
  }, [])

  return (
    <div className="app--container">
     <div className='register--container'>
       <h1 className="register--title">Raio de Sol</h1>

       <input
       type="text"
       name="name"
       placeholder="Nome do produto"
       className="register--input"
       onChange={handleChangeValues}
       />

       <input
       type="text"
       name="cost"
       placeholder="Preço"
       className="register--input"
       onChange={handleChangeValues}
       />

       <input
       type="text"
       name="category"
       placeholder="Categoria"
       className="register--input"
       onChange={handleChangeValues}
       />

       <button
       className="register--button"
       onClick={
         () => handleClickButton()
        }
       >
         Cadastrar
       </button>
     </div>
     {/* Só quando o useEffect carregar */}
     {typeof listProducts !== "undefined" &&
      listProducts.map((value) => {
       return <Card
        key={ value.id }
        listCard={ listProducts }
        setListCard ={ setListProducts }
        id={ value.idproducts }
        name={ value.name }
        cost={ value.cost }
        category={ value.category }

        ></Card>
     })}
    </div>
  );
}

export default App;
