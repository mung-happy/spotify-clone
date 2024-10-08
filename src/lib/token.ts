import axios from "axios";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET_ID = process.env.CLIENT_SECRET_ID;

let tokenExpirationTime: number | null = null;

const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    "Content-Type": "application/js on",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const currentTime = Date.now();
    if (
      !config.headers.Authorization ||
      (tokenExpirationTime && currentTime >= tokenExpirationTime)
    ) {
      const response = await axios.post(
        "https://accounts.spotify.com/api/token",
        new URLSearchParams({
          grant_type: "client_credentials",
          client_id: CLIENT_ID ?? "",
          client_secret: CLIENT_SECRET_ID ?? "",
        }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const { access_token, expires_in } = response.data;
      config.headers.Authorization = `Bearer ${access_token}`;
      tokenExpirationTime = currentTime + expires_in * 1000;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
