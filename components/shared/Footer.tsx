import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex-between flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p className="">2025 Evently. All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
