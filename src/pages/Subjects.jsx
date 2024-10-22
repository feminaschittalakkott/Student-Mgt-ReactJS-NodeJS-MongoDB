import React, { useState, useEffect } from 'react'
import Header from './Header'
import { Row, Col } from 'react-bootstrap'
import AddSub from './AddSub'
import { getSubjects } from '../services/apis'

function Subjects() {

    const [sub, setSub] = useState([])

    useEffect(() => {
        getSub()
    }, [])

    const getSub = async () => {
        const res = await getSubjects()
        console.log(res)
        if (res.status == 200) {
            setSub(res.data)
        }
        else {
            console.log(res)
        }
    }

    return (
        <>
            <Header />
            <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: 'lightgrey' }}>
                <div className='w-75' style={{ height: '80vh', backgroundColor: 'white' }}>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className='p-3'>
                                <h1 className='text-center mt-2'>Subjects</h1>
                                <AddSub />
                            </div>

                            <div className='p-3'>
                                <table className='table bordered'>
                                    <thead>
                                        <th>Subject Key</th>
                                        <th>Subject</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody>
                                        {
                                            sub.length > 0 ?
                                                sub.map(i => (
                                                    <tr>
                                                        <td>{i.subjectkey}</td>
                                                        <td>{i.subjectname}</td>
                                                        <td></td>
                                                    </tr>
                                                ))
                                                :
                                                <tr>
                                                    <td className='text-danger text-center' colSpan={2}>No data !!!</td>
                                                </tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Subjects