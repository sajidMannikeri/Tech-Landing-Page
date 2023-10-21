import React from "react";
import vg from "../assets/2.jpg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Tech Star</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <div>
          <img src={vg} alt="Graphics" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            ipsam fuga eaque officiis amet repudiandae eum voluptatibus omnis at
            esse soluta, repellendus, dignissimos libero quis!
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, est
            eius sit voluptate minus aperiam alias, iste laboriosam quidem
            assumenda ab. Veritatis hic cum tenetur modi inventore dignissimos
            necessitatibus eligendi reiciendis quo?
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brand</h1>
          <article>
            <div style={{animationDelay: "0.3s"}}>
                <AiFillFacebook />
                <p>Facebook</p>
            </div>
            <div style={{animationDelay: "0.5s"}}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
            <div style={{animationDelay: "0.7s"}}>
                <AiFillTwitterCircle />
                <p>Twitter</p>
            </div>
            <div style={{animationDelay: "1s"}}>
                <AiFillYoutube />
                <p>YouTube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
