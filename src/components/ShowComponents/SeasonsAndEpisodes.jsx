import Seasons from './SeasonsComponents/Seasons.jsx'
import NoData from './NoData.jsx'

export default function SeasonsAndEpisodes( { showEpi } ) {

  return (
    <>
      <h4 className="ms-4 mt-4">Seasons and episodes</h4>
      <div className="accordion m-3">
        {showEpi.length <= 0 ? <NoData /> : <Seasons showEpi={showEpi}/>}
      </div>
    </>
  );
}