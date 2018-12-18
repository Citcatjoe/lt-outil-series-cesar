/*

  Utilitaire pour retraiter les contenus:
  * ProcessContents > ajout de colonnes
  * GetCountries > liste des pays

*/

export function GetContents () {
  let data =  localStorage.getItem('guide-series');
  if (!data){
    return false;
  }
  data = JSON.parse(data);
  return false; // no cache
  // expire après 24 heures:                       milli  sec  min  heures
  if( (data['timestamp'] - new Date().getTime()) < (1000 * 60 * 60 * 24) ){
    return data;
  }else{
    return false;
  }
}

export function SetContents (contents, selects) {
  return localStorage.setItem('guide-series', JSON.stringify({'timestamp': new Date().getTime(), 'contents': contents, 'selects': selects}));
}

export function ProcessContents (json) {
  // ajout d’une colonne pour «En cours / searchTerminé»
  json.map((row, index) => {
    return row['completed'] = row['np8_end_date'] === '' ? 'terminee' : 'en-cours';
  });

  json.map((row, index) => {
    return row['uniquekey'] = row['path'].split('/')[2];
  });
  return json;
}

export function GetCountries (json) {
  // test: génération auto du menu déroulant «Provenance»
  var countryList = [];
  json.map((row, index) => {
    // on saute les pays non renseignés et on splitte les coproductions
    var countries = row['lt_country'].length > 0 ? row['lt_country'].split(', ') : [];
    return countryList = countryList.concat(countries);
  });

  // filtrage et tri
  countryList = countryList.filter (function (value, index, countryList) {
      return countryList.indexOf(value) === index;
  });
  countryList.sort(
    function (a, b) {
      // Pour États-Unis, ... (accent initial)
      return a.localeCompare(b);
  });

  var countryOptions = [];
  countryList.map((item, index) => {
    return countryOptions.push({ value: item, label: item });
  });
  return countryOptions;
}
