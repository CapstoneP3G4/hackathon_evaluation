import { MDBContainer } from 'mdb-react-ui-kit';
// import 'react-datepicker/dist/react-datepicker.css';
import AddJudges from './AddJudges';
import CreateEvent from './CreateEvent';
import AddDomain from './AddDomain';
import { useState,useEffect } from 'react';
import ShowUsers from './ShowUsers';
import axios from 'axios';
import Navbar from '../../Components/Navbar';



function Admin() {


    return (
        <>
            <Navbar />
            <MDBContainer fluid>
                {/* //////////////////////add judges/////////////////// */}
                <AddJudges />

                {/* ///////////////////create event///////////////////////////// */}

                <CreateEvent />

                {/* /////////////////////////////add domain ///////////////////*/}

                <AddDomain />

                {/* ////////////////show alll */}
                <ShowUsers />
            </MDBContainer>
        </>
    )
}
export default Admin;