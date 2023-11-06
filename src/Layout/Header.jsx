import logo from "../images/react.png";

function MainHeader() {
  return (
    <div className="p-2 pl-2" style={{ backgroundColor: "black" }}>
      <img
        src={logo}
        alt="Logo"
        className="mt-1"
        style={{ height: "35px", verticalAlign: "top", marginRight: "5px" }}
      ></img>
      <span className="h2 text-white">React Course - TaskOpedia</span>
    </div>
  );
}

const subHeaderStyle = {
  color: "brown",
  backgroundColor: "lightgray",
  fontWeight: "600"
};

function SubHeader() {
  return (
    <p style={subHeaderStyle} className="text-center">
      This will be an exciting course.
    </p>
  );
}

const Header = () => {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
};

export default Header;
