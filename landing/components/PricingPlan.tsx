import styles from "../styles/PricingPlan.module.css";
import { CheckIcon } from "@heroicons/react/24/outline";

export const PricingPlan = ({
  name,
  monthly,
  yearly,
  href,
  list,
  description,
}: {
  name: string;
  monthly: string;
  description: string;
  yearly: string;
  href: string;
  list: string[];
}) => {
  return (
    <div
      className={
        name === "Pro" ? styles.selectedContainer : styles.normalContainer
      }
    >
      <div className={styles.container}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{description}</div>

        <div className={styles.pricingLine}>
          <div style={{ color: "#777", marginTop: "12px", fontSize: "1.4em" }}>
            $
          </div>
          <div style={{ fontSize: "4em" }} className={styles.figure}>
            {monthly}
          </div>
          <div style={{ marginTop: "44px", color: "#777" }}>/month</div>
        </div>

        <button className={styles.buyButton}>
          <a href={href}>Buy</a>
        </button>

        <ul className={styles.list}>
          {(list ?? []).map((item) => (
            <li key={item} className={styles.item}>
              <CheckIcon width={16} style={{ marginBottom: "-2px" }} /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
