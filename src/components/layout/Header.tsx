import Image from "next/image";
import Logo from "../svg/Logo";
import MoiLogo from "../svg/MoiLogo";

const Header = () => {
  return (
    <header className="w-full">
      <div className="flex max-w-7xl mx-auto justify-between items-center py-4 px-6">
        <Logo className="fill-primary-500 size-14" />
        <section className="flex gap-2">
        <MoiLogo className="size-16 fill-primary-500" />
          <div className="relative w-26 h-16">
            <Image
              src={"/vission-logo.png"}
              className="w-20 object-cover"
              alt="Vision Logo"
              fill
            />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
