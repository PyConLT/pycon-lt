import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { year } = router.query;

  return (
    <div className="container-fluid pt-5 pb-5" id="sponsors">
      <h2 className="text-center pb-2">Our sponsors</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center mb-2">
            <h4>Keystone Sponsor</h4>
            <a href="https://oxylabs.io/" target="_blank" rel="noreferrer">
              <img className="img-fluid" src="src/img/logos/oxy_logo.png" />
            </a>
          </div>
          <div className="col-md-3 text-center mb-2">
            <h4>Gold Sponsors</h4>
            <div className="container-fluid justify-content-center">
              <div className="row justify-content-center">
                <a
                  href="https://www.cornercasetech.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="img-fluid" src="src/img/logos/CCT_logo.svg" />
                </a>
              </div>
              <div className="row mt-2">
                <a
                  href="https://www.zealid.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="img-fluid"
                    src="src/img/logos/zealid-logo.svg"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 text-center my-2">
            <h4>Silver Sponsors</h4>
            <div className="row">
              <a
                href="https://www.convious.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="img-fluid" src="src/img/logos/Red.png" />
              </a>
            </div>
            <div className="row mt-2">
              <a
                href="https://www.shoobx.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="img-fluid pt-2"
                  src="src/img/logos/Shoobx_master.png"
                />
              </a>
            </div>
          </div>
          <div className="col-md-3 text-center my-2">
            <h4>Bronze Sponsors</h4>
            <a href="https://www.strivr.com/" target="_blank" rel="noreferrer">
              <img
                src="src/img/logos/Logo_Strivr.svg"
                style={{ maxHeight: "100px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
