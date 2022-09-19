import { PricingPlan } from "./PricingPlan";

export const Pricing = () => {
  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
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
    </div>
  );
};
