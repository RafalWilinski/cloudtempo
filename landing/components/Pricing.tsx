/* eslint-disable react/no-unescaped-entities */
import { PricingPlan } from "./PricingPlan";

export const Pricing = () => {
  return (
    <div style={{ textAlign: "center", margin: "80px auto" }}>
      <h2 id="pricing" style={{ fontSize: "3em", marginBottom: 0 }}>
        Pricing & Plans
      </h2>
      <h3>
        Basic plan for people with limited set of accounts. Pro plan for people
        juggling a lot of accounts.
      </h3>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PricingPlan
          name="Basic"
          href="https://cloudtempo.lemonsqueezy.com/checkout/buy/7d4e12d6-d5f4-46e2-a06f-b87329ddedd5?media=0"
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
          description=""
          href="https://cloudtempo.lemonsqueezy.com/checkout/buy/8183ebf7-f7b1-4a15-9d10-f923a116a490?media=0"
          name="Pro"
          monthly="19"
          yearly="199"
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
