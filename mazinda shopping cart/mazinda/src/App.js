import "./App.css";
import productImage from "./assets/images/banner img.png";
import rec2 from "./assets/images/ip.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faHeart,
  faCartShopping,
  faArrowLeft,
  faSearch,
  faStarHalfStroke,
  faStar,
  faArrowRight,
  faCircleDot,
  faGripLines,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function App() {
  const [productname, setProductName] = useState(
    "Iphone 14 Pro Max  (256 GB) (8 GB RAM)"
  );

  const [productImg, setProductImg] = useState(productImage);
  const [iconColor, setIconColor] = useState("black");
  const [icon1Color, setIcon1Color] = useState("#5597DA");
  const [icon2Color, setIcon2Color] = useState("black");

  const searchRef = useRef("");
  const handleSubmit = () => {
    console.log(searchRef.current.value);
  };

  const ImagerightHandler = () => {
    setProductImg(rec2);
    setIcon2Color("#5597DA");
    setIcon1Color("black");
    setIconColor("black");
  };
  const ImageleftHandler = () => {
    setProductImg(productImage);
    setIconColor("#5597DA");
    setIcon1Color("black");
    setIcon2Color("black");
  };

  return (
    <div className="App">
      <div className="header-nav">
        <span>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <div className="nav-search">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input
            type="text"
            ref={searchRef}
            onChange={handleSubmit}
            name="search"
            placeholder="search on mazinda"
          />
        </div>
        <span>
          <FontAwesomeIcon icon={faCartShopping} />
        </span>
      </div>
      <div className="product-details">
        <div className="main">
          <div className="product-images">
            <div className="product-image">
              <span className="icon2">
                <FontAwesomeIcon icon={faShare} />
              </span>
              <span className="icon4">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  onClick={ImageleftHandler}
                />
              </span>
              <img src={productImg} alt="product" className="pimg" />
              <span className="icon3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  onClick={ImagerightHandler}
                />
              </span>
              <span className="icon1">
                <FontAwesomeIcon icon={faHeart} color="red" />
              </span>

              <div className="icon-set">
                <FontAwesomeIcon
                  icon={faCircleDot}
                  color={icon2Color}
                  style={{ margin: 5 }}
                />
                <FontAwesomeIcon
                  icon={faGripLines}
                  color={icon1Color}
                  style={{ margin: 5 }}
                />

                <FontAwesomeIcon
                  icon={faCircleDot}
                  color={iconColor}
                  style={{ margin: 5 }}
                />
              </div>
            </div>
            <hr className="hiddenhr" />
          </div>

          <div className="product-contents ">
            <h2>
              {" "}
              <AnimationOnScroll animateIn="animate__bounce">
                {productname}
              </AnimationOnScroll>{" "}
            </h2>
            <span>
              <p className="price-before">
                <s>1,30,999</s>
              </p>
              <p>1,30,999</p>
            </span>
          </div>
        </div>

        <hr />
        <div className="product-submain">
          <div>
            <h3>Description</h3>
            <p>
              <AnimationOnScroll animateIn="animate__pulse">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet.
              </AnimationOnScroll>
            </p>
          </div>
          <hr />
          <div>
            <h3>Information</h3>
            <p>
              <AnimationOnScroll animateIn="animate__pulse">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet.
              </AnimationOnScroll>
            </p>
          </div>
        </div>

        <hr />

        <div className="product-review">
          <h3>Reviews</h3>

          <div className="reviewer-details   ">
            <h2>Akash Khurana</h2>

            <div className="review-stars">
              <AnimationOnScroll animateIn="animate__bounce">
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStarHalfStroke} color="#FFD400" />
              </AnimationOnScroll>
              <p>4.5/5.0</p>
            </div>
            <p>Superb Quality and Best Service</p>
          </div>
          <div className="reviewer-details   ">
            <h2>Gurdev Singh</h2>
            <div className="review-stars">
              <AnimationOnScroll animateIn="animate__bounce">
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#000000" />
              </AnimationOnScroll>
              <p>4.0/5.0</p>
            </div>
            <p>My new Phone</p>
          </div>
          <div className="reviewer-details   ">
            <h2>Rishiika Sandal</h2>
            <div className="review-stars">
              <AnimationOnScroll animateIn="animate__bounce">
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#FFD400" />
                <FontAwesomeIcon icon={faStar} color="#000000" />
              </AnimationOnScroll>
              <p>4.0/5.0</p>
            </div>
            <p>Loved it !!!!😍💗</p>
          </div>
        </div>
      </div>

      <div className="product-buttons">
        <hr className="blueline" />

        <button type="button" className="button-light">
          ADD TO CART
        </button>
        <button type="submit" className="button-solid">
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default App;
