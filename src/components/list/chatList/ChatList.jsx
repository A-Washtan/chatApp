import { useState } from 'react'
import './chatList.css'
import AddUser from './addUser/addUser'

function ChatList() {
  const  [addMode,setAddMode] = useState(false)
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="/search.png" alt="" />
          <input type="text" placeholder='Search'/>
        </div>
        <img 
        src={addMode ? "./minus.png" : "./plus.png"}
         className='add' alt=""
         onClick={()=> setAddMode((prev) => !prev)} />
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Washtan</span>
          <p>مرحبا</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Washtan</span>
          <p>مرحبا</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Washtan</span>
          <p>مرحبا</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Washtan</span>
          <p>مرحبا</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Washtan</span>
          <p>مرحبا</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Washtan</span>
          <p>مرحبا</p>
        </div>
      </div>
     {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList
