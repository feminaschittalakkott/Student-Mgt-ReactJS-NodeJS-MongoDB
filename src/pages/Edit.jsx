import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { updateStudents } from '../services/apis';

function Edit({stud, refreshStudents}) {

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

    const handleUpdate = async() => {
        console.log(studentData);
        const { studname, subkey, grade } = studentData;
        if (!studname || !subkey || !grade) {
            toast.warning('Please fill all the fields');
        }
        else{
            const id = stud._id
            const data = { studname, subkey, grade }
            const res = await updateStudents(id, data)
            console.log(res)
            if (res.status == 200) {
                toast.success("Student Updated!")
                refreshStudents()
                handleClose()
            }
            else {
                toast.error("Student Updating Failed!!!")
            }
        }
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn' onClick={handleShow}><i className="fa-regular fa-pen-to-square fa-xl" /></button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Student</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-light'>
                    <Row>
                        <Col>
                        <div>
                                <input className='form-control mb-3' type="text" placeholder="Student Key" disabled value={studentData.studkey} onChange={(e) => setStudentData({ ...studentData, studkey: e.target.value })} />
                            </div>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Student Name" value={studentData.studname} onChange={(e) => setStudentData({ ...studentData, studname: e.target.value })} />
                            </div>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Subject Key" value={studentData.subkey} onChange={(e) => setStudentData({ ...studentData, subkey: e.target.value })} />
                            </div>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Grade" value={studentData.grade} onChange={(e) => setStudentData({ ...studentData, grade: e.target.value })} />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit