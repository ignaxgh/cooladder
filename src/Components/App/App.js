import {useState} from 'react';
import './App.css';
import { Addend } from '../Addend/Addend';

function App() {


  const [addends, setAddends] = useState([{
    addendId: 0,
    operator: "+",
    value: "0",
    enabled: true,
  }]);

  const handleAdd = ()=>{
    setAddends((prev)=>{
      let newId = 0;
      if(prev.length !== 0){
        newId = prev.length;
      }
      return [...prev,{
        addendId: newId,
        operator: "+",
        value:"0",
        enabled: true,
      }];
    });
  };

  const changeValue=(newValue,id)=>{
    const newAddends = addends.map((addend)=>{
      if(addend.addendId===id){
        return {
          addendId: addend.addendId,
          operator: addend.operator,
          value: newValue,
          enabled: addend.enabled,
        };
      }else{
        return addend;
      }
    });
    setAddends(()=>newAddends);
  }

  const changeOperator=(newOperator, id) =>{
    const newAddends = addends.map((addend)=>{
      if(addend.addendId===id){
        return {
          addendId: addend.addendId,
          operator: newOperator,
          value: addend.value,
          enabled: addend.enabled,
        };
      }else{
        return addend;
      }
    });
    setAddends(()=>newAddends);
  }

  return (
    <div className="App">
      <header>
        <h1><span className="coolBlue">Cool</span>Adder, a cool and simple React adder</h1>
      </header>
      <article className="App-article">
        <ul>
          {addends.map((current)=>(
            <Addend key={current.addendId} addend={current} changeValue={changeValue} changeOperator={changeOperator}/>
          ))}
        </ul>
        <button onClick={handleAdd}>Add row</button>
        <h2>Result: {addends.reduce((sum, currentOperator)=>{
          if(currentOperator.operator==="+"){
            return sum+Number(currentOperator.value);
          } else {
            return sum-Number(currentOperator.value);
          }
        },0)}</h2>
      </article>
    </div>
  );
}

export default App;
