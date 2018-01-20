import { normalize, schema } from 'normalizr';

const beast = new schema.Entity('beasts');

const beastsSchema = { data: [beast] };

export const fetchBeasts = beastType => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${
    process.env.REACT_APP_GIPHY_API_KEY
  }&q=${beastType}`;
  return fetch(url, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(jsonData => normalize(jsonData, beastsSchema))
    .catch(err => console.log(err));
};

export default fetchBeasts;
