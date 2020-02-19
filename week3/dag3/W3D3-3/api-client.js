console.log("API");

const API_KEY = "string met API-key";
const getData = async function() {
  try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
    const response = await fetch(apiUrl, { method: "GET" });
    console.log("The response from the API in getData function ", response);
    const data = await response.json();
    console.log("The data in getData function ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
getData();

//Gebruik de fetch() functie met de GET methode om de data van de API te fetchen. Stop de fetch functie in een variable res die je await.  De code gaan dus niet verder totdat de await klaar is.
