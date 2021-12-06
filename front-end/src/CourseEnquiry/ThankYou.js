import { Link } from "react-router-dom";

function ThankYou() {
    var head = {
        padding: 20,
        background: 'burlywood',
        fontSize: 20,
        padding: 20,
        margin: 20


    }
    return (
        <>
            <div >
                {/* <h1>Thank You For Reaching Out</h1>
                <p>We will contact you soon</p> */}
                <section class="py-5">
                    <div class="container text-center">
                        <h2 class="mb-4">Enquiry Fetched</h2>
                        <p class="lead mb-5">Thank You For Reaching Out. We will contact you soon ...</p>
                        <div>
                            <div class="row align-items-center text-md-left mb-5">
                                <div class="col-md-6 order-1 order-md-0">
                                    <img class="img-fluid" src="https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-v1.jpg" alt="" />
                                </div>
                                <div class="col-md-6 mb-4 mb-md-0">
                                    <span class="display-3 mb-2">01</span>
                                    <h3 class="mb-4">Fill Out Enquiry</h3>
                                    <p>Using our Piper Assistant application, you can move your data to be stored our decentralized network with simple drag &amp; drop.</p>
                                </div>
                            </div>
                            <div class="row align-items-center text-md-right mb-5">
                                <div class="col-md-6 order-1">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykVp_pHL3HAW7IA5ptZ9gDV80x5iORfrflA&usqp=CAU" alt="" data-removed="true" />
                                </div>
                                <div class="col-md-6 mb-4 mb-md-0 order-0" data-removed="true">
                                    <span class="display-3 mb-2">02</span>
                                    <h3 class="mb-4">Contact By Our Team</h3>
                                    <p>We want to make sure that you can keep using the software that you use to manage your business.</p>
                                </div>
                            </div>
                            <div class="row align-items-center text-md-left mb-5">
                                <div class="col-md-6 order-1 order-md-0">
                                    <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DlcAzpC4MLcXsHQJZEnKiIEzUAki0dngtA&usqp=CAU" alt="" data-removed="true" />
                                </div>
                                <div class="col-md-6 mb-4 mb-md-0" data-removed="true">
                                    <span class="display-3 mb-2">03</span>
                                    <h3 class="mb-4">Learn With Us</h3>
                                    <p>As with all innovative technologies, sometimes unpredictable things will happen, and you can always count on our support to solve issues for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ThankYou;
