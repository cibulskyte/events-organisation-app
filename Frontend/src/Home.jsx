// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import img1 from "/src/images/main.jpeg";
// import './Home.css';
// import WorkCard from "./components/WorkCard";
// import img2 from "//components/images/wedding.webp";



// const Home = () => {
//     return (
//         <>
//         <Header/>
//       <main>
//         <div className="container">
//     <div className="about-us-container">
//         <div className="top-container">
//         <h4>Welcome to event organisation company</h4>
//         <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, laudantium!</span>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt iure deleniti corrupti consequuntur, qui impedit quod provident rem illum delectus, expedita repellendus atque eius blanditiis, hic ex alias sequi esse incidunt. Officiis dolor iste iure, laboriosam tenetur ratione fuga. Fuga facilis pariatur amet nemo? Eos numquam iste voluptas. Ratione quia id delectus impedit tenetur excepturi est molestias laudantium, ullam molestiae doloribus qui perspiciatis! Eveniet velit sapiente fugit at magnam animi, laboriosam voluptate ipsam illo illum. Magni maiores unde similique exercitationem iusto omnis animi. Id, delectus veniam, amet ipsa nulla odit hic rerum illo vel doloremque, sit nobis! Facere, earum nam.</p>
//        </div>
//        <div className="bottom-container">
//         <img src={img1} alt="flowers"/>
//        </div>
//         </div>
// <div className="works-container">
//     <h4>Our past works</h4>
//     <span>Our latest and greatest</span>
// </div>
// </div>
//       </main>
//         <Footer/>
//         </>
//     )
// }

// export default Home;


// Home.jsx



import React from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import Footer from "./components/Footer";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const HomePage = () => {
  return (
    <>
    <Header/>
    <Container>
      <h2>Welcome to our Organization App!</h2>
    </Container>
    <Footer/>
    </>
  );
};

export default HomePage;
