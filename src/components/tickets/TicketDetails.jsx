import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getSingleServiceTicket } from "../../data/serviceTicketsData";

export default function TicketDetails() {
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getSingleServiceTicket(id).then(setTicket);
  }, []);

  if (!ticket) {
    return null;
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Customer</th>
          <td>{ticket.customer.firstName}</td>
        </tr>
        <tr>
          <th scope="row">Description</th>
          <td>{ticket.description}</td>
        </tr>
        <tr>
          <th scope="row">Emergency</th>
          <td>{ticket.emergency ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <th scope="row">Employee</th>
          <td>{ticket.employee?.firstName || "Unassigned"}</td>
        </tr>
        <tr>
          <th scope="row">Completed?</th>
          <td>{ticket.dateCompleted?.split("T")[0] || "Incomplete"}</td>
        </tr>
      </tbody>
    </Table>
  );
}
