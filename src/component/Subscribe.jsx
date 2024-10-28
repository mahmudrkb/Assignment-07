const Subscribe = () => {
  return (
    <div className="container mx-auto  text-center mt-50 relative">
      <div className="   bg-[url(../img/bg-shadow.png)] bg-cover bg-no-repeat bg-white bg-center rounded-md w-5/6 py-10 absolute -bottom-20 left-20  ">
        <form className="">
          <h6 className="footer-title">Subscribe to our Newsletter</h6>
          <fieldset className="form-control">
            <label className="label text-center">
              <span className="mx-auto">
                Get the latest updates and news right in your inbox!
              </span>
            </label>
            <div className="">
              <input
                type="text"
                placeholder="Enter your email "
                className="input input-bordered join-item"
              />
              <button className="btn ml-5 bg-orange-300 join-item">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
