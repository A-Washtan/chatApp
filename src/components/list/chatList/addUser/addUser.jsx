import  './addUser.css'

function AddUser() {
  return (
    <div className='addUser'>
      <form>
        <input type="text" placeholder='اسم المستخدم' name='username' />
        <button >البحث</button>
      </form>
      <div className="user">
        <div className="detail">
            <img src="./avatar.png" alt="" />
            <span>Washtan</span>
        </div>
        <button>اضافة مستخدم</button>
      </div>
    </div>
  )
}

export default AddUser
