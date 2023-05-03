import axios from "axios";
import qs from "qs";

export async function getAllGamesData() {
  const cachedData = sessionStorage.getItem("cachedData");

  if (cachedData) {
    return JSON.parse(cachedData);
  } else {
    const parameters = { initiate: "true" };
    const response = await axios({
      method: "post",
      url: "https://artemis.cs.csub.edu/~jtagaca/4420/index.php",
      data: qs.stringify(parameters),
      dataType: "JSON",
      withCredentials: true,
    });

    if (response.status === 200) {
      const data = response.data;
      sessionStorage.setItem("cachedData", JSON.stringify(data));
      return data;
    } else {
      throw new Error("Failed to fetch data");
    }
  }
}
