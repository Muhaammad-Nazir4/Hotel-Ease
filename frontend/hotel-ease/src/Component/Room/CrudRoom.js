import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import NavBar from "../Navbar";

const RoomManagement = () => {
  const initialFormData = {
    floorNumber: "",
    roomNumber: "",
    status: "",
    type: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [editFormData, setEditFormData] = useState(initialFormData);

  useEffect(() => {
    fetchData();
  }, [formData]);

  const [rooms, setRooms] = useState([
    {
      id: 1,
      floorNumber: 1,
      roomNumber: 1,
      status: "Sin",
      type: "Sin",
    },
  ]);
  const fetchData = async () => {
    const url = "http://localhost:5000/Room/GetRoom";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        // console.log(data);
        setRooms(data.Room);
      } else {
        console.error("error in fetching data 1 ");
      }
    } catch (error) {
      alert("error in fetching data 2");
      console.error("Error:", error);
    }
  };

  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [Roomid, setRoomId] = useState(null);

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
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleAddRoom = async () => {
    if (
      formData.floorNumber === "" ||
      formData.roomNumber === "" ||
      formData.status === "" ||
      formData.type === ""
    ) {
      alert("Please fill out the form");
      return;
    } else {
      const url = "http://localhost:5000/Room/AddRoom";
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
          alert("Room Added Successfully");
        } else {
          alert(Data.err);
          console.error("Failed to submit the form");
        }
      } catch (error) {
        alert("Room Added Failed! 2");
        console.error("Error:", error);
      }
      rooms.push(formData);
    }
    setAddModalOpen(false);
    setFormData(initialFormData);
    setSelectedRoomId(null);
  };

  const EditRooms = async () => {
    if (
      editFormData.floorNumber === "" ||
      editFormData.roomNumber === "" ||
      editFormData.type === "" ||
      editFormData.status === ""
    ) {
      alert("Please fill out the form");
      return;
    } else {
      const url = `http://localhost:5000/Room/EditRoom/${Roomid}`;
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editFormData),
        });
        const Data = await response.json();
        if (response.ok) {
          alert("Room Edited Successfully");
          fetchData(); // Fetch updated data after successful edit
        } else {
          console.error("Failed to submit the form");
        }
      } catch (error) {
        alert("Room Edited Failed! 2");
        console.error("Error:", error);
      }
    }
    setEditModalOpen(false);
    setEditFormData(initialFormData);
    setSelectedRoomId(null);
  };

  const handleEditRooms = (Roomid, dataBaseID) => {
    setRoomId(dataBaseID);
    const selectedRoom = rooms.find((room) => room.id === Roomid);
    setEditFormData(selectedRoom);
    setSelectedRoomId(Roomid);
    setEditModalOpen(true);
  };

  const handleDeleteRoom = async (RoomId, dataBaseID) => {
    try {
      const url = `http://localhost:5000/Room/DeleteRoom/${dataBaseID}`;

      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        alert("Room deleted successfully!");
        fetchData();
      } else {
        console.error("Failed to delete the Room");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to delete the Room 2");
    }
  };

  return (
    <>
      <NavBar />

      <div className="container">
        <h1 style={{ textAlign: "center", marginTop: "5%" }}>
          Room Management
        </h1>
        <Button
          onClick={openAddModal}
          style={{ marginBottom: "2%", marginTop: "5%" }}
        >
          Add Room
        </Button>

        <Table
          striped
          bordered
          hover
          style={{ maxHeight: "500px", overflowY: "auto" }}
        >
          <thead>
            <tr>
              <th>Floor Number</th>
              <th>Room Number </th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id}>
                <td>{room.floorNumber}</td>
                <td>{room.roomNumber}</td>
                <td>{room.type}</td>
                <td>{room.status}</td>

                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleEditRooms(room.id, room._id)}
                    style={{ margin: "2%" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteRoom(room.id, room._id)}
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
            <Modal.Title>Add Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formfloorNumber">
                <Form.Label>Select Floor Number </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Select Floor Number"
                  name="floorNumber"
                  value={formData.floorNumber}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="formroomNumber">
                <Form.Label>Room Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Room Number"
                  name="roomNumber"
                  value={formData.roomNumber}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formstatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter status"
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group controlId="formType">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Room Type"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleAddRoom}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={isEditModalOpen} onHide={closeAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Room</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formfloorNumber">
                <Form.Label>Floor Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Select Floor Number"
                  name="floorNumber"
                  value={editFormData.floorNumber}
                  onChange={handleInputChangeEdit}
                />
              </Form.Group>
              <Form.Group controlId="formroomNumber">
                <Form.Label>Room Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Room Number"
                  name="roomNumber"
                  value={editFormData.roomNumber}
                  onChange={handleInputChangeEdit}
                />
              </Form.Group>

              <Form.Group controlId="formstatus">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter status"
                  name="status"
                  value={editFormData.status}
                  onChange={handleInputChangeEdit}
                />
              </Form.Group>

              <Form.Group controlId="formtype">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Room type"
                  name="type"
                  value={editFormData.type}
                  onChange={handleInputChangeEdit}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeAddModal}>
              Cancel
            </Button>
            <Button variant="primary" onClick={EditRooms}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default RoomManagement;
