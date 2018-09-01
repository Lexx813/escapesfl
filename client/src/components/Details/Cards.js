import React from "react";

import cardpic1 from "../../images/servicecards/backyards2.jpg";
import cardpic2 from "../../images/servicecards/fireplace.png";
import cardpic5 from "../../images/servicecards/pergola.png";
import cardpic3 from "../../images/servicecards/Kitchens.jpg";
import cardpic4 from "../../images/servicecards/pools.jpg";

const Cards = () => {
  return (
    <div className="cards__wrapper container-fluid  ">
      <div className="row">
        <div className="col-sm  ">
          <div className="">
            <img className="card-img-top img_size " src={cardpic1} alt="" />
            <div className="card-body">
              <h4 className="card-title">Landscapes</h4>
              <p className="card-text">
                When you come home from a days hard work, or something feel
                proud and invite your family and friends to Escape along with
                you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className=" ">
            <img className="card-img-top img_size  " src={cardpic2} alt="" />
            <div className="card-body">
              <h4 className="card-title">Firepits</h4>
              <p className="card-text">
                Cold day? No need to go camping to spark up a fire Escape right
                in your home lets get those marshmallows burning right out in
                your backyard.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="">
            <img className="card-img-top img_size " src={cardpic3} alt="" />
            <div className="card-body">
              <h4 className="card-title">Outdor Kitchen</h4>
              <p className="card-text">
                Customizing the details of your outdoor kitchen to your specific
                needs; we work to capture your vision and translate it into your
                new Escape.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className=" ">
            <img className="card-img-top img_size " src={cardpic4} alt="" />
            <div className="card-body">
              <h4 className="card-title">Pool area</h4>
              <p className="card-text">
                Customize, design and pave your pool area to be an Escape you
                deserve, Just imagine paradise in you backyard.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className=" " >
            <img className="card-img-top img_size " src={cardpic5} alt="" />
            <div className="card-body">
              <h4 className="card-title">Pergola</h4>
              <p className="card-text">
                Escape into the shade and design your own custom Pergola.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
