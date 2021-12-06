import './home.css'
function Home() {
    var head = {
        padding: 20,
        background: 'burlywood',
        fontSize: 20,
        padding: 20,
        margin: 20


    }
    return (
        <>
            <section className="py-8">
                <div className="container text-center">
                    <img className="img-fluid" src="https://m.foolcdn.com/media/the-blueprint/images/GettyImages-1245953309.original.jpg" alt="" data-removed="true" />

                </div>
            </section>

            <section className="py-8">

                <div className="container text-center">
                    <div className="card-group">
                        <div className="card" style={{ 'border': 'white' }}>
                            <div className="card-body">
                                <h4 className="card-title">Consult For Training</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe distinctio non laboriosam aspernatur quae
                                    explicabo cupiditate eveniet, commodi neque? Facere porro exercitationem voluptatibus placeat! Delectus at id
                                    quaerat voluptate ipsa optio, quod rerum inventore voluptatibus, cupiditate non ab qui quas enim asperiores officiis
                                    repellendus aliquid unde iste possimus, debitis autem.</p>
                            </div>
                        </div>
                        <div className="card" style={{ 'border': 'white' }}>
                            <div className="card-body">
                                <h4 className="card-title">Courses and Resource Enquiry</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe distinctio non laboriosam aspernatur quae
                                    explicabo cupiditate eveniet, commodi neque? Facere porro exercitationem voluptatibus placeat! Delectus at id
                                    quaerat voluptate ipsa optio, quod rerum inventore voluptatibus, cupiditate non ab qui quas enim asperiores officiis
                                    repellendus aliquid unde iste possimus, debitis autem. </p>
                            </div>
                        </div>
                        <div className="card" style={{ 'border': 'white' }}>
                            <div className="card-body">
                                <h4 className="card-title">Career Counselling</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe distinctio non laboriosam aspernatur quae
                                    explicabo cupiditate eveniet, commodi neque? Facere porro exercitationem voluptatibus placeat! Delectus at id
                                    quaerat voluptate ipsa optio, quod rerum inventore voluptatibus, cupiditate non ab qui quas enim asperiores officiis
                                    repellendus aliquid unde iste possimus, debitis autem.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="py-8">
                <div className="container text-center">
                    {/* <h2 className="mb-4">Learn Without Limits</h2>
                        <p className="lead mb-5">Thank You For Reaching Out. We will contact you soon ...</p> */}
                    <div>

                        <div className="row align-items-center text-md-right mb-5">
                            <div className="col-md-6 order-1">
                                <img className="img-fluid" src="https://m.foolcdn.com/media/the-blueprint/images/GettyImages-1245953309.original.jpg" alt="" data-removed="true" />
                            </div>
                            <div className="col-md-6 mb-4 mb-md-0 order-0" data-removed="true">
                                <span className="display-3 mb-2">Our Vision</span>
                                <h3 className="mb-4">Learn without Limits</h3>
                                <p>We want to make sure that you can keep using the software that you use to manage your business.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="py-2">
                <div className="container text-center">
                    {/* <div className="col-md-6 mb-4 mb-md-0 order-1" data-removed="true"> */}
                    <span className="display-3 mb-2">Our Achievements</span>
                    <h3 className="mb-4">Success has no ending</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti saepe distinctio non laboriosam aspernatur quae
                        explicabo cupiditate eveniet, commodi neque? Facere porro exercitationem voluptatibus placeat! Delectus at id
                        quaerat voluptate ipsa optio, quod rerum inventore voluptatibus, cupiditate non ab qui quas enim asperiores officiis
                        repellendus aliquid unde iste possimus, debitis autem. Reprehenderit amet voluptatem quos quibusdam asperiores
                        possimus sed consectetur quae dolorem voluptates. Obcaecati culpa repudiandae sapiente unde excepturi? Nostrum
                        voluptas alias facilis suscipit eveniet ipsa mollitia non pariatur dolores ullam dolor magni soluta voluptatem
                        expedita itaque quod, aspernatur sint! Qui excepturi voluptatum saepe dolorem.
                    </p>
                    {/* </div> */}


                </div>
            </section>



            

        </>
    )
}
export default Home;
