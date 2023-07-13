import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import starIcon from "../../../assets/star.svg";
import React from "react";

const Testimonials = () => {

  const [data,empDataChange] =useState("")
  React.useEffect(()=>{
    const getRes = () => {
      fetch("https://backend.imagepluseyeclinic.com/api/testimonials")

      .then((res)=>{
          return res.json()
      }).then((resp)=>{
        console.log(resp.data);
          empDataChange(resp.data);
      }).catch((err)=>{
          console.log(err.message);
      }) 
     }
     getRes();
  

  },[])

  // const NextArrow = (props)=>{
  //   const {onClick}= props
  //   return(
  //      <div className="control-btns" onClick={onClick}>
  //       <button className="next">
  //           <i className="fa fa-arrow-right"></i>
  //       </button>
  //      </div>
  //   )
  // }

  // const PrevArrow = (props)=>{
  //   const {onClick}=props
  //   return(
  //       <div className="control-btns" onClick={onClick}>
  //           <button className="prev">
  //               <i className="fa fa-arrow-left"></i>
  //           </button>
  //       </div>
  //   )
  // }

  // const SlideCard = () => {
  //   const settings = {
  //     dots: false,
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     nextArrow: <NextArrow/>,
  //     prevArrow: <PrevArrow/>,
  //     appendDots: (dots) => {
  //       return <ul style={{ margin: "0px" }}>{dots}</ul>
  //     }
  //   }
  return (
    <div className="w-full pt-6 md:w-1/2">
      <div className="flex flex-col items-center mb-10">
        <h2 className="mb-3 text-center text-3xl text-[#333] font-bold uppercase md:text-4xl">
          Testimonials
        </h2>
        <div className="w-10 h-[3px] bg-[#f97729]" />
      </div>
      {/* <Slider {...settings}>  */}
      <Carousel
                     showThumbs={false}
                     showStatus={false}
                     preventMovementUntilSwipeScrollTolerance={true}
                     infiniteLoop={true}
                     autoPlay={true}
                     interval={5000}
                      >
      {
         data &&
          data.map((item)=>(
           <div className="mb-16 px-7 md:px-0 md:mb-24" key={item.id}>
              <div className="flex justify-center space-x-1 mb-2">
             <img
              className="w-4 h-4 md:w-6 md:h-6"
              src={starIcon}
               alt="Five Stars"
               />{item.stars}
                </div>
               
                      <div className="relative mx-3 px-4 pb-10 text-center">
                      <p className="mb-8 text-lg">
                      I was completely satisfied with my experience at Imageplus. The
              Staff and Doctors were not just kind but also professional. Thank
              you so much for saving my vision, Imageplus
                      </p>
                      
                      <p>{item.title}</p>
                      </div>
                 
                 </div>
              
             ))
            }
            </Carousel> 
            {/* </Slider> */}
            
       {/* <div className="mb-16 px-7 md:px-0 md:mb-24">
      //   <div className="flex justify-center space-x-1 mb-2">
      //     <img
      //       className="w-4 h-4 md:w-6 md:h-6"
      //       src={starIcon}
      //       alt="Five Stars"
      //     />
      //     <img
      //       className="w-4 h-4 md:w-6 md:h-6"
      //       src={starIcon}
      //       alt="Five Stars"
      //     />
      //     <img
      //       className="w-4 h-4 md:w-6 md:h-6"
      //       src={starIcon}
      //       alt="Five Stars"
      //     />
      //     <img
      //       className="w-4 h-4 md:w-6 md:h-6"
      //       src={starIcon}
      //       alt="Five Stars"
      //     />
      //     <img
      //       className="w-4 h-4 md:w-6 md:h-6"
      //       src={starIcon}
      //       alt="Five Stars"
      //     />
      //   </div>
      //   <Carousel
      //     showThumbs={false}
      //     showStatus={false}
      //     preventMovementUntilSwipeScrollTolerance={true}
      //     infiniteLoop={true}
      //     autoPlay={true}
      //     interval={5000}
      //   >
      //     <div className="relative mx-3 px-4 pb-10 text-center">
      //       <p className="mb-8 text-lg">
      //         I was completely satisfied with my experience at Imageplus. The
      //         Staff and Doctors were not just kind but also professional. Thank
      //         you so much for saving my vision, Imageplus
      //       </p>
      //       <p>Mathew Peter Okon</p>
      //     </div>

      //     <div className="relative mx-3 px-4 pb-10 text-center">
      //       <p className="mb-8 text-lg">
      //         I love the check ups in terms of making sure everything is fine by
      //         asking questions for better understanding of the eyes issue.
      //       </p>
      //       <p>Henry Kalu</p>
      //     </div>

      //     <div className="relative mx-3 px-4 pb-10 text-center">
      //       <p className="mb-8 text-lg">
      //         Simply the best and affordable eye clinic I've ever been to with
      //         competent Doctors and state-of-the-art equipment. The quality of
      //         glasses and customer service is excellent.
      //       </p>
      //       <p>Ikenna O. Elliot</p>
      //     </div>
      //   </Carousel>
      // </div> */} 

      <a className="flex justify-center text-2xl underline" href="/">
        View More Testimonials
      </a>
    </div>
  );
};

export default Testimonials;
