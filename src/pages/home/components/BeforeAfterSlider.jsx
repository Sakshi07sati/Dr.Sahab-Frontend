import React from "react";
import ReactCompareImage from "react-compare-image";


const BeforeAfterSlider = () => {
  const before =
    "https://demo.awaikenthemes.com/denture/wp-content/uploads/2025/09/transformation-img-after-3.jpg";

  const after =
    "https://demo.awaikenthemes.com/denture/wp-content/uploads/2025/09/transformation-img-before-3.jpg";

  return (
    <div className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto ">
        <div>
          <h2 className="text-5xl font-extrabold text-primary text-center">Before & After Result</h2>
          <p className="text-center text-lg text-gray-500 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
         <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <ReactCompareImage leftImage={"https://demo.awaikenthemes.com/denture/wp-content/uploads/2025/09/transformation-img-after-2.jpg"} rightImage={"https://demo.awaikenthemes.com/denture/wp-content/uploads/2025/09/transformation-img-before-2.jpg"} />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <ReactCompareImage leftImage={"https://brijdentalclinic.com/wp-content/uploads/2018/07/2-1024x573-1200x800_c.jpg"} rightImage={"https://brijdentalclinic.com/wp-content/uploads/2018/07/71-1024x648-1200x800_c.jpg"} />
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <ReactCompareImage  leftImage={'https://demo.awaikenthemes.com/denture/wp-content/uploads/2025/09/transformation-img-before-5.jpg'} rightImage={'https://demo.awaikenthemes.com/denture/wp-content/uploads/2025/09/transformation-img-after-5.jpg'} />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <ReactCompareImage leftImage={'https://brijdentalclinic.com/wp-content/uploads/2018/07/2-2-1200x800_c.jpg'} rightImage={'https://brijdentalclinic.com/wp-content/uploads/2018/07/10-2-1200x800_c.jpg'} />
        </div>
       
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <ReactCompareImage leftImage={"https://brijdentalclinic.com/wp-content/uploads/2018/07/Grayish-White-Teeth.jpg"} rightImage={"https://brijdentalclinic.com/wp-content/uploads/2018/07/After-Emax-Veneer..jpg"} />
        </div>
       </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
