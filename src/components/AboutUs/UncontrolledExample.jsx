import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer/Footer";

function UncontrolledExample() {
  return (
    <div className="footer">
      <Carousel>
        <Carousel.Item>
          <img
            style={{ maxWidth: "120vw", maxHeight: "700px" }}
            className="d-block w-100 "
            src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/m3-cs/2023/bmw-m3-cs-stage-teaser-02.png/jcr:content/renditions/cq5dam.resized.img.1680.large.time1673886859814.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="bmw">BMW M3 CS</h4>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxWidth: "100vw", maxHeight: "700px" }}
            className="d-block w-100"
            src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/mpp/2022/bmw-m2-mpp-stage-teaser.png/jcr:content/renditions/cq5dam.resized.img.1680.large.time1667926377643.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h4>BMW M4</h4>
            <p>895765</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxWidth: "100vw", maxHeight: "700px" }}
            className="d-block w-100"
            src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/fastlane/driving-experience/m-dex-22/00-home/header-slider/M-DEX_Header_HOME_Gutschein_Web.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1671094262566.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h4>BMW M5</h4>
            <p>65423GR</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
