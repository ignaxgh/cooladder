import {useState} from 'react';
import './App.css';
import { Addend } from '../Addend/Addend';
import { generateId } from '../../Utilities/utilities';

function App() {


  const [addends, setAddends] = useState([{
    addendId: 0,
    operator: "+",
    value: "0",
    enabled: true,
  }]);

  const handleAdd = ()=>{
    let newId = generateId();
    setAddends((prev)=>
        [...prev,{
        addendId: newId,
        operator: "+",
        value:"0",
        enabled: true,
      }]
    );
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
  };

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
  };

  const toggleOperator=(newToggle,id)=>{
    const newAddends = addends.map((addend)=>{
      if(addend.addendId===id){
        return {
          addendId: addend.addendId,
          operator: addend.operator,
          value: addend.value,
          enabled: newToggle,
        };
      }else{
        return addend;
      }
    });
    setAddends(()=>newAddends);
  };

  const removeOperator= (id)=>{
    const newAddends = addends.filter(({addendId})=>addendId !==id);
    setAddends(()=>newAddends);
  }

  return (
    <div className="App">
      <header>
        <h1><span className="coolBlue">Cool</span>Adder, a simple React adder</h1>
      </header>
      <article className="App-article">
        <ul>
          {addends.map((current)=>(
            <Addend key={current.addendId} addend={current} changeValue={changeValue} changeOperator={changeOperator} toggleOperator={toggleOperator} removeOperator={removeOperator}/>
          ))}
        </ul>
        <button onClick={handleAdd}>Add row</button>
        <h2>Result: {addends.filter(({enabled})=>enabled).reduce((sum, currentOperator)=>{
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
