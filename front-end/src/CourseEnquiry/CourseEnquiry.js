import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function CourseEnquiry(props) {

    const navigate = useNavigate()

    console.log(props)
    return (
        <>
            <div className='details'>
                <div className='details1'>
                    <h2>{props.details.enquirer_name}</h2>
                </div>
                <div className='details1'>
                    <button>
                        <Link to={`/courseenquirydetails/${props.details.course_enquiryId}`}>
                            Detailed View
                        </Link>
                    </button>
                </div>
            </div>
        </>
    )
}
export default CourseEnquiry
