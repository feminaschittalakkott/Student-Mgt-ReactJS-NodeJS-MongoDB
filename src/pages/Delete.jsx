import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { deleteStudent } from '../services/apis';

function Delete({ stud, refreshStudents }) {

    const [show, setShow] = useState(false);

    const [studentData, setStudentData] = useState({
        studkey: "", studname: "", subkey: "", grade: ""
    });

    useEffect(() => {
        if (stud) {
            setStudentData({
                studkey: stud.studkey,
                studname: stud.studname,
                subkey: stud.subkey,
                grade: stud.grade
            });
        }
    }, [stud]);

    const handleDelete = async () => {
        console.log(studentData);
        const id = stud._id
        const res = await deleteStudent(id)
        console.log(res)
        if (res.status == 200) {
            toast.success("Student Deleted!")
            refreshStudents()
            handleClose()
        }
        else {
            toast.error("Student Deleting Failed!!!")
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn' onClick={handleShow}><i className="fa-regular fa-trash-can fa-xl" /></button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete Student</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-light'>
                    <Row>
                        <Col>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Student Key" value={studentData.studkey} />
                            </div>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Student Name" value={studentData.studname} />
                            </div>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Subject Key" value={studentData.subkey} />
                            </div>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Grade" value={studentData.grade} />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Delete