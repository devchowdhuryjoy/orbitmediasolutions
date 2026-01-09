import React from "react";

const ERPFaq = ({ productData }) => {
  if (!productData) return null;

  const faqData = productData.faq || [
    { id: 1, question: "What is a customized software?", answer: "Tailor-made software that fits your workflow." },
    { id: 2, question: "Why choose custom software?", answer: "No irrelevant features—only what makes your business efficient." },
  ];

  return (
    <div className="container mx-auto py-10">
      <h4 className="text-center text-4xl font-bold mb-6">FAQ</h4>
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <details key={item.id} className="collapse bg-base-100 border border-base-300" open={index === 0}>
            <summary className="collapse-title font-semibold">{index + 1}. {item.question}</summary>
            <div className="collapse-content text-sm">{item.answer}</div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default ERPFaq;
