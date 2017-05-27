export default function getAllSymbols() {
  return new Promise((resolve) => {
    fetch('http://localhost:3000/symbols.json', {
      method: 'GET'
    })
    .then(res => resolve(res.json()));
  });
}
