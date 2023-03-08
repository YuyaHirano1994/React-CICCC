import React from "react";

const Button = () => {
  // <div class="button">
  // 			<div class="icon">
  // 				<i class="fa fa-instagram"></i>
  // 			</div>
  // 			<span>Instagram</span>
  // </div>

  const SocialNetworkingServices = ["Instagram", "Facebook", "Twitter", "LinkedIn", "YouTube", "Github"];

  return (
    <section>
      <div className="wrapper">
        {SocialNetworkingServices.map((sns) => (
          <>
            <div className="button">
              <div className="icon">
                <i className={`fa fa-${sns.toLowerCase()}`}></i>
              </div>
              <span>{sns}</span>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Button;
