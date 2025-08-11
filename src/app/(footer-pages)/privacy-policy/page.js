export default function PrivacyPolicyPage() {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 min-h-screen pt-[110px]">
      <div className="flex flex-col gap-3 max-w-3xl mx-auto text-lg">
        <h1 className="font-bold text-5xl text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Last updated: August 11, 2025</p>

        <p>
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit
          our website or make a purchase from us.
        </p>

        <h2 className=" text-3xl">Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The
          information we may collect on the Site includes:
        </p>
        <ul>
          <li>
            <strong>Personal Data:</strong> Personally identifiable information,
            such as your name, shipping address, email address, and telephone
            number, that you voluntarily give to us when you place an order.
          </li>
          <li>
            <strong>Usage Data:</strong> We may use cookies to collect
            non-personal information, such as the pages you visit on our site,
            to help us improve your user experience and our services.
          </li>
        </ul>

        <h2 className=" text-3xl">How We Use Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a
          smooth, efficient, and customized experience. Specifically, we may use
          information collected about you to:
        </p>
        <div className="flex flex-col gap-2">
          <span>Process and manage your orders and deliveries.</span>
          <span>
            Communicate with you about your order, including confirmations and
            shipping updates.
          </span>
          <span>Improve our website and product offerings.</span>
          <span>
            {" "}
            Send you promotional emails and newsletters, provided you have
            opted-in to receive them. You may opt-out at any time.
          </span>
        </div>

        <h2 className=" text-3xl">Data Security</h2>
        <p>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable.
        </p>

        <h2 className=" text-3xl">Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personally
          identifiable information to outside parties. This does not include
          trusted third parties who assist us in operating our website, such as
          payment gateways and shipping partners, so long as those parties agree
          to keep this information confidential.
        </p>
      </div>
    </div>
  );
}
