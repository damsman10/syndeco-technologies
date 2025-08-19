const plans = [
  {
    name: "Basic Plan",
    price: "$9.9",
    duration: "/month",
    description: "Ideal for startups and small businesses looking to get started with essential IT services.",
    features: [
      "Network Monitoring",
      "Helpdesk Support (Limited Hours)",
      "Basic Cybersecurity Protection",
    ],
    highlighted: false,
  },
  {
    name: "Standard Plan",
    price: "$19.9",
    duration: "/month",
    description: "Perfect for growing businesses that require additional features and support.",
    features: [
      "24x7 Network Monitoring",
      "Dedicated Helpdesk Support",
      "Advance Cybersecurity Protection",
      "Cloud Backup & Recovery",
    ],
    highlighted: true, // Most popular
  },
  {
    name: "Premium Plan",
    price: "$9.9",
    duration: "/month",
    description: "Tailored for larger enterprises with complex IT needs and stringent security.",
    features: [
      "Customized Network Monitoring",
      "Priority Helpdesk Support",
      "Comprehensive Cybersecurity Suite",
      "Disaster Recovery Planning & Testing",
      "Onsite Support (as needed)",
    ],
    highlighted: false,
  },
];

const PricingPlan = () => {
  return (
    <div className="py-16 bg-white text-center hidden">
      <p className="text-sm text-blue-600 font-semibold mb-2">Our Pricing Plan</p>
      <h2 className="text-3xl font-bold text-gray-900 mb-10">Explore Our Flexible Pricing Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border rounded-xl p-6 shadow-md text-left ${
              plan.highlighted ? "bg-blue-700 text-white" : "bg-gray-50"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow">
                Most Popular
              </span>
            )}
            <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold mb-1">{plan.price}<span className="text-base font-normal">{plan.duration}</span></div>
            <p className={`text-sm mb-4 ${plan.highlighted ? "text-white/80" : "text-gray-600"}`}>{plan.description}</p>

            <hr className={`mb-4 ${plan.highlighted ? "border-white/30" : "border-gray-300"}`} />

            <p className={`text-sm font-semibold mb-2 ${plan.highlighted ? "text-white" : "text-gray-800"}`}>Featured Included:</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className={`text-blue-600 ${plan.highlighted ? "text-white" : ""}`}>✔️</span>
                  <span className={`${plan.highlighted ? "text-white" : "text-gray-700"} text-sm`}>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 rounded-md font-medium transition ${
                plan.highlighted
                  ? "bg-white text-blue-700 hover:bg-blue-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Buy Now →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
