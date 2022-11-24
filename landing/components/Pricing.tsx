/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import styles from "../styles/Pricing.module.css";
import { PricingPlan } from "./PricingPlan";

export const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div style={{ textAlign: "center", margin: "80px auto" }}>
      <h2 id="pricing" style={{ fontSize: "3em", marginBottom: 0 }}>
        Pricing & Plans
      </h2>
      <h3>
        Basic plan for people with limited set of accounts. Pro plan for people
        juggling a lot of accounts.
      </h3>

      <input
        type="checkbox"
        id="toggle"
        className={styles.toggleCheckbox}
        value={isMonthly}
        onChange={() => setIsMonthly((s) => !s)}
      />
      <label htmlFor="toggle" className={styles.toggleContainer}>
        <div>Monthly</div>
        <div>Yearly</div>
      </label>

      <div className={styles.pricingPlansContainer}>
        <PricingPlan
          isMonthly={isMonthly}
          name="Basic"
          monthlyHref="https://cloudtempo.lemonsqueezy.com/checkout/buy/7d4e12d6-d5f4-46e2-a06f-b87329ddedd5?media=0"
          yearlyHref="https://cloudtempo.lemonsqueezy.com/checkout/buy/d4a8a357-71a9-4a66-808a-5db0f12adb1a?media=0&disabled=17568"
          description=""
          monthly="9"
          yearly="99"
          list={[
            "Up to 3 AWS Identities",
            "Cross-region search",
            "All features & updates",
            "Email support",
          ]}
        />
        <PricingPlan
          isMonthly={isMonthly}
          description=""
          monthlyHref="https://cloudtempo.lemonsqueezy.com/checkout/buy/8183ebf7-f7b1-4a15-9d10-f923a116a490?media=0"
          yearlyHref="https://cloudtempo.lemonsqueezy.com/checkout/buy/d3cff281-bf1d-4292-87c9-3ca7335a1a74?media=0&disabled=17807"
          name="Pro"
          monthly="19"
          yearly="190"
          list={[
            "Up to 25 AWS Identities",
            "Cross-region search",
            "All features & updates",
            "Email support",
          ]}
        />
      </div>
      <span style={{ fontSize: "12px", color: "#ccc" }}>
        Depending on your country's tax rules, additional VAT/GST may be added
        to the final amount.
      </span>
    </div>
  );
};
