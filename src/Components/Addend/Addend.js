import {useState} from 'react';

export function Addend(props){
  
  const [operator,setOperator] =useState(props.addend.operator);
  
  const handleChange=(event)=>{
    event.preventDefault();
    const regexp =/[^0-9.]/; //guarda che nella stringa ci siano solo numeri e punti
    const regexp1 = /^0\d/; //controllo che all'inizio della stringa non ci sia un numero che inizia per 0 senza punto 
    const splittedString = event.target.value.split("."); //controllo che nella stringa ci sia un punto soltanto
    if(!(regexp.test(event.target.value) || (splittedString.length > 2) || regexp1.test(event.target.value))){
      props.changeValue(event.target.value,props.addend.addendId);
    }
    
  }
  
  const handleOperator = (event)=>{
    props.changeOperator(event.target.value, props.addend.addendId);
    setOperator(()=>event.target.value);
  }
  
  const handleToggle = ()=>{
    props.toggleOperator(!props.addend.enabled, props.addend.addendId);
  }

  const handleRemove = () =>{
    props.removeOperator(props.addend.addendId);
  }

  return (
    <li>
      <select onChange={handleOperator} defaultValue={operator}>
      <option value="+">+</option>
      <option value="-">-</option>
      </select>
      
      <input type="text" value={props.addend.value} onChange={handleChange}/>
      <button onClick={handleRemove}>Delete</button>
      <button onClick={handleToggle}>{(props.addend.enabled)? "Disable" : "Enable"}</button>
    </li>
  );
}