import Season from './Season.jsx'

export default function Seasons( { showEpi } ) {

  let seasonsPerEpisode = []

  showEpi.forEach((epi) => {
    seasonsPerEpisode.push(epi.season);
  });

  const seasons = [...new Set(seasonsPerEpisode)];

  return (
    <>
      {seasons.map((numSeason) => 
      <Season key={`season-${numSeason}`} 
              numSeason={numSeason}
              showEpi={showEpi}/>)}
    </>
  );
}