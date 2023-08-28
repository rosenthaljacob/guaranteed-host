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
          <ul className="underline text-sm grid gap-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#">Plans & Pricing</Link>
            </li>
            <li>
              <Link href="#">Services</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-bold mb-3">About Us</h4>
          <ul className="underline text-sm grid gap-1">
            <li>
              <Link href="#">Our Mission</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold mb-3">Support</h4>
          <ul className="underline text-sm grid gap-1">
            <li>
              <Link href="#">24/7 Customer Service</Link>
            </li>
            <li>
              <Link href="#">Knowledge Base</Link>
            </li>
            <li>
              <Link href="#">Video Tutorials</Link>
            </li>
            <li>
              <Link href="#">System Status</Link>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h4 className="font-bold mb-3">Connect With Us</h4>
          <ul className="underline text-sm grid gap-1">
            <li>
              <a
                className="flex items-center gap-1.5"
                href="https://github.com/rosenthaljacob/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:github-fill" /> GitHub
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-1.5"
                href="https://www.linkedin.com/in/j-rosenthal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:linkedin-fill" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Author and Copyright */}
      <div className="text-center mt-8 text-sm">
        <p>
          Designed and Developed by{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/j-rosenthal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jacob Rosenthal
          </a>
        </p>
        <p>© 2023 GuaranteedHost. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
