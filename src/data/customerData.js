const baseUrl = "http://localhost:5000"

export const retrieveCustomers = () => {
  return fetch(baseUrl+"/customer").then((r) => r.json());
};
