
import { useParams } from 'react-router-dom';
import MainInformation from './ShowComponents/MainInformation.jsx'
import SeasonsAndEpisodes from './ShowComponents/SeasonsAndEpisodes.jsx'
import Cast from './ShowComponents/Cast.jsx'
import getShowInformation from '../services/getShowInformation.js'
import getShowEpisodes from '../services/getShowEpisodes.js'
import getShowCast from '../services/getShowCast.js'
import dataSearch from '../hooks/dataSearch.jsx'
import Loading from './Common/Loading.jsx'

export default function Show() {

  const { id } = useParams()

  const showInformation = getShowInformation(id);
  const showEspisodes = getShowEpisodes(id);
  const showActorsAndActresses = getShowCast(id);

  const { data: showInfo, 
          loading: loadingShowInfo, 
          error: errorLoadingShowInfo } = dataSearch(showInformation);

  const { data: showEpi, 
          loading: loadingShowEpisodes, 
          error: errorloadingShowEpisodes } = dataSearch(showEspisodes);

  const { data: showCast, 
          loading: loadingShowCast, 
          error: errorloadingShowCast } = dataSearch(showActorsAndActresses);

  if (loadingShowInfo) return <Loading />
  if (loadingShowEpisodes) return <Loading />
  if (loadingShowCast) return <Loading />

  if (errorLoadingShowInfo !== '') {
      return alert('Error loading show information')
  }

  if (errorloadingShowEpisodes !== '') {
    return alert('Error loading show espisodes')
  }

  if (errorloadingShowCast !== '') {
    return alert('Error loading show cast')
  }

  return (
    <div className='showContainer'>
      <MainInformation showInfo={showInfo} />
      <SeasonsAndEpisodes showEpi={showEpi}/>
      <Cast showCast={showCast}/>
    </div>
  )
}