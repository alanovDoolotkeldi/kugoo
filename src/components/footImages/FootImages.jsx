import React from "react";

function FootImages() {
  return (
    <div className="foot-main">
      <div className="container">
        <div className="left-img">
          <img src="/public/assets/svg/footerlogo.svg" alt="" />

          <div className="left-img2">
            <img src="/public/assets/svg/market.svg" alt="" />
            <img src="/public/assets/svg/apple.svg" alt="" />
          </div>
        </div>

        <div className="right-img">
          <div className="right-img-main">
            <img src="/public/assets/svg/VK.svg" alt="" />
            <div className="img-text">
              <h3>Вконтакте</h3>
              <p>3 300</p>
            </div>
          </div>{" "}
          <div className="right-img-main">
            <img src="/public/assets/svg/inst.svg" alt="" />
            <div className="img-text">
              <h3>Instagram</h3>
              <p>10 602</p>
            </div>
          </div>{" "}
          <div className="right-img-main">
            <img src="/public/assets/svg/youtube.svg" alt="" />
            <div className="img-text">
              <h3>YouTube</h3>
              <p>3 603</p>
            </div>
          </div>{" "}
          <div className="right-img-main">
            <img src="/public/assets/svg/footerTele.svg" alt="" />
            <div className="img-text">
              <h3>Telegram</h3>
              <p>432</p>
            </div>
          </div>
          {/*         
          <div >
            <img src="/public/assets/svg/VK.svg" alt="" />
            <h1>Вконтакте</h1>
            <p>3 300</p>
          </div>
        
          <div className="right-img2">
            <img src="/public/assets/svg/inst.svg" alt="" />
            <h1>Instagram</h1>
            <p>10 602</p>
          </div>
        
          <div className="right-img3">
            <img src="/public/assets/svg/youtube.svg" alt="" />
            <h1>YouTube</h1>
            <p>3 603</p>
          </div>
        
          <div className="right-img4">
            <img src="/public/assets/svg/footerTele.svg" alt="" />
            <h1>Telegram</h1>
            <p>432</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default FootImages;
