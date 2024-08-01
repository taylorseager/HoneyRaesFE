import { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { getServiceTickets, deleteSingleTicket, completeThisTicket } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  const deleteThisTicket = (id) => {
    if (window.confirm(`Are you sure you want to delete this service ticket?`)) {
      deleteSingleTicket(id).then(() => {
        getServiceTickets().then(setTickets);
      });
    }
  };

  const completeServiceTicket = (id) => {
    completeThisTicket(id).then(() => getServiceTickets()).then(data => setTickets(data))
  }

  useEffect(() => {
    getServiceTickets().then(setTickets);
  }, []);

  return (
    <><Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td>
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
            <td>
            <Button color="danger" onClick={() => deleteThisTicket(t.id)} className="m-2">DELETE</Button>
            </td>
              {t.employeeId != null && (t.dateCompleted === null) ? (
            <td>
        <Button color="success" onClick={() => completeServiceTicket(t.id)} className="m-2">COMPLETE</Button>
        </td>
      ) : (
        <td>already completed or not assigned</td>
      )}
          </tr> 
        ))}
      </tbody>
    </Table>
      </>
  );
}
