import "./hero.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>Hello there!</h2>
          <h1>Welcome to my portfolio webpage</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact me</button>
          </div>
          <img className="img" src="/Wscroll.webp" alt="" />
        </div>
      </div>
      <div className="imageContainer">
        <img src="/robot-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};
