function Newsletter() {
  return (
    <div>
      <div className="flex h-[10rem] w-[30rem] flex-col items-center justify-center lg:h-[5re]">
        <div className="flex h-[5rem] w-full items-center pl-[2rem]">
          <h4 className="text-[1.2rem] font-semibold text-white">Subscribe to our newsletter</h4>
        </div>
        <div className="flex h-[5rem] w-full items-center justify-center">
          <input
            type="text"
            name="newsletter-input"
            placeholder="Email"
            className="h-[4rem] w-[20rem] rounded-bl-[0.5rem] rounded-tl-[0.5rem] border-2 border-primary bg-transparent p-[1rem] text-white outline-none placeholder:font-bold placeholder:text-white"
          />
          <button className="h-[4rem] w-[5rem] rounded-br-[0.5rem] rounded-tr-[0.5rem] bg-primary font-bold uppercase text-secondary outline-none">
            ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
