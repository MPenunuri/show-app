export default function Schedule( { schedule } ){

  let str = '';

  function getStr() {
    if(schedule.days.length != 0 && schedule.time != ''){
      str = `${schedule.days} at ${schedule.time}`
    } else if(schedule.days.length != 0){ 
      str = schedule.days
    } else if(schedule.time != ''){
      str = schedule.time
    } else {
      str = 'No data'
    }
  }

  getStr()
          
  return (
    str
  ); 
}