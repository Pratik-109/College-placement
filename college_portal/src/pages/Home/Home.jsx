import NavBar from "../../componets/Navbar/Navbar";
import { Carousel } from 'react-bootstrap';
import Corousel1 from "../../Images/Corousel1.png";
import Footer from "../../componets/Footer/Footer";
import Stdsplace_Info from "./Stdsplace_Info";
import NewSletters from "../../Images/NewSletters.png";

function Home() {
    return (
        <>
            <NavBar />
            <Carousel className="custom-carousel">
                <Carousel.Item>
                    <img
                        className="d-block mx-auto img-fluid" // Add img-fluid class for responsiveness
                        src={Corousel1} // Adjust the height here
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto img-fluid" // Add img-fluid class for responsiveness
                        src={Corousel1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block mx-auto img-fluid" // Add img-fluid class for responsiveness
                        src={Corousel1} // Adjust the height here
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container mt-5">
      <div className="row">
        <div className="col-md-12 ">
          <div className="mt-4 mb-4">
            <h2 className="text-center mb-4"><b>Welcome to our college placement portal!</b></h2>
            <hr />
            <p>
              Designed to empower students in their career journey, our platform serves as a comprehensive hub for all things related to professional development and job placement.
              Through our portal, students gain access to a wide range of resources, including job listings from top recruiters, career guidance materials, skill-building workshops, and networking opportunities with industry professionals.

            </p>
        
            
            <p>
              Our user-friendly interface makes it easy for students to explore job opportunities, submit applications, and track their progress throughout the recruitment process. Additionally, personalized recommendations help students discover roles that align with their interests and qualifications.
          

              With the support of our dedicated team and robust features, our college placement portal is committed to helping students achieve their career aspirations and embark on fulfilling professional paths.
            
            </p>

            <p>

Our college placement portal is designed to empower students in their career journey, serving as a comprehensive hub for professional development and job placement. It offers a wide range of resources, including exclusive job listings from top recruiters, career guidance materials, skill-building workshops, and networking opportunities with industry professionals. The user-friendly interface makes it easy for students to explore job opportunities, submit applications, and track their progress throughout the recruitment process. Personalized recommendations help students discover roles that align with their interests and qualifications. Additionally, the portal features a comprehensive resource library with resume templates, cover letter guides, interview tips, and career planning articles. Students can participate in online workshops and webinars to develop essential skills such as communication, leadership, and technical proficiency, all led by experienced professionals and industry experts.
            </p>
            <p>
            The application tracking system allows students to manage their job search efficiently, with updates on application statuses and deadlines. Networking opportunities within the portal enable students to connect with industry professionals, enhancing their career prospects. With the support of our dedicated team and robust features, our college placement portal is committed to helping students achieve their career aspirations and embark on fulfilling professional paths.

            </p>
          </div>
          <hr />
        </div>
      </div>
   
    </div>
            <Stdsplace_Info/>


       

        <section class="newsletter">
<div class="container">

	
		
        <img
                className="img-fluid w-100"
                src={NewSletters}
                alt="First slide"

            />

</div>
</section>

            <Footer/>
        </>
    );
}

export default Home;
