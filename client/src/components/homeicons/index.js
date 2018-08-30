import React from "react";
import Zoom from "react-reveal/Zoom";

const Icons = () => {
  return (
    <React.Fragment>
      <section id="home-icons" className="py-5">
        <div className="container">
          <div className="row">
            <Zoom>
              <div className="col-md-4 mb-4 text-center">
                <i className="fa fa-tree mb-2" />
                <h3>True Escape</h3>
                <p>
                  We will customize and design your Escape to fit your specific
                  needs and taste.
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <i className="fa fa-cloud mb-2" />
                <h3>Relaxing Escape</h3>
                <p>
                  Add the elements that work for your space we will walk you
                  through your space, to get the Escape of your dreams.
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <i className="fa fa-burn mb-2" />
                <h3>Family Escape</h3>
                <p>
                  The Escape that we will design for you will be something you
                  and your family will enjoy.
                </p>
              </div>
            </Zoom>
          </div>
        </div>
      </section>

      <section id="home-heading" className="p-5">
        <div className="dark-overlay">
          <div className="row">
            <div className="col">
              <div className="container pt-5">
                <h1 className="home-heading-title">Are You Ready To Escape?</h1>
                <p className="d-none d-md-block">
                  Bring the party outdoors and enjoy a new extension of your
                  home with fully custom outdoor kitchens by Escapes!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Icons;
