import { normalize, schema } from 'normalizr';

const beast = new schema.Entity('beasts');

const beastsSchema = { data: [beast] };

export const fetchBeast = beast => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${
    process.env.REACT_APP_GIPHY_API_KEY
  }&q=${beast}`;
  return fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(jsonData => {
      console.log(normalize(jsonData, beastsSchema));
    })
    .catch(err => err);
};

export default fetchBeast;
