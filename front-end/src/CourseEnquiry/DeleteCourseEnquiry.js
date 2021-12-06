// import { useState, useEffect } from "react";
// import { useParams } from "react-router";

// import axios from "axios";

// function DeleteCourseEnquiry(props) {


//     const [staff, setCourseEnquiry] = useState([])
//     const { staffId } = useParams()
//     useEffect(() => {
//         console.log('The use effect hook has been executed');
//         axios
//             .delete(`http://localhost:5001/course_enquirys/${props.course_enquiryId}`)
//             .then(response => {
//                 console.log('promise fulfilled')
//                 console.log(response)
//                 setCourseEnquiry(response.data)
//             })
//     }, [])
//     
//     return (<>


//     </>)
// }

// export default DeleteCourseEnquiry;