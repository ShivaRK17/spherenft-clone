"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaChevronRight, FaChevronLeft, FaCircle } from "react-icons/fa6";


const Carousal = ({ images }) => {
  return (
    <>
      <Carousel
        className="h-fit w-full"
        swipeable={false}
        showStatus={false}
        showArrows={true}
        draggable={false}
        infiniteLoop={true}
        autoPlay={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              className={`${hasPrev ? "absolute" : "hidden"
                } top-0 bottom-0 left-0 flex justify-center items-center p-3 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <FaChevronLeft className="w-8 h-8 bg-blue-700 rounded-full p-2 text-white" />
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              className={`${hasNext ? "absolute" : "hidden"
                } top-0 bottom-0 right-0 flex justify-center items-center p-3 cursor-pointer z-20`}
              onClick={clickHandler}
            >
              <FaChevronRight className="w-8 h-8 bg-blue-700 rounded-full p-2 text-white" />
            </div>
          );
        }}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <button
              className={`bg-black py-[7px] px-[5px] text-white ${index === 0 ? 'rounded-l-full' : ''} ${(index === images.length - 1) ? 'rounded-r-full' : ''}`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              <div className={`rounded-full ${isSelected ? 'bg-soft-cyan' : 'bg-[#b2f3f380]'} w-[8px] h-[8px]`}>
              </div>
            </button>
          );
        }}
      >
        {images.map((src, ind) => {
          // return <div key={ind} className="w-full flex justify-center items-center h-full">
          //   <div className="w-[80%] h-full">
          //     <img className=" w-[80%] object-cover" alt="car-img" src={src} />
          //   </div>
          // </div>
          return <div key={ind} className="w-full  flex  justify-center py-1">
            <div className="w-[calc(100%-200px)] flex flex-col p-5 rounded-2xl border-[1px] border-[#826a92] bg-[#14122799] backdrop-blur">
              <div className="rounded-xl overflow-hidden">
                <img src={src} className="w-full h-full object-cover" alt="" />
              </div>
              <div className="flex my-3 font-inter bg-gradient-to-r justify-between from-[#9390b747] via-[#9390b747] via-[90%] to-[#8f8cae0f] rounded-xl backdrop-blur-xl p-3 border-[1px] border-[#826a92]">
                <div className="flex flex-col text-left">
                  <h3 className="text-gray-400 text-sm">Minting</h3>
                  <p className="text-sm flex items-center"><FaCircle className="mr-3" color="lightgreen" size={10} /> Now</p>
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-gray-400 text-sm">Price</h3>
                  <p className="text-sm">0.009 ETH</p>
                </div>
                <div>

                </div>
              </div>
            </div>
          </div>
        })}
      </Carousel>
    </>
  );
};
export default Carousal;