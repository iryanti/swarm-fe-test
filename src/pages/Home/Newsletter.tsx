import envelope from "../../assets/envelope.svg";


export default function Newsletter() {
  return (
    <section className="bg-[#3B3B3B] rounded-[20px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 p-6 md:p-10">
      <div className="w-full md:w-1/2">
        <img
          src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/photo-1@2x.png"
          alt="Astronaut reading newspaper"
          className="w-full rounded-[20px] object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 text-white space-y-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Join Our Weekly Digest
          </h2>
          <p className="text-gray-300 mt-3">
            Get Exclusive Promotions &amp; Updates Straight To Your Inbox.
          </p>
        </div>
        <form className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 bg-white rounded-[20px] overflow-hidden shadow-sm w-full sm:max-w-lg h-[60px]">
          <input
            type="email"
            placeholder="Enter your email here"
            className="flex-1 px-4 py-3 text-gray-600 text-sm outline-none w-full"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#A259FF] hover:bg-[#8B3DFF] text-white font-semibold px-6 sm:px-8 h-full transition w-full sm:w-auto"
          >
            <img
              src={envelope}
              alt="Subscribe Icon"
              className="w-5 h-5"
            />
            <span>Subscribe</span>
          </button>
        </form>
      </div>
    </section>
  );
}
