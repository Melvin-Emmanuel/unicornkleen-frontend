// import axios from "axios"


// const Instance = axios.create({
//   baseURL: "http://localhost:3800/api/v1",
// });

// export default Instance

import axios from "axios"
const baseUrl = "http://localhost:5200/api/v1"
const baseURL2 = "https://unicornklee.onrender.com/api/v1";

const Instance = axios.create({
  baseURL: baseURL2,
});

export default Instance;