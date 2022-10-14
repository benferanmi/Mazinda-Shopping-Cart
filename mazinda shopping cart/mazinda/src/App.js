import "./App.css";
import productImage from "./assets/images/banner img.png";
import rec from "./assets/images/rec.png";
import circle from "./assets/images/circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faHeart,
  faCartShopping,
  faArrowLeft,
  faSearch,
  faStarHalfStroke,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";


function App() {
  const [productname, serProductName] = useState(
    "Iphone 14 Pro Max  (256 GB) (8 GB RAM)"
  );
  const [productImg, setProductImg] = useState(productImage);

  const searchRef = useRef('')
  const handleSubmit =() => {
    console.log(searchRef.current.value)
  }

  return (
    <div className="App">
      <div className="header-nav">
        <span>
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <div className="nav-search">
          <FontAwesomeIcon icon={faSearch} className="icon" />
          <input type="text" ref={searchRef} onChange={handleSubmit} name="search" placeholder="search on mazinda" />
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
            <img src={productImg} alt="product" className="pimg" />
            <span className="icon1">
              <FontAwesomeIcon icon={faHeart} color="red" />
            </span>

            <div className="icon-set">
              <img src={circle} alt="circle" />
              <img src={rec} alt="circle" />
              <img src={circle} alt="circle" />
            </div>
          </div>

        </div>
          <hr className="hiddenhr"/>

          <div className="product-contents">
            <h2>{productname}</h2>
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
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <hr />
          <div>
            <h3>Information</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <hr />

        <div className="product-review">
          <h3>Reviews</h3>

          <div className="reviewer-details">
            <h2>Akash Khurana</h2>

            <div className="review-stars">
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStarHalfStroke} color="#FFD400" />
              <p>4.5/5.0</p>
            </div>
            <p>Superb Quality and Best Service</p>
          </div>
          <div className="reviewer-details">
          
            <h2>Gurdev Singh</h2>
            <div className="review-stars">
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#000000" />
              <p>4.0/5.0</p>
            </div>
            <p>My new Phone🥳🥳🥳</p>
          </div>
          <div className="reviewer-details">
              <h2>Rishiika Sandal</h2>
            <div className="review-stars">
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#FFD400" />
              <FontAwesomeIcon icon={faStar} color="#000000" />
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
