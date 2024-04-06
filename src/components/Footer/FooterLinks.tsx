import Link from "next/link";
import Image from "next/image";

function FooterLinks() {
  return (
    <div className="flex h-[13rem] w-[31rem] items-center justify-center p-[1.5rem_2rem] font-[600] text-white">
      <div className="flex h-[9rem] w-1/2 flex-col justify-between">
        <Link href="#">About Us</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Terms & Conditions</Link>
      </div>
      <div className="flex h-[10rem] w-1/2 justify-end">
        <div className="flex h-full w-[2rem] flex-col items-center justify-between">
          <Image
            src="/images/social-icons/facebook-logo.webp"
            alt="footer-social-icon"
            width={10}
            height={18}
          />
          <Image
            src="/images/social-icons/twitter-logo.webp"
            alt="footer-social-icon"
            className="h-[1.5rem] w-[1.8rem]"
            width={18}
            height={15}
          />
          <Image
            src="/images/social-icons/instagram-logo.webp"
            alt="footer-social-icon"
            width={18}
            height={18}
          />
        </div>
        <div className=" flex h-full flex-col items-start justify-between pl-[1rem] text-[1.1rem]">
          <Link href="#">Facebook</Link>
          <Link href="#">Twitter</Link>
          <Link href="#">Instagram</Link>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
