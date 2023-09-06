import React, { useState } from 'react'

const faqItems = [
  {
    id: "1",
    question: "How can I pay?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: "2",
    question: "How to setup account?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: "3",
    question: "What is process to get refund?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: "4",
    question: "What is process to get refund?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged",
  },
  {
    id: "5",
    question: "lorem ipsum dollar summit?",
    answer:
      "Unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an Lorem Ipsum is simply dummy text of the printing and types..",
  },
  {
    id: "6",
    question: "Simply dummy text ipsum dollar summit lorem?",
    answer:
      "It has survived not only five cen turies but also the leap into electronic typesetting, remaining essentially unchanged Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has. been the industrys standard dummy text ever since the when an Lorem.",
  },
];

function FaqBlock() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <>
      <section id="faqBlock" className="row_am faq_section">
        <div className="container">
          <div
            className="section_title"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="300"
          >
            <h2>
              <span>FAQ</span> - Frequently Asked Questions
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the standard dummy.
            </p>
          </div>
          <div className="faq_panel">
            <div className="accordion" id="accordionExample">
              {faqItems.map((item, index) => (
                <div
                  className="card"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  key={item.id}
                >
                  <div className="card-header" id={`heading${index}`}>
                    <h2 className="mb-0">
                      <button
                        type="button"
                        className={`btn btn-link ${activeIndex === index ? "active" : ""
                          }`}
                        onClick={() => handleAccordionClick(index)}
                      >
                        <i
                          className={`icon_faq icofont-plus ${activeIndex === index ? "active" : ""
                            }`}
                        ></i>{" "}
                        {item.question}
                      </button>
                    </h2>
                  </div>
                  <div
                    id={`collapse${index}`}
                    className={`collapse ${activeIndex === index ? "show" : ""
                      }`}
                    aria-labelledby={`heading${index}`}
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FaqBlock;
