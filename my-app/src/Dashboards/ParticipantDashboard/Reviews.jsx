import "react-datepicker/dist/react-datepicker.css";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";

const Card = ({ reviews }) => {
  return (
    <div className="ideaCard">
      <MDBRow>
        <MDBCol md="4">
          <h4 className="fw-bold">Reviews from the Panelist</h4>
        </MDBCol>
        <MDBCol md="12">
          {/* {console.log(reviews)} */}
          <h6 className="">{reviews}</h6>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
function Reviews({obj}) {
  // const data = [
  //   {
  //     reviews:
  //       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, illo nobis animi repellat minima sunt eum dicta amet ducimus, a neque veritatis voluptate modi id totam necessitatibus, eligendi voluptates? Sint sequi consequatur veniam officia unde blanditiis voluptas repudiandae tenetur nulla amet in eius ipsum soluta suscipit aliquam quo iusto, voluptatum dolores voluptates illo cupiditate ea omnis ex dolorem! Aut expedita, a ut placeat architecto atque est, necessitatibus reiciendis laborum totam, distinctio non libero consectetur quos voluptates cum illo dolore itaque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, illo nobis animi repellat minima sunt eum dicta amet ducimus, a neque veritatis voluptate modi id totam necessitatibus, eligendi voluptates? Sint sequi consequatur veniam officia unde blanditiis voluptas repudiandae tenetur nulla amet in eius ipsum soluta suscipit aliquam quo iusto, voluptatum dolores voluptates illo cupiditate ea omnis ex dolorem! Aut expedita, a ut placeat architecto atque est, necessitatibus reiciendis laborum totam, distinctio non libero consectetur quos voluptates cum illo dolore itaque!",
  //   },
  // ];
  return (
    <div className="cards">
      {/* <h3 className="fw-bold mb-0 pb-0 pb-md-0 mb-md-4 ">Problem Statement</h3> */}
      <MDBRow>
          <MDBCol md="12" >
            <Card userObj={obj?.description} />
          </MDBCol>
      </MDBRow>
    </div>
  );
}
export default Reviews;
