import { useRouter } from "next/router";

const Post = () => {
  const year = 2022;

  return (
    <div>
      <p>Some information about the event Year {year}</p>

      <div className="container-fluid pt-5 pb-5 bg-dark text-light" id="about">
        <div className="container">
          <h2 className="font-weight-bold text-uppercase text-center pb-2">
            About Pycon LT
          </h2>
          <p className="text-center">
            PyCon LT is a community event that brings together new and
            experienced Python users
          </p>
          <p className="text-center">Our goals are:</p>
          <div className="d-flex">
            <ul className="mx-auto justify-content-center">
              <li>Grow and support a community of Python users</li>
              <li>Encourage learning and knowledge sharing</li>
              <li>
                Popularize Python tools/libraries and open source in general
              </li>
            </ul>
          </div>
          <p className="text-center">PyCon LT is organized since 2009.</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
