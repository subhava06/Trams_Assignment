function Footer() {
  return (
    <footer className="bg-mint pb-12">

      <div className="section-container">

        <hr className="border-gray-400 mb-16" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h3 className="font-semibold text-xl mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>Home</li>
              <li>Studio</li>
              <li>Service</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-6">
              Terms & Policies
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Explore</li>
              <li>Accessibility</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-6">
              Follow Us
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-6">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                1498 W Fulton St,
                <br />
                Chicago, IL 60607
              </li>

              <li>
                (123) 456-7890
              </li>

              <li>
                info@elementum.com
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center mt-20 text-sm text-gray-600">
          ©2023 Elementum. All rights reserved.
        </div>

      </div>

    </footer>
  );
}

export default Footer;