import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="flex h-[13rem] w-[31rem] items-center justify-center p-[1.5rem_2rem] font-[600] text-white">
      <div className="flex h-[9rem] w-1/2 flex-col justify-between">
        <Link to="#">About Us</Link>
        <Link to="#">Contact</Link>
        <Link to="#">Terms & Conditions</Link>
      </div>
      <div className="flex h-[10rem] w-1/2 justify-end">
        <div className="flex h-full w-[2rem] flex-col items-center justify-between">
          <img
            src="/social-icons/facebook-logo.webp"
            alt="footer-social-icon"
            className="h-[1.8rem] w-[1rem]"
            loading="lazy"
          />
          <img
            src="/social-icons/twitter-logo.webp"
            alt="footer-social-icon"
            className="h-[1.5rem] w-[1.8rem]"
            loading="lazy"
          />
          <img
            src="/social-icons/instagram-logo.webp"
            alt="footer-social-icon"
            className="h-[1.8rem] w-[1.8rem]"
            loading="lazy"
          />
        </div>
        <div className=" flex h-full flex-col items-start justify-between pl-[0.5rem] text-[1.1rem]">
          <Link to="#">Facebook</Link>
          <Link to="#">Twitter</Link>
          <Link to="#">Instagram</Link>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
