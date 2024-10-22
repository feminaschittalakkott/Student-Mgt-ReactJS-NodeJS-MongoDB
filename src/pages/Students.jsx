import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Add from './Add'
import Header from './Header'
import { getStudents } from '../services/apis'
import Edit from './Edit'
import Delete from './Delete'
import { Link } from 'react-router-dom'

function Students() {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([])
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        getStud()
    }, [])

    const getStud = async () => {
        const res = await getStudents()
        console.log(res)
        if (res.status == 200) {
            setStudents(res.data)
            setFilteredStudents(res.data);
        }
        else {
            console.log(res)
        }
    }

    const handleSearch = () => {
        let res = students.filter(student =>
            student.studname.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredStudents(res);
    };
    const resetSearch = () => {
        setSearch("");
        setFilteredStudents(students);
    };

    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
        let res = students;
        if (selectedFilter === "pass") {
            res = res.filter(student => student.grade >= 75);
        } else if (selectedFilter === "fail") {
            res = res.filter(student => student.grade < 75);
        }

        if (search) {
            res = res.filter(student =>
                student.studname.toLowerCase().includes(search.toLowerCase())
            );
        }

        setFilteredStudents(res);
    }

    return (
        <>
            <Header />
            <div className='w-100 d-flex justify-content-center align-items-center' style={{ height: '100vh', backgroundColor: 'lightgrey' }}>
                <div className='w-75' style={{ height: '90vh', backgroundColor: 'white' }}>
                    <Row>
                        <Col xs={12} md={12}>
                            <div className='p-3'>
                                <h1 className='text-center mt-2'>All Students</h1>
                                <div className='d-flex justify-content-between'>
                                    <Add refreshStudents={getStud} />
                                    <Link to={'/dash'}>Home</Link>
                                </div>
                            </div>
                            <div className='d-flex w-50 p-3'>
                                <input type="text" className='form-control' placeholder='Search by student name...' onChange={(e) => setSearch(e.target.value)} />
                                <button className='btn btn-success me-4' onClick={handleSearch}>Search</button>
                            </div>
                            <div className='d-flex justify-content-between p-3'>
                                <div>
                                    <span>Filter by: </span>
                                    <button className={`btn ${filter === "all" ? 'btn-primary' : 'btn-light'}`} onClick={() => handleFilterChange("all")}>All</button>
                                    <button className={`btn ${filter === "pass" ? 'btn-primary' : 'btn-light'}`} onClick={() => handleFilterChange("pass")}>Pass</button>
                                    <button className={`btn ${filter === "fail" ? 'btn-primary' : 'btn-light'}`} onClick={() => handleFilterChange("fail")}>Fail</button>
                                </div>
                            </div>
                            <div className='p-3 mt-2'>

                                <table className='table bordered'>
                                    <thead>
                                        <th>Student Key</th>
                                        <th>Student Name</th>
                                        <th>Subject Key</th>
                                        <th>Student Grade</th>
                                        <th>Remarks</th>
                                        <th>Actions</th>
                                    </thead>
                                    <tbody>
                                        {
                                            filteredStudents.length > 0 ?
                                                filteredStudents.map(i => (
                                                    <tr>
                                                        <td>{i.studkey}</td>
                                                        <td>{i.studname}</td>
                                                        <td>{i.subkey}</td>
                                                        <td>{i.grade}</td>
                                                        <td className={i.grade >= 75 ? 'text-success' : 'text-danger'}>
                                                            {i.grade >= 75 ? 'PASS' : 'FAIL'}
                                                        </td>
                                                        <Edit stud={i} refreshStudents={getStud} />
                                                        <Delete stud={i} refreshStudents={getStud} />
                                                    </tr>
                                                ))
                                                :
                                                <tr>
                                                    <td className='text-danger text-center' colSpan={5}>No data !!!</td>
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

export default Students