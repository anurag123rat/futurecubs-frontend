// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
//   withCredentials: true, // httpOnly refresh cookie automatically bhejega/receive karega
// });

// let accessToken: string | null = null;

// export const setAccessToken = (token: string | null) => {
//   accessToken = token;
// };

// export const getAccessToken = () => accessToken;

// // Har request mein automatically access token attach karo
// api.interceptors.request.use((config) => {
//   if (accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

// // Agar access token expire ho (401 aaye), automatically refresh karo
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       try {
//         const res = await axios.post(
//           "http://localhost:5000/api/auth/refresh",
//           {},
//           { withCredentials: true }
//         );

//         const newAccessToken = res.data.accessToken;
//         setAccessToken(newAccessToken);

//         originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//         return api(originalRequest);
//       } catch (refreshError) {
//         setAccessToken(null);
//         window.location.href = "/login";
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }

  
// );

// export const logoutUser = async () => {
//   try {
//     await axios.post(
//       "http://localhost:5000/api/auth/logout",
//       {},
//       { withCredentials: true }
//     );
//   } catch (error) {
//     console.error("Logout error:", error);
//   } finally {
//     setAccessToken(null);
//     localStorage.removeItem("user");
//     window.location.href = "/login";
//   }
// };

// export default api;

import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true, // httpOnly refresh cookie automatically send/receive karega
});

let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

// Har request mein automatically access token attach karo
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Agar access token expire ho (401 aaye), automatically refresh karo
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${API_BASE_URL}/api/auth/refresh`,
          {},
          { withCredentials: true }
        );

        const newAccessToken = res.data.accessToken;
        setAccessToken(newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        setAccessToken(null);
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export const logoutUser = async () => {
  try {
    await axios.post(
      `${API_BASE_URL}/api/auth/logout`,
      {},
      { withCredentials: true }
    );
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    setAccessToken(null);
    localStorage.removeItem("user");
    window.location.href = "/login";
  }
};

export default api;