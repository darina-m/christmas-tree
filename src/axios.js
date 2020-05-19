import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://christmas-tree-424ce.firebaseio.com";

export default instance;