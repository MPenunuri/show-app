import Table from './Table.jsx'
import Summary from './Summary.jsx'
import NoSummary from './NoSummary.jsx'
import '../../styles/index.css'

export default function MainInformation( { showInfo } ){

  const { name, image, summary, network, country, 
          status, genres, schedule, rating } = showInfo;

  const imgNotFound = '../../../public/Image-Not-Found.svg'
          
  return (
    <>
      <h1 className="ms-5 me-5 mt-3 mb-3 text-center">{name}</h1>
      <div className="d-flex flex-column flex-lg-row ms-5 me-5 mt-3 mb-3 flex-shrink-1
      justify-content-center align-items-center"
      id='main-div'>
        <img src={image === null ? imgNotFound : image.medium} 
             alt="example" className='ms-5 me-5 mt-1 mb-1 rounded'/>
        {summary === null ? <NoSummary /> : <Summary summary={summary}/> }
        <Table network={network} country={country} status={status} 
               genres={genres} schedule={schedule} rating={rating}/>
      </div>
    </>
  ); 
}