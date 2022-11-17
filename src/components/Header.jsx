import { useNavigate, Link } from "react-router-dom";
import  routeChange  from '../services/routeChange.js'

export default function Header() {
  
  const navigate = useNavigate();

  const changeRoute = () =>{
    const input = document.getElementById('input'); 
    let path = `search/${input.value}`; 
    navigate(path);
  }

  return (
    <nav className="fixed-top">
      <div className="d-flex flex-column flex-md-row 
                      justify-content-center align-items-center 
                      pt-2 pb-2">
        <Link to="/"
        className="d-flex justify-content-center align-items-center text-decoration-none">
          <h1 className="navBarText m-2 me-4">What show are you looking for?</h1>
        </Link>
        <div className="d-flex justify-content-center align-items-center">
          <input id='input' type="search" 
                 placeholder="Type a show name" aria-label="Search"/>
          <button className="searchbtn ms-3" onClick={changeRoute}
                  type="submit">Search</button>
        </div>
      </div>
    </nav>
  )
}