import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Header from './Header'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <>
    <Header />
        <div className='w-100 d-flex justify-content-center align-items-center' style={{height: '100vh', backgroundColor: 'lightgrey'}}>
            <div className='w-75'>
                <Row>
                    <Col xs={12} md={12}>
                        <div className='p-3'>
                            <div className='d-flex justify-content-center align-items-center'>
                            <Link className='btn btn-secondary w-25 ' to={'/stud'}>Students Details</Link>&nbsp;&nbsp;
                            {/* <Link className='btn btn-info w-25 ' to={'/sub'}>Subjects</Link> */}
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    </>
  )
}

export default Dashboard