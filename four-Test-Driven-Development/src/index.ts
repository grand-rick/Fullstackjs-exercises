/** Use Axios to get data from restcountries api */
import axios from "axios";
/** Use the free API https://restcountries.com/
 * You will use the following endpoints
 * https://restcountries.com/v2/name/${name} for countries by name
 * https://restcountries.com/v2/regionalbloc/${regionalbloc} for region blocks
 */

/** Create getCountry Function here */
async function getCountry(name: string) {
  const getAPI = await axios(`https://restcountries.com/v2/name/${name}`);
  const data = getAPI.data;
    const result = {
        capital: data[0].capital,
        region: data[0].region,
        numericCode: data[0].numericCode
    }
    return result;
}

/** Create a test for this getRegion function */
async function getRegionCountries(regionalbloc: string) {
  const getApi = await axios(
    `https://restcountries.com/v2/regionalbloc/${regionalbloc}`
  );
  const data = getApi.data;
  const countries = [];
  for (let i = 0; i < data.length; i++) {
    countries.push(data[i].name);
  }
  return countries;
}

/** Create getRegionCapitals function here */
async function getRegionCapitals(regionalbloc: string) {
  const getAPI = await axios(`https://restcountries.com/v2/regionalbloc/${regionalbloc}`);
  const data = getAPI.data;

  const capitals = [];
    
  for (let i = 0, n = data.length; i < n; i++) {
      capitals.push(data[i].capital)
  }
    
  return capitals;
}

export default {
  getCountry,
  getRegionCountries,
  getRegionCapitals
};
