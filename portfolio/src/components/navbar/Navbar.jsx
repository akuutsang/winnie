import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Akutsang</span>
        <div className="social">
          <a href="#">
            <img className="facebook" src="/facebook.png" alt=""></img>
          </a>
          <a href="#">
            <img src="/instagram.webp" alt=""></img>
          </a>
          <a href="#">
            <img src="/twitter.png" alt=""></img>
          </a>
          <a href="#">
            <img src="/youtube.png" alt=""></img>
          </a>
        </div>
      </div>
    </div>
  );
};
