
export default function Student(props) {
    return (
      <div className="col-4 p-2">
        <div className="row border">
          <div className="col-2">
            <img
              src={props.headshot}
              alt="Elon Musk Avatar"
              className="w-100 py-2"
            ></img>
          </div>
          <div className="col-8">
            {props.name} <br />
            Coding Experience {props.experience} years
          </div>
          <div className="col-2">
            {props.children}
          </div>
        </div>
      </div>
    );
}
  