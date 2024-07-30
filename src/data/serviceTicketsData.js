const baseUrl = "http://localhost:5000"

export const getServiceTickets = () => {
  return fetch(baseUrl+"/servicetickets").then((r) => r.json());
};

//export a function here that gets a ticket by id
