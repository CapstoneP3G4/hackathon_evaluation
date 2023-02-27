import { MDBCardBody, MDBBtn, MDBRow, MDBCard } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ShowUsers() {

    const [user, setUser] = useState([]);
    const [team,setTeam] = useState([]);

    useEffect(() => {
        axios.get('/getUsers')
            .then(response => {
                setUser(response.data);
                // console.log("this is user data" + user);

            }, (error) => {
                console.log(error);
            });
    }, [user]);

    useEffect(() => {
        axios.get('/getTeam')
            .then(response => {
                setTeam(response.data);
                console.log(team);

            }, (error) => {
                console.log(error);
            });
    }, []);


    /////////////////////////////////////delete entry from data base////////////////////////////////////////
    const handleDelete = (id) => {

        axios.delete(`/deleteUser/${id}`)
        .then((response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });

    }

    const panelistRows = user.map((info) => {
        if (info.role_id === 2) {
            return (
                <tr>
                    <td>{info.email}</td>
                    <td>{info.name}</td>
                    <td><MDBBtn onClick={(e)=>handleDelete(info.id)} className='me-1' color='danger' >Delete</MDBBtn></td>
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
                    <td><MDBBtn onClick={(e)=>handleDelete(info.id)}className='me-1' color='danger' >Delete</MDBBtn></td>
                </tr>
            );
        }
    });
    // console.log(info);
    const participentRows = team.map((team) => {
            return (
                <tr>
                    <td>{team.teamId}</td>
                    <td>{team.teamName}</td>
                    <td>{team.status}</td>
                    {/* <td><MDBBtn onClick={(e)=>handleDelete(info.id)} className='me-1' color='danger' >Delete</MDBBtn></td> */}
                </tr>
            );
    });

    const myStyle = {
        color: 'red'
    }
    return (
        <>
            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-8'>
                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Panelist table</h4>
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>{panelistRows}</tbody>
                        </table>


                    </MDBCardBody>
                </MDBCard>
            </MDBRow>

            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-8'>
                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Judge table</h4>
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Name</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>{judgeRows}</tbody>
                        </table>


                    </MDBCardBody>
                </MDBCard>
            </MDBRow>

            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-8'>
                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Team table</h4>
                        <table className="table table-stripped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>{participentRows}</tbody>
                        </table>
                    </MDBCardBody>
                </MDBCard>
            </MDBRow>
            </>
    )
}

export default ShowUsers;