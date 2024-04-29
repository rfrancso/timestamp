import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import VercelLogo from "../public/img/vercel.svg";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-sm text-center">
        TimeStamp
      </div>
      <div className="mt-1 text-sm text-center text-gray-500 dark:text-gray-600">
        Made by{" "}

          Francisco Rodriguez

      </div>
      <div className="flex items-center justify-center mt-2">
        <ThemeSwitch />
      </div>
    </Container>
  );
}

