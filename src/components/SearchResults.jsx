import { useParams } from 'react-router-dom';
import showsSearch from '../services/showsSearch.js'
import dataSearch from '../hooks/dataSearch.jsx'
import Loading from './Common/Loading.jsx'
import MainInformation from './ShowComponents/MainInformation.jsx'
import Result from './Result.jsx'

export default function SearchResults() {

  const { name } = useParams()

  const showsInformation = showsSearch(name);

  const { data: showsInfo, 
          loading: loadingShowsInfo, 
          error: errorLoadingShowsInfo } = dataSearch(showsInformation);
  
  if (loadingShowsInfo) return <Loading />

  if (errorLoadingShowsInfo !== '') {
    return alert('Error loading shows information')
  }

  return (
    <div className='searchContainer'>
      {showsInfo.map((showInfo) =>
        <Result 
        key={`show-${showInfo.show.id}`} id={`show-${showInfo.show.id}`}
        showInfo={showInfo.show} />
      )}
    </div>
  )
}