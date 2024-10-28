const Footer = () => {
  return (
    <div className="container mx-auto  my-5 bg-black pt-40  ">
        <img className="mx-auto " src="https://i.ibb.co.com/8Pk3X7n/logo-footer.png" alt="" />
      <footer className="footer   text-white  p-10">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p className="w-2/3">We are a passionate team dedicated to providing the best services to our customers.</p>
         
        </nav>
       
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover"> Service</a>
          <a className="link link-hover">About </a>
          <a className="link link-hover">Contact </a>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="">Subscribe to our newsletter for the latest updates.</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your email "
                className="input input-bordered join-item"
              />
              <button className="btn bg-orange-300 join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
