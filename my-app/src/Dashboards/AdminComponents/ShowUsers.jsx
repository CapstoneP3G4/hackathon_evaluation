import { MDBCardBody, MDBTable, MDBBtn, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar2 from '../../Components/Navbar2';
import { Popconfirm } from 'antd';
import { style } from '@mui/system';

function ShowUsers() {

    const [user, setUser] = useState([]);
    const [team, setTeam] = useState([]);
    const [deleted, setDeleted] = useState(false);


    /////////////////////api calls//////////////////////
    useEffect(() => {
        axios.get('/getUsers')
            .then(response => {
                setUser(response.data);
                setDeleted(false);
            }, (error) => {
                console.log(error);
            });
    }, [deleted]);

    useEffect(() => {
        axios.get('/getTeam')
            .then(response => {
                setTeam(response.data);
                setDeleted(false);
            }, (error) => {
                console.log(error);
            });
    }, [deleted]);


    /////////////////////////////////////delete entry from data base////////////////////////////////////////

    const handleDelete = (id) => {

        axios.delete(`/deleteUser/${id}`)
            .then((response) => {
                console.log(response);
                setDeleted(true);
            }, (error) => {
                console.log(error);
            });

    }
    const data = user;
    console.log(data);
    const panelistRows = user.map((info) => {
        if (info.role_id === 2) {
            return (
                <tr>
                    <td>{info.email}</td>
                    <td>{info.name}</td>
                    <td>
                            <Popconfirm title="Delete"
                                description="Are you sure you want to delete the Panelist?"

                                okText="Confirm" cancelText="Cancel" onConfirm={(e) => handleDelete(info.id)} >
                                <MDBBtn className='me-1' color='danger' >Delete</MDBBtn>
                            </Popconfirm>
                    </td>

                    {/* <td><MDBBtn onClick={(e) => handleDelete(info.id)} className='me-1' color='danger' >Delete</MDBBtn></td> */}
                </tr>
            );
        }
    });
    const judgeRows = user.map((info) => {
        if (info.role_id === 3) {
            return (
                <tr>
                    <td>{info.email}</td>
                    <td>{info.name}</td>
                    <td>
                            <Popconfirm title="Delete"
                                description="Are you sure you want to delete the Judge?"

                                okText="Confirm" cancelText="Cancel" onConfirm={(e) => handleDelete(info.id)} >
                                <MDBBtn className='me-1' color='danger' >Delete</MDBBtn>
                            </Popconfirm>
                    </td>
                </tr>
            );
        }
    });
    const participentRows = team.map((team) => {
        return (
            <tr>
                <td>{team.teamId}</td>
                <td>{team.teamName}</td>
                <td>{team.status}</td>
                <td>{team.marks}</td>
            </tr>
        );
    });

    return (
        <>
            <Navbar2 />
            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-8'>
                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2 ">Panelist table</h4>
                        <MDBTable bordered borderColor="primary" className="text-break">
                            <thead>
                                <tr>
                                    <th style={{width:"33%"}}>Email</th>
                                    <th style={{width:"33%"}}>Name</th>
                                    <th style={{width:"33%"}}>Action</th>
                                </tr>
                            </thead>
                            <tbody>{panelistRows}</tbody>
                        </MDBTable>


                    </MDBCardBody>
                </MDBCard>
            </MDBRow>

            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-8'>
                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Judge table</h4>
                        <MDBTable bordered borderColor="primary" className="text-break">
                            <thead>
                                <tr>
                                    <th style={{width:"33%"}}>Email</th>
                                    <th style={{width:"33%"}}>Name</th>
                                    <th style={{width:"33%"}}>Action</th>
                                </tr>
                            </thead>
                            <tbody>{judgeRows}</tbody>
                        </MDBTable>


                    </MDBCardBody>
                </MDBCard>
            </MDBRow>

            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-8'>
                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Team table</h4>
                        <MDBTable bordered borderColor="primary" className="text-break">
                            {/* <table className="table table-stripped"> */}
                            <thead>
                                <tr>
                                    <th style={{width:"10%"}}>Id</th>
                                    <th style={{width:"30%"}}>Name</th>
                                    <th style={{width:"30%"}}>Status</th>
                                    <th style={{width:"30%"}}>Marks</th>
                                </tr>
                            </thead>
                            <tbody>{participentRows}</tbody>
                        </MDBTable>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
        </>
    )
}

export default ShowUsers;