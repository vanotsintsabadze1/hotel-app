import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";

function Footer() {
  return (
    <footer className="flex min-h-[35rem] w-full flex-grow items-center justify-center  bg-secondary lg:min-h-[20rem] lg:flex-row lg:justify-center lg:gap-[10rem]">
      <div className="flex h-full w-[31rem] flex-col items-center justify-center lg:w-[100rem] lg:flex-row lg:gap-[4rem] xl:w-[120rem] xl:gap-[5rem]">
        <div className="flex h-[8rem] w-full flex-col items-center justify-center text-gray-500 lg:hidden">
          <h2 className="font-secondary text-[2rem] uppercase tracking-[0.8rem]">Luxury</h2>
          <p className="text-[1rem] font-semibold uppercase tracking-[0.5rem]">Hotels</p>
        </div>
        <FooterLinks />
        <Newsletter />
        <div className="mb-[2rem] flex h-[8rem] w-[25rem] flex-col justify-center text-white lg:justify-end">
          <p>497 Evergreen Rd. Roseville, CA 95673</p>
          <p>+44 345 678 903</p>
          <p>luxury_hotels@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
