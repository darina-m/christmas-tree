import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://christmas-tree-97266.firebaseio.com";

export default instance;