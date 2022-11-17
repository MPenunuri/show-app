import Episode from './Episode.jsx'

export default function Episodes( { showEpisBySeason } ) {

  let idsOfEpisodes = []

  showEpisBySeason.forEach((epi) => {
    idsOfEpisodes.push(epi.id);
  });
  
  let epiId = 0;

  return (
    <table className="table table-sm table-hover align-middle">
      <thead>
        <tr>
          <th className='epiVar' scope="col">#</th>
          <th className='epiVar' scope="col">Name</th>
          <th className='epiVar' scope="col">Rating</th>
          <th className='epiVar' scope="col">Image</th>
        </tr>
      </thead>
      <tbody>
        {idsOfEpisodes.map((id) => 
          <Episode key = { `episode-${epiId += 1}` }
                   epiId = { epiId + 1}
                   id = { id } 
                   showEpisBySeason = { showEpisBySeason }/> )}
      </tbody>
    </table>
  );
}