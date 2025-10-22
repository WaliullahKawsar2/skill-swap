import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Info</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:info@skillswap.com"
              className="text-primary hover:underline"
            >
              info@skillswap.com
            </a>
          </p>
          <p>Phone: +880 1234 567 890</p>
          <p>Location: Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Privacy Policy */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Privacy & Policy</h2>
          <p className="text-sm leading-relaxed">
            Your privacy is important to us. We collect minimal data to provide
            a better user experience. By using SkillSwap, you agree to our{" "}
            <Link
              to="/privacy-policy"
              className="text-primary hover:underline"
            >
              Privacy Policy
            </Link>.
          </p>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-base-300 pt-4 text-sm opacity-80">
        <p>© {new Date().getFullYear()} SkillSwap. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
