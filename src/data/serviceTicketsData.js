const baseUrl = "http://localhost:5000"

export const getServiceTickets = () => {
  return fetch(baseUrl+"/servicetickets").then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getSingleServiceTicket = (id) => {
  return fetch(`${baseUrl}/servicetickets/${id}`).then((r) => r.json());
}

export const deleteSingleTicket = (id) => new Promise((resolve, reject) => {
 fetch(`${baseUrl}/servicetickets/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.text())
    .then((data) => resolve((data)))
    .catch(reject);
});

export const completeThisTicket = (id) => new Promise((resolve, reject) => {
  fetch(`${baseUrl}/servicetickets/${id}/complete`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.text())
    .then((data) => resolve((data)))
    .catch(reject);
});
