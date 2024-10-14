import './todolist.css'
export  default  function Navbars(){
    const menuDrop=()=>{
       
        const bk=window.document.querySelectorAll(".navitems");
        bk.style.display=="none"?bk.style.display="block":bk.style.display="none"
    }
    return(
        <>
        <div className='nav'>
            <div className='logo'>
                Logo
                <button onClick={menuDrop} className='menu'>Menu</button>
            </div>
            <div className='navitems'>
            <a href="/">Home</a>
                
            <a href="/register">Sigup</a>
            <a href="/login">Signin</a>
            </div>

            <div className='navitems'>
                Social Media
            </div>
        </div>
        </>
    )
}