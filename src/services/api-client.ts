import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0d16e2b35897478ca8b1dc21eaa44f59",
  },
});
