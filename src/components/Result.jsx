import { Link } from 'react-router-dom';
import MainInformation from './ShowComponents/MainInformation.jsx'

export default function Result( {showInfo} ) {

  return(
    <div key={`show-${showInfo.id}`} id={`show-${showInfo.id}`}
      className='d-flex flex-column justify-content-center align-items-center'>
      <MainInformation showInfo={showInfo} />
      <Link className="text-decoration-none" to={`/../show/${showInfo.id}`}>
        <button className="searchbtn ms-3 align-self-center" type="submit">
          Show more info!
        </button>
      </Link>
      <hr/>
    </div>
  )
}