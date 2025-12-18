import React from "react";

const ERPFaq = () => {
  const faqData = [
    {
      id: 1,
      question: "What is a customized software?",
      answer: "Tailor-made software that fits your exact workflow.",
    },
    {
      id: 2,
      question: "Why choose custom software?",
      answer: "No irrelevant features—only what makes your business efficient.",
    },
    {
      id: 3,
      question: "Do you offer free consultation?",
      answer: "Yes, we analyze business needs before development.",
    },
    {
      id: 4,
      question: "Can it integrate with other systems?",
      answer: "Yes, supports API & system integrations.",
    },
    {
      id: 5,
      question: "What industries do you serve?",
      answer:
        "Corporate, SME, Healthcare, Education, Retail, Logistics & more.",
    },
  ];
  return (
    <div className="container mx-auto">
      <h4 className="text-center text-4xl font-bold mb-2.5">
        FAQ<span>s</span>
      </h4>
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <details
            className="collapse bg-base-100 border border-base-300"
            key={item.id}
            name="my-accordion-det-1"
            open = {index === 0}
          >
            <summary className="collapse-title font-semibold">
              {index + 1}. {item.question}
            </summary>
            <div className="collapse-content text-sm">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default ERPFaq;
