import { useState } from 'react'
import './App.css'

function App() {
const [tarefas, setTarefas] = useState ('')
const [quantidade, setQuantidade] = useState (0)
const [array, setArray] = useState ([])
const handleClick2 = () =>{
  setArray([])
  setQuantidade(0)
}
const handleClick = () =>{
  setTarefas('')
  if(tarefas === ''){
    return
  }
  else{
  setQuantidade(quantidade + 1)
  setArray([... array , tarefas])
}
}
const handleChange = (e) => {
  setTarefas(e.target.value)
}
  return (
<div>
  <h2>Lista de Tarefas</h2>
  <div>
    <button onClick={handleClick2}>Reiniciar</button>
    <input type="text" 
    value={tarefas}
    onChange={handleChange}/>
  <button onClick={handleClick}>Adicionar</button>
  <p>Foram adicionados {quantidade} tarefa</p>
  </div>
  {array.map((item , index) =>(<p key={index}>{item}</p>))}
  
  

</div>
  )
}

export default App
