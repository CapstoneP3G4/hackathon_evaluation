import { MDBCardBody, MDBCol, MDBRow, MDBCard, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


function AddJudges() {
    const [judges, setJudges] = useState({
        name: '',
        email: '',
        mobile: '',
        role_id: '',
        password: '',
    });

    const [errors, serErrors] = useState({});
    const [submitted, setSubmited] = useState(false);



    /////////////////////////////Connect to server/////////////////////////////////////////////
    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitted) {
            axios.post('/user', judges)
                .then((response) => {
                    // console.log(response);
                    if (judges.role_id === 2) {
                        Swal.fire(
                            'Great',
                            'Panelist added successfully!',
                            'success'
                        )
                        setJudges({...judges,name: '',email: '',mobile: '',role_id: '',password: ''});
                    }
                    else if (judges.role_id === 3) {
                        Swal.fire(
                            'Great',
                            'Judge added successfully!',
                            'success'
                        )
                    }

                }, (error) => {
                    Swal.fire({icon: 'error',title: 'Oops...',text: 'Something went wrong!',
                    })
                });

        }
        else {
            setSubmited(false);
        }

    }, [errors, submitted]);

    const handleSubmit = (e) => {
        e.preventDefault();
        serErrors(validate(judges));
        setSubmited(true);
    }

    const handleInput = (e) => {
        const { id, value } = e.target;
        setJudges({ ...judges, [id]: value });

    }


    const myStyle = {
        color: 'red'
    }

    const handleRole = (e) => {
        const x = e.target.value;
        setJudges({ ...judges, role_id: parseInt(x) });
    }

    const validate = (judges) => {
        const errorsObj = {};
        const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i;
        // const regexPh = /^[0-9]{10}$/;
        const regexPh = /^\d{10}$/i;
        if (!judges.name) {
            errorsObj.name = 'Name is required';
        }
        if (!judges.email) {
            errorsObj.email = 'Email is required';
        }
        else if (!regex.test(judges.email)) {
            errorsObj.email = "This is not a valid email";
        }
        if (!judges.mobile) {
            errorsObj.mobile = 'Number is required';
        }
        else if (!regexPh.test(judges.mobile)) {
            errorsObj.mobile = "Enter valid phone number";
        }
        if (!judges.password) {
            errorsObj.password = 'Password is required';
        }
        else if (judges.password.length < 8) {
            errorsObj.password = 'Minimum password length is 8';
        }

        return errorsObj;
    }
    return (
        <>
            <MDBRow className='justify-content-center align-items-center m-5'>
                <h3 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-4 text-center ">Admin Dashboard</h3>
                <MDBCard>
                    <MDBCardBody className='px-8'>

                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Add new Judge/Panellist</h4>

                        <MDBRow className='align-items-center pt-0 '>
                            <MDBCol md='3' >
                                <MDBInput id="name" value={judges.name} onChange={(e) => handleInput(e)} wrapperClass='mb-2' required className='col-md-4' label='Name' size='md' type='text' />
                                <p style={myStyle}>{errors.name}</p>
                            </MDBCol>

                            <MDBCol md='3'>
                                <MDBInput id="email" value={judges.email} onChange={(e) => handleInput(e)} wrapperClass='mb-2' label='Email' size='md' type='email' required className='col-md-4' />
                                <p style={myStyle}>{errors.email}</p>
                            </MDBCol>

                            <MDBCol md='3'>
                                <MDBInput id="mobile" type="phone" value={judges.mobile} onChange={(e) => handleInput(e)} label='Phone number' required className='col-md-4' />
                                <p style={myStyle}>{errors.mobile}</p>
                            </MDBCol>

                            {/* /////////  password  ////////////////////////// */}

                            <MDBCol md='3' >
                                <MDBInput id="password" value={judges.password} onChange={(e) => handleInput(e)} label='Password ' type='password' />
                                <p style={myStyle}>{errors.password}</p>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className=' pb-md-2'>

                            <div onChange={(e) => handleRole(e)}  >
                                <input type="radio" value={2} name="role_id" /> Panelist
                                <input type="radio" value={3} name="role_id" style={{ marginLeft: "25px" }} /> Judge
                            </div>


                        </MDBRow>
                        <div className='col-12 '>
                            <MDBBtn onClick={handleSubmit} >Add</MDBBtn>
                        </div>

                    </MDBCardBody>
                </MDBCard>

            </MDBRow>

        </>
    )
}

export default AddJudges;