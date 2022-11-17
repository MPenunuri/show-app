
export default function Person( { person } ){

  const {name: namePerson, image} = person.person
  const {name: nameChar} = person.character

  const imgNotFound = '../../../../public/Image-Not-Found.svg'

  return (
    <div className="card cast-card m-4" style={{width: '240px'}}>
      <img src={ image == null ?  imgNotFound : image.medium }
           className="cast-picture rounded" 
           alt="castPicture"/>
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <p className="fw-bold fs-5 text-center m-0">{ namePerson }</p>
        <p className="fw-normal m-0">as</p>
        <p className="fw-semibold fst-italic text-center m-0">{ nameChar }</p>
      </div>
    </div>
  );
}
