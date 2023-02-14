export function Addend(props){
  const handleChange=(event)=>{
    event.preventDefault();
    props.changeValue(event.target.value,props.addend.addendId);
  }
  return (
    <li>
      <select>
        <option>+</option>
        <option>-</option>
      </select>
      <input type="number" value={props.addend.value} onChange={handleChange}/>
      <button>Delete</button>
      <button>Disable</button>
    </li>
  );
}