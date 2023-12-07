import axios from "axios";

const getTimeStamp = () => new Date().getTime();

export async function getNotes() {
  return axios({
    method: "get",
    url: "http://localhost:8001/api/poc23@lc.body.json?lastModified=0",
    headers: {
      accept: "application/json, text/javascript, */*; q=0.01",
      "accept-language": "en-US,en;q=0.9,pt;q=0.8",
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
  })
    .then((response) => {
      console.log("RES", response.data.body);
      return response.data.body;
    })
    .catch((error) => {
      return error;
    });
}

export async function postNote(note) {
  const data = `text=${note}&captcha-token-v2=&lastModified=${getTimeStamp()}&force=true`;

  const headers = {
    accept: "application/json, text/javascript, */*; q=0.01",
    "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
  };

  try {
    const response = await axios.post(
      "http://localhost:8001/api/poc23@lc",
      data,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    console.error("Axios Error:", error);
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", error.message);
    }
  }
}
