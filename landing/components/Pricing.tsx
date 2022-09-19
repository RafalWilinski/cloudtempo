/* eslint-disable react/no-unescaped-entities */
import { PricingPlan } from "./PricingPlan";

export const Pricing = () => {
  return (
    <div style={{ textAlign: "center", margin: "80px auto" }}>
      <h2 style={{ fontSize: "3em", marginBottom: 0 }}>Pricing & Plans</h2>
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
          href="https://cloudtempo.lemonsqueezy.com/checkout/buy/6ad12ebe-e509-4cf1-89ae-24f704946aae"
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
          href="https://cloudtempo.lemonsqueezy.com/checkout/buy/6ad12ebe-e509-4cf1-89ae-24f704946aae"
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
