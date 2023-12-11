import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import NavBar from "../Navbar";

const EmployeeManagement = () => {
  const initialFormData = {
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [editFormData, setEditFormData] = useState(initialFormData);

  useEffect(() => {
    fetchData();
  }, [formData]);

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Thomas Hardy",
      email: "thomashardy@mail.com",
      address: "89 Chiaroscuro Rd, Portland, USA",
      phoneNumber: "(171) 555-2222",
    },
    // Add more initial data as needed
  ]);
  const fetchData = async () => {
    const url = "http://localhost:5000/Employee/GetEmployee";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setEmployees(data.Employee);
      } else {
        console.error("error in fetching data 1 ");
      }
    } catch (error) {
      alert("error in fetching data 2");
      console.error("Error:", error);
    }
  };

  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [EmployeeId, setEmployeeId] = useState(null);

  const openAddModal = () => {
    setFormData(initialFormData);
    setAddModalOpen(true);
  };

  const closeAddModal = () => {
    setAddModalOpen(false);
    setEditModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputChangeEdit = (e) => {
    const { name, value } = e.target;
    setFormData({ ...editFormData, [name]: value });
  };

  const handleAddEmployee = async () => {
    if (
      formData.email === "" ||
      formData.name === "" ||
      formData.phoneNumber === "" ||
      formData.address === ""
    ) {
      alert("Please fill out the form");
      return;
    } else {
      const url = "http://localhost:5000/Employee/AddEmployee";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const Data = await response.json();
        if (response.ok) {
          alert("Employee Added Successfully");
        } else {
          alert(Data.err);
          console.error("Failed to submit the form");
        }
      } catch (error) {
        alert("Employee Added Failed! 2");
        console.error("Error:", error);
      }
    }
    setAddModalOpen(false);
    setFormData(initialFormData);
    setSelectedEmployeeId(null);
  };

  const EditEmployee = async () => {
    if (
      formData.email === "" ||
      formData.name === "" ||
      formData.phoneNumber === "" ||
      formData.address === ""
    ) {
      alert("Please fill out the form");
      return;
    } else {
      console.log(formData);
      const url = `http://localhost:5000/Employee/EditEmployee/id=${EmployeeId}`;
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const Data = await response.json();
        if (response.ok) {
          alert("Employee Edited Successfully");
        } else {
          console.error("Failed to submit the form");
        }
      } catch (error) {
        alert("Employee Edited Failed! 2");
        console.error("Error:", error);
      }
    }
    setEditModalOpen(false);
    setFormData(initialFormData);
    setSelectedEmployeeId(null);
  };

  const handleEditEmployee = (employeeId, dataBaseID) => {
    alert(dataBaseID);
    setEmployeeId(dataBaseID);
    const selectedEmployee = employees.find(
      (employee) => employee.id === employeeId
    );
    setEditFormData(selectedEmployee);
    setSelectedEmployeeId(employeeId);
    setEditModalOpen(true);
  };

  const handleDeleteEmployee = async (employeeId, dataBaseID) => {
    try {
      const url = `http://localhost:5000/Employee/DeleteEmployee/${dataBaseID}`;

      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Employee deleted successfully!");
        fetchData();
      } else {
        console.error("Failed to delete the employee");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to delete the employee");
    }
  };

  return (
    <>
      <NavBar />

      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "5%" }}>
          Employee Management
        </h1>
        <Button
          onClick={openAddModal}
          style={{ marginBottom: "2%", marginTop: "5%" }}
        >
          Add Employee
        </Button>

        <Table
          striped
          bordered
          hover
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.phoneNumber}</td>

                <td>
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleEditEmployee(employee.id, employee._id)
                    }
                    style={{ margin: "2%" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() =>
                      handleDeleteEmployee(employee.id, employee._id)
                    }
                    style={{ margin: "2%" }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={isAddModalOpen} onHide={closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddEmployee}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={isEditModalOpen} onHide={closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={editFormData.name}
                  onChange={handleInputChangeEdit}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={editFormData.email}
                  onChange={handleInputChangeEdit}
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  name="address"
                  value={editFormData.address}
                  onChange={handleInputChangeEdit}
                />
              </Form.Group>
              <Form.Group controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone"
                  name="phoneNumber"
                  value={editFormData.phoneNumber}
                  onChange={handleInputChangeEdit}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={EditEmployee}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default EmployeeManagement;
