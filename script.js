const BaseUrl = 'https://rickandmortyapi.com/api';
const divObservadora = document.querySelector('.observador');

async function dataAPI() {
  let response = []
  try {
    const request = await fetch(`${BaseUrl}/character`);
    if (request.ok) {
      response = await request.json()
    } else {
      console.log("request", request)
    }
  } catch (err) {
    console.log("err",err)
  }

  response.results.map((elem) => {
    divObservadora.insertAdjacentHTML(
      'beforebegin',
      `
          <div class="card">
            <h2>${elem.name}</h2>
            <img src="${elem.image}" alt="${elem.name}" />
          </div>
        `,
    );
  });  
}

dataAPI();