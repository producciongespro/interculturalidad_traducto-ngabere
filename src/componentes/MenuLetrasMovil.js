import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import palabras from '../data/palabras.json';

function MenuLetrasMovil(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 6
        }
      }; 
    return (
        <React.Fragment> 
            <div className="col-1"></div>
            <div className="col-10 letrasMovil">
            <Carousel 
                responsive={responsive}  
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                itemClass="carousel-item-padding-40-px"
                >
            {
                palabras.map((item,i)=>(
                <button className="parMovil img-fluid" onClick={props.handleObtenerPorLetra} key={i} id={item.letra} >{item.letra}</button>
                ))
            }
            
            </Carousel>
            </div>
            <div className="col-1"></div>
        </React.Fragment>
      );
  }
  export default  MenuLetrasMovil;