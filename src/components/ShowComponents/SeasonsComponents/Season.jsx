import Episodes from './Episodes.jsx'

export default function Season( { numSeason, showEpi } ) {

  let collapseClassName = "collapse" + numSeason.toString()
  let collapseHref = "#collapse" + numSeason.toString()
  let season = 'Season ' + numSeason.toString()

  const showEpisBySeason = showEpi.filter(epi => epi.season === numSeason);

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button collapsed" data-bs-toggle="collapse" type="button"  href={ collapseHref } aria-expanded="true" aria-controls="collapseTwo">
          { season }
        </button>
      </h2>
      <div id= { collapseClassName } className="accordion-collapse collapse">
        <div className="accordion-body">
          <Episodes key = { `tableOfEpisodesNo-${ numSeason }` }
                    showEpisBySeason = { showEpisBySeason }/>
        </div>
      </div>
    </div>
  )
}