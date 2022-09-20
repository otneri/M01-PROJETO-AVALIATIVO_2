import axios from "axios";

export const serverConnectLabDevices = axios.create({
  baseURL: `https://connectlab.onrender.com/devices`,
});


