const makeRequest = (url, method, body) => {
  return fetch(url, {
    method, 
    body: JSON.stringify(JSON.parse(body)),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    } 
  })
    .then(res => res.json())
    .catch(err => console.log(err));
};

export default makeRequest;
