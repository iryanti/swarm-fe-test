const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white mt-auto">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="px-4">
            <div className="flex items-center gap-3  mb-4">
              <img
                src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/storefront-2@2x.svg"
                alt="Logo"
                className="w-8 h-8"
              />
              <h3 className="text-2xl hidden md:block">NFT Marketplace</h3>
            </div>
            <div className="space-y-2">
              <p className="text-soft-gray text-sm">
                NFT marketplace UI created with Anima for Figma.
              </p>
              <div className="w-fit">
                <p className="text-soft-gray text-sm">Join our community</p>
                <div className="grid grid-cols-4 gap-2">
                  <a
                    href="https://discord.com/invite/eQxkYTNxSp"
                    target="_blank"
                  >
                    <img
                      src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/discordlogo-1@2x.svg"
                      alt="DiscordLogo"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw"
                    target="_blank"
                  >
                    <img
                      src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/youtubelogo-1@2x.svg"
                      alt="YoutubeLogo"
                    />
                  </a>
                  <a
                    href="https://twitter.com/animaapp?lang=en"
                    target="_blank"
                  >
                    <img
                      src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/twitterlogo-1@2x.svg"
                      alt="icon-twitter"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/animaapp/?hl=en"
                    target="_blank"
                  >
                    <img
                      src="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/instagramlogo-1@2x.svg"
                      alt="icon-instagram"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4">
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-soft-gray hover:text-white transition text-sm"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-soft-gray hover:text-white transition text-sm"
                >
                  Rankings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-soft-gray hover:text-white transition text-sm"
                >
                  Connect a wallet
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h3 className="text-lg font-semibold mb-4">
              Join Our Weekly Digest
            </h3>
            <div className="space-y-2">
              <p className="text-soft-gray text-sm">
                Get exclusive promotions & updates straight to your inbox.
              </p>
             <div className="hidden md:flex w-full items-center bg-white rounded-[20px] overflow-hidden shadow-sm h-[60px]">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="px-4 py-3 text-gray-600 text-sm outline-none w-[250px]"
                />
                <button className="bg-[#A259FF] hover:bg-[#8B3DFF] text-white font-semibold px-8 py-3 h-full rounded-[20px] transition">
                  Subscribe
                </button>
              </div>
                <div className="grid md:hidden gap-4">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="px-4 py-3 text-gray-600 text-sm outline-none w-full rounded-[20px]"
                />
                <button className="bg-[#A259FF] hover:bg-[#8B3DFF] text-white font-semibold px-8 py-3 h-full rounded-[20px] transition w-full">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-soft-gray text-sm">
            Ⓒ NFT Market. Use this template freely.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
