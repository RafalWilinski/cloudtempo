import styles from "../styles/NewsletterForm.module.css";
export const NewsletterForm = () => {
  return (
    <div id="revue-embed" className={styles.container}>
      <h2>Stay in the loop</h2>
      <form
        action="https://www.getrevue.co/profile/_cloudtempo/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="revue-form-group">
          <input
            className={styles.input}
            placeholder="Your email address..."
            type="email"
            name="member[email]"
            id="member_email"
          />
        </div>
        <div className="revue-form-group">
          <input
            className={styles.input}
            placeholder="Name..."
            type="text"
            name="member[first_name]"
            id="member_first_name"
          />
        </div>
        <div>
          <input
            className={styles.button}
            type="submit"
            value="Notify me once ready"
            name="member[subscribe]"
            id="member_submit"
          />
        </div>
      </form>
    </div>
  );
};
