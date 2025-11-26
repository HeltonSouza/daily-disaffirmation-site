import Link from "next/link";
import { AiOutlineFacebook, AiOutlineTikTok, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[rgba(255,247,220,1)] border-t border-gray-100 shadow-sm text-gray-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center sm:justify-between items-center gap-4 text-sm">
          {/* Copyright - Left */}
          <p className="order-2 sm:order-1">&copy; {currentYear} Daily Disaffirmation. All rights reserved.</p>

          {/* Legal Links - Middle */}
          <div className="flex gap-4 order-1 sm:order-2">
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

          {/* Social Media - Right */}
          <div className="flex space-x-4 order-3 sm:order-3">
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
