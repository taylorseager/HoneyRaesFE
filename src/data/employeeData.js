const baseUrl = "http://localhost:5000"

export const retrieveEmployees = () => {
  return fetch(baseUrl+"/employee").then((r) => r.json());
};
