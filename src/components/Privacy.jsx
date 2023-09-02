import React from "react";
import { FaLock, FaInfoCircle } from "react-icons/fa";

const Privacy = () => {
  return (
    <div className="bg-[theme-background] min-h-screen p-8">
      <h1 className="text-3xl mb-4 font-semibold flex items-center">
        <FaLock className="mr-2" /> Privacy Policy for WaxLinker
      </h1>
      <p className="mb-2">Last updated: 2nd September</p>

      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-medium">Definitions:</h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Service:</strong> Refers to the WaxLinker Website and the
              WaxLinker Chrome Extension.
            </li>
            <li>
              <strong>Personal Data:</strong> Data about a living individual who
              can be identified from those data.
            </li>
            <li>
              <strong>Usage Data:</strong> Data collected automatically from the
              use of the Service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium">
            Information Collection and Use:
          </h2>
          <p>
            We collect several types of information for various purposes. This
            includes Personal Data and Usage Data. When you use our Service to
            link your Twitter account with your WAX wallet, we may ask you to
            provide us with certain personally identifiable information
            including but not limited to your Twitter handle and WAX wallet
            address.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Use of Data:</h2>
          <p>
            WaxLinker uses the collected data for various purposes such as
            facilitating the linking of your Twitter account with your WAX
            wallet and monitoring the usage of our Service. We may also collect
            information on how the Service is accessed and used. This Usage Data
            may include information such as your computer's IP address, browser
            type, browser version, the pages of our Service that you visit, the
            time and date of your visit, and other diagnostic data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Security of Data:</h2>
          <p>
            The security of your data is important to us. While we strive to use
            commercially acceptable means to protect your Personal Data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">
            Changes to this Privacy Policy:
          </h2>
          <p>
            We may update our Privacy Policy from time to time. You are advised
            to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium">Contact Us:</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us.
          </p>
        </section>
      </div>

      <div className="mt-8 flex justify-center">
        <button className="btn btn-primary">
          <a
            href="/"
            className="flex items-center space-x-2 hover:text-gray-400"
          >
            <FaInfoCircle />
            <span>Go Back</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Privacy;
