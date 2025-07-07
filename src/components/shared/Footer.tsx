import Image from "next/image";
import Link from "next/link";

const menuColumns = [
  {
    title: "Item title",
    items: ["Something", "Something", "Something", "Something"],
  },
  {
    title: "Item title",
    items: ["Something", "Something", "Something", "Something"],
  },
  {
    title: "Item title",
    items: ["Something", "Something"],
  },
];

const policyLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Item", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-blue-whale w-full pt-8 pb-2">
      <div className="xl:max-w-[70%] px-4 xl:px-0 mx-auto">
        <div className="border-t border-b border-white/20 py-8 flex flex-col md:flex-row gap-8 md:gap-0">
          {/* Left: Logo and Newsletter */}
          <div className="md:w-3/5 flex flex-col md:gap-4 justify-between">
            <div className="relative min-w-[100px] h-[60px] mx-auto md:mx-0">
              {/* Placeholder logo */}
              <Image
                src="/images/dhs_logo.png"
                alt="Logo"
                width={100}
                height={80}
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-1 md:text-left text-center font-roboto">
                Join our newsletter
              </h3>
              <p className="text-white/70 text-sm mb-4  md:text-left text-center font-roboto">
                DHS strives to make a difference in the exchange world by
                focusing...
              </p>
              <form className="flex sm:flex-row flex-col gap-2 justify-center md:justify-start mx-auto sm:mx-0 w-[90%] sm:w-full ">
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="rounded-full px-4 py-2 bg-transparent border border-white/50 text-white placeholder-white/60 focus:outline-none focus:border-elf-green min-w-0"
                />
                <button
                  type="submit"
                  className="bg-elf-green text-white px-6 py-2 rounded-full font-semibold hover:bg-elf-green/80 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {/* Right: Menu Columns */}
          <div className="md:w-2/5 grid grid-cols-3 gap-8 justify-items-center md:justify-items-start">
            {menuColumns.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-white font-bold text-base mb-2 font-roboto">
                  {col.title}
                </h4>
                <ul className="space-y-1">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-white/70 text-sm font-roboto">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom: Copyright and Policy Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-white/60 text-xs">
            ©2025 DHS All rights reserved.
          </span>
          <div className="flex gap-6 my-6">
            {policyLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="text-white/70 text-xs hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
