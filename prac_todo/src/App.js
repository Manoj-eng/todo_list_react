import React , {useState} from 'react'
import './App.css';

function App() {

  const[Initial, setInitial] = useState();
  const[Items, setItems] = useState([]);

  const showTypedValue = (event) => {
      setInitial(event.target.value)
  }

  const showValuesOnScreen = () =>{
    setItems((myitems) => {
        return[...myitems , Initial];
    });
    setInitial("");
  }

  const deleteAnItem = () =>{
      console.log("deleted")
  }


  return (
  <div className="maindiv">
    <div className="centerdiv">
      <input 
      type="text"
      placeholder="add an item"
      onChange={showTypedValue}
      value = {Initial}
      />

      <br />
      <button onClick={showValuesOnScreen}>Add an Item</button>
      <button onClick={deleteAnItem}>-</button>
      <ol>
          { Items.map((myitems) => {
        return <li>{myitems}</li>
      }
      )}
      </ol>
     

    </div>
  </div>
  );
}

export default App;
