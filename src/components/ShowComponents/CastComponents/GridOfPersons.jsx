import Person from './Person.jsx'

export default function GridOfPersons( { showCast } ){

  let personKeyid = 0;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button collapsed" data-bs-toggle="collapse" type="button"  href='#GridOfPersons' aria-expanded="true" aria-controls="collapseTwo">
          Show actors and actresses
        </button>
      </h2>
      <div id='GridOfPersons' className="accordion-collapse collapse">
        <div className="accordion-body">
          <div className="container">
              <div className="row">
                {showCast.map((person) => <Person key={`person-${personKeyid += 1}`} person={person} />)}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}