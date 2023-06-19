import axios from "axios";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 6YtLWIlxLxVvHxhgFqTbH2d6gR7sPHNrALWKu6QHHAU",
    },
    params: {
      query: term, //Aranılan kelimeyi query'e veriyoruz. Term burda componentteki search'e denk geliyor.
    },
  });
  return response.data.results;
};

export default searchImages;
