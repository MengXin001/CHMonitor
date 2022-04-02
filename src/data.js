import axios from "axios";
//mock fl api
const serverAddr = "./"
export const axiosGet = async (path, params) => (await axios.get(`${serverAddr}${path}`, { params })).data