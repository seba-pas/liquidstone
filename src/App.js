
import React from "react";
import Header from "./components/Header/Header";
import Title from "./components/title/Title";
import './app.css'
import UpperBody from "./components/upperbody/UpperBody";
import AboutUs from "./components/about us/AboutUs";
import MESADA from './photos/mesada.png'


function App() {
  

  return (
   <>
   <Header />
   <Title/>
   <div style={{display: 'flex',flexDirection: 'row', width: '100vw', marginTop: '30px'}}>
   <AboutUs />
   <div style={{display: 'flex', justifyContent: 'center', alignSelf: 'center', alignContent: 'center', width: '100%' }}>
   <img src={MESADA} alt='trabajo' style={{width: '90%', height: '800px', margin: '20px', marginTop: '60px', objectFit: 'cover'}} />

   </div>

   </div>
  

  
  
   {/* <UpperBody /> */}
   </>
  );
}

export default App;
