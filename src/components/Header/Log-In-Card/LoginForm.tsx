function LoginForm() {
  return (
    <div className="flex w-full">
      <form className="flex w-full flex-col items-center gap-[3rem] p-[2rem_3rem]">
        <input className="h-[3rem] w-full border-b-2 border-b-[#65696d] bg-white p-[2rem_.5rem] text-[1.3rem] text-black outline-none placeholder:text-black" type="text" placeholder="Email" />
        <input className="h-[3rem] w-full border-b-2 border-b-[#65696d] bg-white p-[2rem_.5rem] text-[1.3rem] text-black outline-none placeholder:text-black" type="password" placeholder="Password" />
        <button className="h-[3.5rem] w-[13rem] rounded-[1rem] bg-black text-[1.1rem] font-bold uppercase text-white">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
