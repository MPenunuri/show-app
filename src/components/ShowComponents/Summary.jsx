export default function Summary( { summary } ) {

  return (
    <div className='ms-0 me-0 mt-3 mb-0' dangerouslySetInnerHTML={{ __html: summary }}/>
  )
}