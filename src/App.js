import React, {useState, useReducer} from "react";
import { MdClear } from "react-icons/md";
import Reducer from "./Reducer";
import Modal from "./Modal";

function App() { 

  const defaultList = 
  {
    items: [],
    hasModal: false,
    modalContent: ''
  }

  const [list, dispatch] = useReducer(Reducer,defaultList);
  const [listEntry, setlistEntry] = useState('');

  function handleSubmit(e){
    e.preventDefault();

    if(listEntry){
      const newEntry = { id: new Date().getTime().toString(), content: listEntry }
      dispatch({type: 'ADD_ITEM' , payload: newEntry })
      setlistEntry('')
    }else{
      dispatch({type: 'NO_ITEM'})
    }
  }

  function hideModal(){
    dispatch({type: 'HIDE_MODAL'})
  }
  return (
    <div className="App">
      <Modal hide={hideModal} message={list.modalContent} isModalOpen={list.hasModal} />

      <h1 className="header">To-do List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          value={listEntry} 
          type='text' 
          onChange={(e) => setlistEntry(e.target.value)}
          className='input'
        />
        <button type='submit' className='input-btn'>Add</button>
      </form>
      <div className="items">
        { list.items.map((item) => {
          return (
            <section key={item.id} className="item">
              <p>{item.content}</p>
              <button 
                className="item-btn" 
                onClick={() => {dispatch({type:'DELETE_ITEM', payload: item.id})}}>
                  <MdClear className="btn-icon"/>
                </button>
            </section>
          )})
        }
      </div>
    </div>
  );
}

export default App;
