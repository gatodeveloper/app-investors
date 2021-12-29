import moment from 'moment';

const formatDate = ((date) => {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
})

const durationFronNow = (date, format="YYYYMMDD") => {
  const newFormat = format;
  return moment(date, newFormat).fromNow();
}

export default {
  formatDate,
  durationFronNow
}