import Layout from "@/components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="min-h-screen bg-orange-50 flex flex-col">
        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-12 flex-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Terms and Conditions
          </h2>
          <div className="space-y-6 text-gray-700">
            {/* Section 1 */}
            <section>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                1. Acceptance of Terms
              </h3>
              <p className="text-sm leading-relaxed">
                By accessing or using the Code DEv platform, you agree to be
                bound by these Terms and Conditions. If you do not agree, please
                do not use our services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                2. User Accounts
              </h3>
              <p className="text-sm leading-relaxed">
                You are responsible for maintaining the confidentiality of your
                account and password. Usernames must consist of letters,
                numbers, and underscores only, and passwords must be at least 8
                characters long.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                3. Use of Service
              </h3>
              <p className="text-sm leading-relaxed">
                You agree not to use the service for any unlawful purpose or in
                any way that interrupts or damages the platform. Code DEv
                reserves the right to terminate accounts for violations.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                4. Changes to Terms
              </h3>
              <p className="text-sm leading-relaxed">
                We may update these Terms and Conditions from time to time. You
                will be notified of significant changes via email or through the
                platform.
              </p>
            </section>

            {/* Contact Info */}
            <section>
              <p className="text-sm leading-relaxed">
                For questions about these Terms, please contact us at{" "}
                <a
                  href="mailto:support@codedev.com"
                  className="text-teal-600 hover:underline"
                >
                  support@codedev.com
                </a>
                .
              </p>
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
}
