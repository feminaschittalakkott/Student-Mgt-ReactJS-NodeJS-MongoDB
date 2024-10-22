import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <>
        <Header />
            <div className='w-100 d-flex justify-content-center align-items-center' style={{height: '100vh', backgroundColor: 'lightgrey'}}>
                <div className='w-75'>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className='p-3'>
                                <h1 className='text-center'>Student Management System</h1>
                                <div className='d-grid d-flex justify-content-center align-items-center'>
                                <Link className='btn btn-success w-50 ' to={'/dash'}>Here we Go...</Link>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
      )
}

export default Landing