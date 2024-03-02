function LoadingScreen() {
  return (
    <section className="flex w-full flex-grow flex-col items-center justify-center gap-[1rem]">
      <div className="h-[10rem] w-[10rem] animate-spin rounded-[50%] border-t-[0.1rem] border-t-secondary"></div>
      <p className="text-[1.2rem] font-bold text-secondary">Loading...</p>
    </section>
  );
}

export default LoadingScreen;
