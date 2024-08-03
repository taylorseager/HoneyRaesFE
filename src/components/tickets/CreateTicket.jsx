import { useState } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
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
          <Label for="Customer Name">
            Customer Name
          </Label>
          <Input
            id="customerId"
            name="customerId"
            value={formInput.customerId}
            placeholder="Enter Customer Name"
            type="textarea"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="Employee Name">
            Employee Name
          </Label>
          <Input
            id="employeeId"
            name="employeeId"
            value={formInput.employeeId}
            placeholder="Enter Employee Name"
            type="textarea"
            onChange={handleChange}
          />
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
        <Label for="emergency">
            Emergency?
          </Label>
          <Input
            id="emergency"
            name="emergency"
            value={formInput.emergency ? 'true' : 'false'}
            type="select"
            onChange={(e) => {
              const { name, value } = e.target;
              setFormInput((prevState) => ({
                ...prevState,
                [name]: value === 'true',
              }))
            }}
            >
            <option value={true}>
              Yes
            </option>
            <option value={false}>
              No
            </option>
            </Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
  </Form>
  );
}
