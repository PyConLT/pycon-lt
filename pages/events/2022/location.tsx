const Post = () => {
  return (
    <div className="container-fluid pt-5 pb-5 bg-dark text-light" id="location">
      <div className="container">
        <h2 className="font-weight-bold text-uppercase text-center pb-2">
          Location
        </h2>
        <p className="text-center">
          Hotel Best Western, Konstitucijos pr. 14, Vilnius
        </p>
        <div className="row justify-content-center">
          <div className="col-sm-auto pb-2">
            <img
              src="src/img/photos/sale1.jpg"
              className="img-thumbnail img-rounded img-fluid"
              alt="conference hall"
            />
            <br />
            <img
              src="src/img/photos/sale2.jpg"
              className="img-thumbnail img-rounded img-fluid"
              alt="conference hall"
            />
          </div>
          <div className="col-md-auto pt-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.865686374953!2d25.27574871601531!3d54.694391180584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940409c8a3a9%3A0x4cd7cb2e497a8a33!2sBest%20Western%20Vilnius!5e0!3m2!1slt!2slt!4v1628768655512!5m2!1slt!2slt"
              max-width="500"
              height="388"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
