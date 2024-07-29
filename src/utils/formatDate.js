const lineChartDateFormat  = (localizedDateString)=>{
    const [day, monthName, year] = localizedDateString.split(' ');
    const months = {
        January: '01', February: '02', March: '03', April: '04',
        May: '05', June: '06', July: '07', August: '08',
        September: '09', October: '10', November: '11', December: '12'
    };
    const month = months[monthName];
// Format into 'YYYY-MM-DD'
  return `${year}-${month}-${day.padStart(2, '0')}`;
}
module.exports={lineChartDateFormat}