import { useContext, useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FullContext } from "../context/Context";

function PortfolioFooter() {
  const appContext = useContext(FullContext);

  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    const layoutAppElement = document.getElementById("layoutApp");
    console.log("wa");

    if (layoutAppElement) {
      const scrollThreshold = 200;
      const isScrolledEnough =
        layoutAppElement.getBoundingClientRect().top < -scrollThreshold;
      setShowArrow(isScrolledEnough);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Elimina el evento de scroll al desmontar el componente para evitar fugas de memoria
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const layoutAppElement = document.getElementById("layoutApp");

    if (layoutAppElement) {
      layoutAppElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer
      className={`fixed bottom-5 w-full opacity-50 hover:opacity-100 transition-all`}
    >
      <motion.div className="flex items-center justify-center">
        {showArrow ? (
          <ArrowUpIcon
            onClick={scrollToTop}
            className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            width={40}
            height={40}
          />
        ) : (
          <div className="flex gap-2 items-center justify-center align-middle mx-auto grid-flow-col">
            <Link href="#experience">
              <button className="heroButton">
                {appContext?.idiome.sections.experience.exp}
              </button>
            </Link>
            {/* <Link href="#skills">
              <button className="heroButton">
                {appContext?.idiome.sections.skills}
              </button>
            </Link> */}
            <Link href="#projects">
              <button className="heroButton">
                {appContext?.idiome.sections.projects}
              </button>
            </Link>
          </div>
        )}
      </motion.div>
    </footer>
  );
}

export default PortfolioFooter;
