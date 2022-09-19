import styles from "../styles/FAQ.module.css";

const qa = [
  {
    question: "How CloudTempo works?",
    answer:
      "CloudTempo is a browser extension. Once you've installed it from the Chrome Web Store, head to your AWS Console and press CMD / CTRL + K. Then, type anything you like.",
  },
  {
    question: "Do I need to provide my AWS credentials?",
    answer:
      "No, it's completely zero-setup. CloudTempo uses your current identity that you're using to visit your AWS Console. You don't have to provide any kind of long-lived credentials or authorize anything new.",
  },
  {
    question:
      "Is it safe? Does it store my credentials or send them somewhere?",
    answer:
      "Yes, it is safe. Because we value privacy, CloudTempo works 100% locally without communicating with any external servers. All the indexing data is stored encrypted on *your* computer. You own the data.",
  },
  {
    question: "Can I try for free? Do I have to pay?",
    answer:
      "Yes! You can try CloudTempo for free for 7 days. Simply download it and head to AWS Console. After that period, you'll have to pay.",
  },
  {
    question: "What's your cancellation policy",
    answer:
      "If you no longer wish to use CloudTango, you may cancel at any time, and we will not bill you again.",
  },
];

export const FAQ = () => {
  return (
    <div className={styles.section}>
      <h2
        className={styles.title}
        style={{ fontSize: "3em", marginBottom: 0, textAlign: "center" }}
      >
        Frequently asked questions
      </h2>
      <h3 className={styles.description}>
        It's not magic. Asking questions is the first way to begin a change.
      </h3>
      <div className={styles.questions}>
        {qa.map((q) => (
          <div className={styles.qa} key={q.question}>
            <p className={styles.question}>{q.question}</p>
            <p className={styles.answer}>{q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
