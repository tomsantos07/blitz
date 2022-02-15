import './App.css';

function App() {
  return (
    <div className="app--container">
     <div className='register--container'>
       <h1 className="register--title">Raio de Sol</h1>
       <input
       type="text"
       name="name"
       placeholder="Nome do produto"
       className="register--input"
       />
       <input
       type="text"
       name="cost"
       placeholder="Preço"
       className="register--input"
       />
       <input
       type="text"
       name="category"
       placeholder="Categoria"
       className="register--input"
       />
       <button className="register--button">Cadastrar</button>
     </div>
    </div>
  );
}

export default App;
