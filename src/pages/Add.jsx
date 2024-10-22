import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addStudents } from '../services/apis';

function Add({refreshStudents}) {

    const [show, setShow] = useState(false);
    const [stud, setStud] = useState({
        studkey: "", studname: "", subkey: "", grade: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddStudent = async () => {
        console.log(stud);
        const { studkey, studname, subkey, grade } = stud;
        if (!studkey || !studname || !subkey || !grade) {
            toast.warning('Please fill all the fields');
        }
        else {
            const data = { studkey, studname, subkey, grade }
            const res = await addStudents(data)
            console.log(res)
            if (res.status == 200) {
                toast.success("Student Added!")
                handleClose()
                refreshStudents(res)
            }
            else {
                toast.error("Student Adding Failed!!!")
            }
        }
    }

    return (
        <>
            <button className='btn btn-info' onClick={handleShow}>Add Student <i className="fa-solid fa-plus" /></button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Project</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-light'>
                    <Row>
                        <Col md={12} sm={12}>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Student Key" onChange={(e) => setStud({ ...stud, studkey: e.target.value })} />
                            </div>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Student Name" onChange={(e) => setStud({ ...stud, studname: e.target.value })} />
                            </div>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Subject Key" onChange={(e) => setStud({ ...stud, subkey: e.target.value })} />
                            </div>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Grade" onChange={(e) => setStud({ ...stud, grade: e.target.value })} />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddStudent}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add