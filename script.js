const BaseUrl = 'https://rickandmortyapi.com/api';
const divObservadora = document.querySelector('.observador');
let page = 1;

async function dataAPI(currentPage) {
  let response = []
  try {
    const request = await fetch(`${BaseUrl}/character?page=${currentPage}`);
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

const observer = new IntersectionObserver((entries) => {
  if (entries.some((entry) => entry.isIntersecting)) {
    dataAPI(page++);
  }
});

observer.observe(divObservadora);