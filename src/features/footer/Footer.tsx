import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="text-sm grid gap-3 sm:gap-1">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/#plans">
                Plans & Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/#services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#faq">
                FAQ
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-bold mb-3">About Us</h4>
          <ul className="text-sm grid gap-3 sm:gap-1">
            <li>
              <Link className="hover:underline" href="#">
                Our Mission
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Careers
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold mb-3">Support</h4>
          <ul className="text-sm grid gap-3 sm:gap-1">
            <li>
              <Link className="hover:underline" href="#">
                24/7 Customer Service
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Knowledge Base
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                Video Tutorials
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#">
                System Status
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h4 className="font-bold mb-3">Connect With Us</h4>
          <ul className="text-sm grid gap-3 sm:gap-1">
            <li>
              <Link
                className="flex items-center gap-1.5 hover:underline"
                href="https://github.com/rosenthaljacob/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:github-fill" /> GitHub
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center gap-1.5 hover:underline"
                href="https://www.linkedin.com/in/j-rosenthal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:linkedin-fill" /> LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Author and Copyright */}
      <div className="text-center mt-8 text-sm">
        <p>
          Designed and Developed by{" "}
          <Link
            className="underline"
            href="https://www.linkedin.com/in/j-rosenthal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jacob Rosenthal
          </Link>
        </p>
        <p>© 2023 GuaranteedHost. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
