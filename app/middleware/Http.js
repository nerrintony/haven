import axios from 'axios';
class ApiClient {
  constructor(baseUrl = null) {
    this.getclient = getClientWithHeader(baseUrl);
  }

  post(url, data = {}, conf = {}) {

    return this.clientWithHeader

      .post(url, data, conf)

      .then((response) => Promise.resolve(response))

      .catch((error) => Promise.reject(error));

  }

  get(url, data = {}, conf = {}) {

    return this.clientWithHeader

      .get(url, data, conf)

      .then((response) => Promise.resolve(response))

      .catch((error) => Promise.reject(error));

  }
}
export { ApiClient };

const getClientWithHeader = (baseUrl = null) => {
  let options = { baseURL: baseUrl };
  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('token')
    if (token) {
      options.headers = { "Authorization": `Bearer ${token}` };
    }
    
  };

  const client = axios.create(options);

  client.interceptors.request.use(
    async function (config) {



      return config;
    },
    function (error) {
      console.log(error)

    }
  );

  // Add a response interceptor
  client.interceptors.response.use((response) => {
    return response;
  }, (error) => {

    return error.response
  });


  client.interceptors.request.use(
    async function (config) {
      return config;
    },
    function (error) {

    }
  );

  return client;
};

