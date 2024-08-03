import { useState, useEffect } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { retrieveCustomers } from '../../data/customerData';
import { retrieveEmployees } from '../../data/employeeData';
import { createNewServiceTicket } from '../../data/serviceTicketsData';

const initialState = {
  customerId: 0,
  employeeId: 0,
  description: '',
  emergency: false,
  dateCompleted: null,
};

export default function CreateTicket() {
  const [formInput, setFormInput] = useState(initialState);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    retrieveCustomers().then(setCustomers);
    retrieveEmployees().then(setEmployees);
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { ...formInput };
    createNewServiceTicket(payload).then(() =>{navigate('/tickets')});
  };

  return (
  <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="customerId">Customer</Label>
        <Input
          type="select"
          name="customerId"
          id="customerId"
          onChange={handleChange}
          value={formInput.customerId}
          required
        >
          <option value="">Select Customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.firstName}
            </option>
          ))}
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="employeeId">Employee</Label>
        <Input
          type="select"
          name="employeeId"
          id="employeeId"
          onChange={handleChange}
          value={formInput.employeeId}
          required
        >
          <option value="">Select Employee</option>
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.firstName}
            </option>
          ))}
        </Input>
      </FormGroup>

      <FormGroup>
          <Label for="description">
            Description
          </Label>
          <Input
            id="description"
            name="description"
            value={formInput.description}
            placeholder="Describe your issue"
            type="textarea"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="emergency">Emergency?</Label>
          <Input
            id="emergency"
            name="emergency"
            type="select"
            onChange={handleChange}
            value={formInput.emergency ? 'true' : 'false'}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Input>
        </FormGroup>

        <Button type="submit">Submit</Button>
  </Form>
  );
}
