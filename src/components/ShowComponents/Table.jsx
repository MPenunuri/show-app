import Schedule from './TableComponents/Schedule.jsx'

export default function Table({ network, status, genres, schedule, rating }) {
  
  return (
    <>
      <table className="table table-sm ms-5 me-5 mt-1 mb-1 table-hover">
        <tbody>
          <tr>
            <th scope="row">Network:</th>
            <td>{network === null ? 'No data' : network.name}</td>
          </tr>
          <tr>
            <th scope="row">Country:</th>
            <td>{network === null ? 'No data' : network.country.name}</td>
          </tr>
          <tr>
            <th scope="row">Status:</th>
            <td colSpan="2">{status}</td>
          </tr>
          <tr>
            <th scope="row">Genres:</th>
            <td colSpan="2">{genres.length === 0 ? 'No data' : genres.join(', ')}</td>
          </tr>
          <tr>
            <th scope="row">Schedule:</th>
            <td colSpan="2"> <Schedule schedule={schedule} /></td>
          </tr>
          <tr>
            <th scope="row">Rating:</th>
            <td colSpan="2">{rating.average === null ? 'No data' : rating.average}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
