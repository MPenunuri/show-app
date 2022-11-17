import GridOfPersons from './CastComponents/GridOfPersons.jsx'
import NoData from './NoData.jsx'

export default function Cast( { showCast } ) {

  return (
    <>
    <h4 className="ms-4 mt-4">Cast</h4>
    <div className="accordion m-3">
      {showCast .length <= 0 ? <NoData /> : <GridOfPersons showCast={showCast}/>}
    </div>
    </>
  );
}