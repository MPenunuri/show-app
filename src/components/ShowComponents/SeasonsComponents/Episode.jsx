export default function Episode( { epiId, id, showEpisBySeason } ) {

  const epi = showEpisBySeason.filter(epi => epi.id === id);

  const { name, rating , image} = epi[0];

  const imgNotFound = '../../../../public/Image-Not-Found.svg'

  return (
    <>
    <tr>
      <td className='epiInfo'> { epiId } </td>
      <td className='epiInfo'> { name } </td>
      <td className='epiInfo'> { 
      rating.average === null ? 'No data' : rating.average } </td>
      <td>
        <img src={ image === null ? imgNotFound : image.medium } alt="Episode picture"
             className='episode-picture'/>
      </td>
    </tr>
    </>
  );
}