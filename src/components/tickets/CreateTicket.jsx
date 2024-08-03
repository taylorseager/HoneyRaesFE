import { Form } from "reactstrap";

const initialState = {
  customerId: '',
  employeeId: '',
  description: '',
  emergency: false,
  dateCompleted: null,
};

export default function CreateTicket() {
  <Form>
    <FormGroup>
          <Label for="Customer Name">
            Customer Name
          </Label>
          <Input
            id="customerId"
            name="Customer Name"
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
            name="Employee Name"
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
  </Form>
}
