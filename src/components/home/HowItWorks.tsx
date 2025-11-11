export default function HowItWorks() {
  const steps = [
  {
    title: "Setup Your Wallet",
    description:
      "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    image:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-3@2x.svg",
  },
  {
    title: "Create Collection",
    description:
      "Upload your work and setup your collection. Add a description, social links and floor price.",
    image:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-4@2x.svg",
  },
  {
    title: "Start Earning",
    description:
      "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    image:
      "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/icon-5@2x.svg",
  },
];

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl">
          Find out how to get started with our NFT marketplace.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {steps.map((step) => (
          <div
            key={step.title}
            className="bg-[#3B3B3B] rounded-[24px] px-8 pt-10 pb-10 flex flex-col items-center text-center gap-6 hover:-translate-y-1 hover:shadow-lg transition"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-[70%] h-[70%] object-contain"
            />
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
