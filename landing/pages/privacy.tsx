import styles from "../styles/Home.module.css";

const PrivacyPolicyPage = () => {
  return (
    <main
      className={styles.main}
      style={{
        textAlign: "left",
        display: "block",
      }}
    >
      <h1>Privacy Policy</h1>

      <p>
        We take your privacy very seriously. This policy describes all
        information collected or submitted on the CloudTempo application, and
        what we do with it.
      </p>

      <h2>Data Controllers and Owners</h2>

      <p>Rafal Wilinski</p>

      <h2>Questions</h2>

      <p>
        If you have questions about deleting or correcting your personal data
        please contact us at rafal@cloudtempo.dev
      </p>

      <h2>Protection of Certain Personally-Identifying Information</h2>

      <p>
        No Personally-Identifying Information is transmitted to our servers when
        using CloudTempo. We collect anonymous usage data and crash reports
        through Sentry. This makes it easier for us to troubleshoot problems and
        improve CloudTempo. Hence Usage Data is collected only to operate and
        improve the app and customer support.
      </p>

      <p>
        If you opt in to receive our newsletter when you buy the app, your email
        will be stored in the Mailchimp service. If you prefer not to receive
        any communication from us, you can unsubscribe at any time by clicking
        “Unsubscribe” in our emails, or by contacting us at
        support@CloudTempo.dev
      </p>

      <h2>Information for European Union Customers</h2>

      <p>
        By using CloudTempo and providing your information, you authorize us to
        collect, use, and store your information outside of the European Union.
        Changes to this policy Any future CloudTempo to this policy will be
        posted to this page. Your continued use of the CloudTempo app after we
        make any of these changes is deemed to be in acceptance of those
        changes, so please check this page periodically for updates.
      </p>

      <h2>Your Consent</h2>

      <p>
        By using our app, you consent to our privacy policy. If you have
        questions, you can reach us at support@CloudTempo.dev
      </p>

      <h2>Payments</h2>

      <p>
        Our order process is conducted by our online reseller Paddle.com.
        Paddle.com is the Merchant of Record for all our orders. Paddle provides
        all customer service inquiries and handles returns.
      </p>
    </main>
  );
};

export default PrivacyPolicyPage;
