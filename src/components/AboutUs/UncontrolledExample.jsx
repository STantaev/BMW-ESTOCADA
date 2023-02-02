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
            src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/m3-cs/2023/bmw-m3-cs-stage-teaser.png/jcr:content/renditions/cq5dam.resized.img.1680.large.time1673884311085.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h4 className="bmw">BMW M3</h4>
            <p>Тип: Снайперская винтовка.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxWidth: "100vw", maxHeight: "700px" }}
            className="d-block w-100"
            src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2022/m-sports-trophy-2022/bmw-m4-gt4-sebring-2022-stage-teaser.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1670842503728.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h4>BMW M4</h4>
            <p>Штурмавая винтовка</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ maxWidth: "100vw", maxHeight: "700px" }}
            className="d-block w-100"
            src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/topics/magazine-article-pool/2023/road-to-daytona/bmw-m-hybrid-v8-daytona-recap-stage-teaser.png/jcr:content/renditions/cq5dam.resized.img.1680.large.time1675086202945.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h4>BMW M5</h4>
            <p>65423GR</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
