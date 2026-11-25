export const getMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=37c100b6d65d182a0677cf120c2694ff"
  );

  if (!response.ok) {
    throw new Error("Errore API");
  }

  const data = await response.json();

  return data;
};

export const getMovieById = async (id: string | undefined) => {
  if (!id) {
    throw new Error("ID non Valorizzato");
  }

  const response = await fetch(
    "https://api.themoviedb.org/3/movie/${id}?api_key=37c100b6d65d182a0677cf120c2694ff"
  );

  if (!response.ok) {
    throw new Error("Errore API");
  }

  const data = await response.json();

  return data;
};