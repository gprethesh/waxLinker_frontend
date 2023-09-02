import React from "react";
import { FaGithub, FaChrome, FaBook, FaCopy } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-6">
      <div className="flex justify-between">
        <a
          href="https://github.com/gprethesh/waxLinker"
          className="hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="inline" /> Github
        </a>
        <a
          href="https://chrome.google.com/webstore"
          className="hover:text-gray-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaChrome className="inline" /> Chrome Extension
        </a>
        <a href="/privacy" className="hover:text-gray-400">
          <FaBook className="inline" /> Privacy Policy
        </a>
      </div>
      <div className="mt-4 text-center">
        <FaCopy className="inline" /> Copyright © 2023 WaxLinker
      </div>
    </div>
  );
};

export default Footer;
