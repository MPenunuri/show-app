import Logo from '../../public/film-solid.svg'

export default function Home() {

  return (
    <>
    <div className='homeContainer'>
      <div className='d-flex flex-column flex-md-row 
                      justify-content-center align-items-center
                      showApp pb-5'>
        <img className='appLogo m-3 mt-5' src={Logo} />
        <div className='d-flex flex-column 
                        justify-content-center align-items-center m-3'>
          <h1 className='nameApp'>The Show App</h1>
          <p className='descApp text-center'>All the data that you need about T.V. and platforms shows.</p>
        </div>
      </div>
      <div className='d-flex flex-column flex-md-row
                      justify-content-center align-items-center
                      m-5 mb-0 pt-3'>
        <div className='d-flex flex-column align-items-center align-items-center text-center'>
          <h2 className='mb-4'>Are you looking for information about your favorite show?</h2>
          <p className='text-center'>Check out the TVmaze data!</p>
          <p className='text-center'>Type your favorite show name above and click on the search button.</p>
          <p className='text-center'>See the interface that we have prepared for you :) </p>
        </div>
        <div className='d-flex flex-column justify-content-start text-center ms-4'>
          <h2 className='mb-4 mt-4'>Powered with data of: </h2>
          <img className='tvMazeLogo w-100 mb-5'
              src='https://static.tvmaze.com/images/api/tvm_api.png'/>
        </div>
      </div>
    </div>
  <footer className='text-center position-fixed bottom-0 w-100'>
    Front-end project developed by MPenunuri.
  </footer>
  </>
  )
}