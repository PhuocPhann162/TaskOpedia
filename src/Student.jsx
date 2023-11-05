import { faker } from '@faker-js/faker';

export default function Student(props) {
    return (
      <div className="container p-4">
        <div className="row border">
          <div className="col-2">
            <img
              src={faker.image.avatar()}
              alt="Elon Musk Avatar"
              className="w-100"
            ></img>
          </div>
          <div className="col-10">
            {props.name} <br />
            Coding Experience {props.experience} years
          </div>
        </div>
      </div>
    );
}
  