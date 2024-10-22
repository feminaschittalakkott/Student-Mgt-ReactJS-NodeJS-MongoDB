import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addSubjects } from '../services/apis';

function AddSub() {

    const [show, setShow] = useState(false);

    const [sub, setSub] = useState({
        subjectkey: "", subjectname: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddSubject = async () => {
        console.log(sub);
        const { subjectkey, subjectname } = sub;
        if (!subjectkey || !subjectname) {
            toast.warning('Please fill all the fields');
        }
        else {
            console.log(sub)
            const data = { subjectkey, subjectname }
            const res = await addSubjects(data)
            console.log(res)
            if (res.status == 200) {
                toast.success("Subject Added!")
            }
            else {
                toast.error("Failed to add subject")
            }
        }
    }

    return (
        <>
            <button className='btn btn-info' onClick={handleShow}>Add Subject <i className="fa-solid fa-plus" /></button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Subject</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-light'>
                    <Row>
                        <Col md={12} sm={12}>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Subject Key" onChange={(e) => setSub({ ...sub, subjectkey: e.target.value })} />
                            </div>
                            <div>
                                <input className='form-control mb-3' type="text" placeholder="Subject Name" onChange={(e) => setSub({ ...sub, subjectname: e.target.value })} />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddSubject}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddSub