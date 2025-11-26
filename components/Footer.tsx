import Link from "next/link";
import { AiOutlineFacebook, AiOutlineTikTok, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgba(255,247,220,1)] border-t border-gray-100 shadow-sm text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
          <Link
            href="/legal/privacy-policy"
            className="text-gray-600 hover:text-gray-900 transition-colors underline"
          >
            Privacy Policy
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/legal/terms-of-service"
            className="text-gray-600 hover:text-gray-900 transition-colors underline"
          >
            Terms of Service
          </Link>
        </div>

        <div className="flex flex-wrap justify-center sm:justify-between items-center text-sm">
          <p className="ml-4">&copy; {currentYear} Daily Disaffirmation. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 mr-4 sm:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">
              <AiOutlineFacebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">
              <AiOutlineInstagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-gray-300">
              <AiOutlineTikTok className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
