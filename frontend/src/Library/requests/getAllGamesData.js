import axios from "axios";
import qs from "qs";

export async function getAllGamesData() {
  const parameters = { initiate: true };
  const response = await axios({
    method: "post",
    url: "https://artemis.cs.csub.edu/~jtagaca/4420/index.php",
    data: qs.stringify(parameters),
    dataType: "JSON",
    withCredentials: true,
  });
  return response.data;
}
