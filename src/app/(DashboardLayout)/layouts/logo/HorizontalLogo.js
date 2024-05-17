import { useSelector } from "react-redux";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoDarkIcon from "public/images/logos/dark-logo-icon.svg";
import LogoDarkText from "public/images/logos/dark-logo-text.svg";
import LogoWhiteIcon from "public/images/logos/white-logo-icon.svg";
import LogoWhiteText from "public/images/logos/white-logo-text.svg";

const Logo = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const activetopbarBg = useSelector((state) => state.customizer.topbarBg);
  return (
    <Link href="/" className="d-flex align-items-center gap-2">
      {isDarkMode || activetopbarBg !== "white" ? (
        <>
          <Image src={LogoWhiteIcon} alt="logo" />
          <Image src={LogoWhiteText} alt="logo" />
        </>
      ) : (
        <>
          <Image src={LogoDarkIcon} alt="logo" />
          <Image src={LogoDarkText} alt="logo" />
        </>
      )}
    </Link>
  );
};

export default Logo;
