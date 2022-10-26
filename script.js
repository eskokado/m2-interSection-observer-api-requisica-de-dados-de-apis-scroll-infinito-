const BaseUrl = 'https://rickandmortyapi.com/api';

async function dataAPI() {
  const response = await fetch(`${BaseUrl}/character`);
  console.log(response);
}

dataAPI();