import { validation, MDBListGroup, MDBListGroupItem, MDBTextArea, MDBValidationItem, inputGroup, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdown, MDBValidation, MDBContainer, MDBCardBody, MDBCol, MDBRow, MDBCard, MDBBtn, MDBRadio, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from 'react';
import axios from 'axios';


function AddDomain() {
    const [errors, serErrors] = useState({});
    const [domains, setDomains] = useState({
        domainName: '',
    })
    const [domainData,setDomainData] = useState([]);



    /////////////////////////////Connect to server/////////////////////////////////////////////
    const [submitted, setSubmited] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitted) {
            // console.log(domains);
            axios.post('/domain', domains)
                .then((response) => {
                    // console.log(response);
                    setDomainData([...domainData, domains.domainName]);
                }, (error) => {
                    console.log(error);
                });

        }
        else{
            setSubmited(false);
        }
    }, [errors,submitted]);


    ///////////////////////////////////show domain data///////////////////////////////////////
   

    useEffect(() => {
        axios.get('/getDomain')
            .then(response => {
                // console.log("this  is responsedata" + response.data);
                setDomainData(response.data);
                // console.log("this is domain data"+domainData ) ;
                
            }, (error) => {
                console.log(error);
            });
    }, [domainData]);

    
    const dropdownData = domainData.map((info) => {
        return (
            <MDBListGroupItem>{info.domainName}</MDBListGroupItem>   
        )
    });

    ////////////////////////////////////////////////////////////////////////////////////////////


    const handleAdd = (e) => {
        e.preventDefault();
        serErrors(validate(domains));
        setSubmited(true);
    }

    const handleInput = (e) => {
        const { id, value } = e.target;
        setDomains({ ...domains, [id]: value });
    }

    const validate = (domains) => {
        const errorsObj = {};
        if (!domains.domainName) {
            errorsObj.domainName = 'Write a domain name';
        }
        return errorsObj;
    }


    const myStyle = {
        color: 'red'
    }
    return (
        <>
            <MDBRow className='justify-content-center align-items-center m-5'>
                <MDBCard>
                    <MDBCardBody className='px-8'>

                        <h4 className="fw-bold mb-2 pb-2 pb-md-0 mb-md-2">Add Domain</h4>

                        <MDBRow className='align-items-center pt-0 '>
                            <MDBCol md='4' >
                                <MDBInput id="domainName" value={domains.domainName} onChange={(e) => handleInput(e)} wrapperClass='mb-2' required className='col-md-4' label='Domain' size='md' type='text' />
                                <p style={myStyle}>{errors.domainName}</p>
                            </MDBCol>

                            {/* sbow doamin list */}
                            <MDBCol md='4' >
                                <MDBListGroup style={{ overflow: "hidden", overflowY: "scroll", maxHeight: "200px", minWidth: '22rem' }}>
                                    {dropdownData}
                                </MDBListGroup>
                            </MDBCol>
                        </MDBRow>


                        <div className='col-12 '>
                            <MDBBtn onClick={handleAdd} >Add</MDBBtn>
                        </div>

                    </MDBCardBody>
                </MDBCard>

            </MDBRow></>
    )
}

export default AddDomain;