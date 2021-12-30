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



const csvToJSON = (csv) => {

  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
        let dataCell = currentline[j]
        dataCell = dataCell.replace('\r', '')
        const data = dataCell.split(';')

        obj[headers[j].replace('\r', '')] = (data.length > 2 ) ? data : data[0];
      }

      result.push(obj);

  }

  return result;
  //return JSON.stringify(result);
  
}

const utils = {
  formatDate,
  durationFronNow,
  csvToJSON
}

export default utils