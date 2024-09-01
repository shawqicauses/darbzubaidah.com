// DONE REVIEWING: GITHUB COMMIT
const UmrahOptions = function UmrahOptions() {
  return (
    <section className="relative isolate overflow-hidden bg-foreground">
      <div className="max-w-xl-8 mx-auto px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-xl-4">
          <h2 className="text-base font-medium leading-7 text-primary">Our Umrah Options</h2>
          <p className="mt-2 text-xl-4 font-bold tracking-tight text-background sm:text-xl-5">
            The right application for you<span className="text-primary">,</span>{" "}
            <br className="hidden sm:inline lg:hidden" />
            wherever you are<span className="text-primary">.</span>
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
            <ellipse cx={604} cy={512} rx={604} ry={512} fill="url(#umrah-options-ellipse)" />
            <defs>
              <radialGradient id="umrah-options-ellipse">
                <stop stopColor="rgb(34, 197, 94)" />
                <stop offset={1} stopColor="rgb(9, 9, 11)" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-background pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-xl-7 px-6 lg:px-8" />
        </div>
      </div>
    </section>
  )
}

export default UmrahOptions
