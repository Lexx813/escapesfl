import React from "react";

const Icons = () => {
  return (
    <React.Fragment>
      <section className="section-features ">
        <div className="row">
          <div className="col-1-of-3 ">
            <div className="feature-box">
              <i className="fa fa-tree feature-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                True Escape
              </h3>
              <p className="feature-box__text">
                We will customize and design your Escape to fit your specific
                needs and taste.
              </p>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="feature-box">
              <i className="fa fa-cloud feature-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                Relaxing Escape
              </h3>
              <p className="feature-box__text">
                Add the elements that work for your space we will walk you
                through your space, to get the Escape of your dreams.
              </p>
            </div>
          </div>
          <div className="col-1-of-3  text-center">
            <div className="feature-box">
              <i className="fa fa-burn feature-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                Family Escape
              </h3>
              <p className="feature-box__text">
                The Escape that we will design for you will be something you and
                your family will enjoy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="home-heading" className="p-5">
        <div className="dark-overlay">
          <div className="row">
            <div className="col">
              <div className="container pt-5">
                <h1 className="home-heading-title">Are You Ready To Escape?</h1>
                <p className="">
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
