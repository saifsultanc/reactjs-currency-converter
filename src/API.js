const API = {
  endPoint: "https://api.exchangeratesapi.io/latest?base=USD",
  get() {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open("GET", API.endPoint);
      request.onload = () => resolve(JSON.parse(request.responseText));
      request.onerror = () => reject(request.statusText);
      request.send();
    });
  }
};

export default API;
