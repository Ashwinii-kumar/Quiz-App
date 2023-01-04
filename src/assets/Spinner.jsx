import spinner from './loading-gif.gif'
function Spinner() {
  return (
    <div className='spinner'>
        <img
            className='spinners'
            width={100} 
            src={spinner}
            alt="Loading..." 

            />
    </div>
  )
}

export default Spinner;