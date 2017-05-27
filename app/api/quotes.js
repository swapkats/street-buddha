export function getQuotes(positions) {
  return new Promise((resolve) => {
    fetch('http://localhost:5000/api/v1.0/quotes', {
      method: 'POST',
      body: JSON.stringify(positions)
    })
    .then(res => resolve(res.json()));
  });
}
