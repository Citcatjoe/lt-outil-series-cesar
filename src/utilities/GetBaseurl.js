/*
  à améliorer...
*/

export default function getBaseurl (host = window.location.hostname) {
  return /localhost$/.test(host) ? 'http://localhost:3000/' : 'https://labs.letemps.ch/guide-des-series/';
}
