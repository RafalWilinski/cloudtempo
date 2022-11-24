import styles from "../styles/PricingPlan.module.css";
import { CheckIcon } from "@heroicons/react/24/outline";

export const PricingPlan = ({
  name,
  monthly,
  yearly,
  isMonthly,
  monthlyHref,
  yearlyHref,
  list,
  description,
}: {
  name: string;
  monthly: string;
  isMonthly: boolean;
  description: string;
  yearly: string;
  monthlyHref: string;
  yearlyHref: string;
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
            {isMonthly ? monthly : yearly}
          </div>
          <div style={{ marginTop: "44px", color: "#777" }}>
            {isMonthly ? "/month" : "/year"}
          </div>
        </div>

        <a
          className={styles.buyButton}
          href={isMonthly ? monthlyHref : yearlyHref}
          onClick={() => {
            window.fathom?.trackGoal(
              name === "Pro" ? "O45AWBHZ" : "NLB9Y5RY",
              0
            );
          }}
        >
          <div style={{ textDecoration: "none" }}>Buy</div>
        </a>

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
