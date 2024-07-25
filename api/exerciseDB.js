import { apiKey } from "../configurations/api.config";

const baseUrl = "https://exercisedb.p.rapidapi.com";

export async function getExcersisesByBodyPart(bodyPart) {
  const options = {
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    },
  };

  const response = await fetch(
    `${baseUrl}/exercises/bodyPart/${bodyPart}?limit=10&offset=0`,
    options
  );
  const data = await response.json();
  return data;
}
