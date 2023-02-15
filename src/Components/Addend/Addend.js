import {useState} from 'react';

export function Addend(props){
  const [operator,setOperator] =useState(props.addend.operator);
  const handleChange=(event)=>{
    event.preventDefault();
    props.changeValue(event.target.value,props.addend.addendId);
  }
  
  const handleOperator = (event)=>{
    props.changeOperator(event.target.value, props.addend.addendId);
    setOperator(()=>event.target.value);
  }
  
  const handleToggle = ()=>{
    props.toggleOperator(!props.addend.enabled, props.addend.addendId);
  }
  return (
    <li>
      <select onChange={handleOperator} defaultValue={operator}>
      <option value="+">+</option>
      <option value="-">-</option>
      </select>
      
      <input type="text" value={props.addend.value} onChange={handleChange}/>
      <button>Delete</button>
      <button onClick={handleToggle}>{(props.addend.enabled)? "Disable" : "Enable"}</button>
    </li>
  );
}