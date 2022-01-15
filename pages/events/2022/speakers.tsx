import { useRouter } from "next/router";

const Post = () => {
  return (
    <div
      className="container-fluid pt-5 pb-5 bg-yellow text-black"
      id="speakers"
    >
      <div className="container">
        <div className="container">
          <h2 className="text-center pb-2">Keynote Speakers</h2>
          <div className="row justify-content-md-center">
            <div className="col-sm">
              <div className="row justify-content-center">
                <img
                  src="src/img/speakers/sebastian.jpg"
                  className="rounded-circle speaker-photo"
                />
              </div>
              <div className="row justify-content-center mt-2">
                <h4>Sebastián Ramírez</h4>
              </div>
              <div className="row justify-content-center">
                <h5>Modern Python through FastAPI and friends</h5>
              </div>
            </div>

            <div className="col-sm">
              <div className="row justify-content-center">
                <img
                  src="src/img/speakers/christian-heimes.jpg"
                  className="rounded-circle speaker-photo"
                />
              </div>
              <div className="row justify-content-center mt-2">
                <h4>Christian Heimes</h4>
              </div>
              <div className="row justify-content-center">
                <h5>Ask a core developer anything</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-3">
          <h2 className="text-center pb-2">Speakers</h2>
          <div className="row justify-content-center">
            <div className="col-sm">
              <div className="row justify-content-center">
                <img
                  src="src/img/speakers/petras.jpg"
                  className="rounded-circle speaker-photo"
                />
              </div>
              <div className="row justify-content-center mt-2">
                <h4>Petras Zdanavičius</h4>
              </div>
              <div className="row justify-content-center">
                <h5 className="text-center">
                  Python Integers: nitty-gritty details
                </h5>
              </div>
            </div>

            <div className="col-sm">
              <div className="row justify-content-center">
                <img
                  src="src/img/speakers/justinas.jpeg"
                  className="rounded-circle speaker-photo"
                />
              </div>
              <div className="row justify-content-center mt-2">
                <h4>Justinas Kuizinas (CCT)</h4>
              </div>
              <div className="row justify-content-center">
                <h5 className="text-center">
                  JWT and OAuth2. Should we reinvent the wheel?
                </h5>
              </div>
            </div>

            <div className="col-sm">
              <div className="row justify-content-center">
                <img
                  src="src/img/speakers/deividas.jpg"
                  className="rounded-circle speaker-photo"
                />
              </div>
              <div className="row justify-content-center mt-2">
                <h4>Deividas Matačiūnas</h4>
              </div>
              <div className="row justify-content-center">
                <h5 className="text-center">Fine-tuning large NLP models</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm">
            <div className="row justify-content-center">
              <img
                src="src/img/speakers/simon.jpg"
                className="rounded-circle speaker-photo"
              />
            </div>
            <div className="row justify-content-center mt-2">
              <h4>Szymon Zaborowski</h4>
            </div>
            <div className="row justify-content-center">
              <h5 className="text-center">
                Metric Learning for Session-Based Recommendations
              </h5>
            </div>
          </div>

          <div className="col-sm">
            <div className="row justify-content-center">
              <img
                src="src/img/speakers/sarunas.jpeg"
                className="rounded-circle speaker-photo"
              />
            </div>
            <div className="row justify-content-center mt-2">
              <h4>Šarūnas Navickas</h4>
            </div>
            <div className="row justify-content-center">
              <h5 className="text-center">How to do Programming videos</h5>
            </div>
          </div>

          <div className="col-sm">
            <div className="row justify-content-center">
              <img
                src="src/img/speakers/jev.jpeg"
                className="rounded-circle speaker-photo"
              />
            </div>
            <div className="row justify-content-center mt-2">
              <h4>Jev Gamper</h4>
            </div>
            <div className="row justify-content-center">
              <h5 className="text-center">Why care about experiments?</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
