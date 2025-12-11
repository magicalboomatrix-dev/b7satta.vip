import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="containers">
        <div className="wrapper">
          <div className="text-center">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {/* FAQ 1 */}
            <div className="container01">
              <div
                className={`question ${activeIndex === 0 ? "active" : ""}`}
                onClick={() => toggleFAQ(0)}
              >
                <span className="sr">01.</span> What is Satta King and who started it?
              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === 0 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="answer">
                  Satta King (also known as Satta Matka) is a numbers-based lottery game where players pick numbers from <b>00 to 99</b>. "Satta" refers to betting and "Matka" originally referred to the pot used to draw numbers. Over time this regional game evolved into multiple market draws across India. A3 Satta provides reliable information about results, market schedules and historical charts to help users follow draws responsibly.
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="container01">
              <div
                className={`question ${activeIndex === 1 ? "active" : ""}`}
                onClick={() => toggleFAQ(1)}
              >
                <span className="sr">02.</span> What is the significance of A3 Satta in the Satta King world?
              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === 1 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="answer">
                  A3 Satta publishes verified Satta King results, live draw alerts and historical charts. We focus on transparency, up-to-date market information and guidance about responsible play — helping both new and experienced users access accurate Satta King results and trend data.
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="container01">
              <div
                className={`question ${activeIndex === 2 ? "active" : ""}`}
                onClick={() => toggleFAQ(2)}
              >
                <span className="sr">03.</span> How to play Satta King with A3 Satta?
              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === 2 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="answer">
To play Satta King players typically choose a market and select numbers (00–99). Common bet types include single (Ank), pair (Jodi) and Panna (three-digit). A3 Satta provides market schedules and result updates; always confirm rules and legality in your jurisdiction before placing any bets.
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="container01">
              <div
                className={`question ${activeIndex === 3 ? "active" : ""}`}
                onClick={() => toggleFAQ(3)}
              >
                <span className="sr">04.</span> What are Satta King bets and their main payout ratios?
              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === 3 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="answer">
                  Common bet types include:<br/>
                
                <b>Ank (Single):</b> A wager on a single digit (0–9). <br/>
                <b>Jodi (Pair):</b> A bet on a two-digit pair (00–99).<br/>
                <b>Panna (Treble):</b> A three-digit combination bet.<br/>
                Payouts vary by market and bet type; consult the market paytable and always play responsibly.
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="container01">
              <div
                className={`question ${activeIndex === 4 ? "active" : ""}`}
                onClick={() => toggleFAQ(4)}
              >
                <span className="sr">05.</span> How can a player check the results to keep up with Satta King markets?

              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === 4 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="answer">
                  A3 Satta posts live draw results, archives historical charts and provides market timings. Use these verified archives and official result posts to research patterns and check past outcomes. Always rely on trusted sources to avoid scams or inaccurate information.
                </div>
              </div>
            </div>

            <div className="container01">
              <div
                className={`question ${activeIndex === 5 ? "active" : ""}`}
                onClick={() => toggleFAQ(5)}
              >
                <span className="sr">06.</span> What are the Satta King India Laws and regulations?

              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === 5 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="answer">
                  Laws for Satta King vary by jurisdiction. In many places unregulated betting is illegal and can carry penalties. Before participating, check your local laws and only use licensed, legal services where available. A3 Satta provides information for research and does not encourage illegal activities.

                </div>
              </div>
            </div>

            <div className="container01">
              <div
                className={`question ${activeIndex === 6 ? "active" : ""}`}
                onClick={() => toggleFAQ(6)}
              >
                <span className="sr">07.</span> What are the dangers of playing Satta King online and offline?

              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === 6 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="answer">
                  Key risks include:<br/>
                    <b>Financial loss:</b> Betting carries a high risk of losing money.<br/>
                    <b>Addiction:</b> Repeated play can lead to harmful gambling behaviour.<br/>
                    <b>Legal risk:</b> Unregulated gambling may be illegal in your area.<br/>
                    <b>Fraud and security:</b> Use only reputable sources and protect personal data. A3 Satta emphasizes safe-play guidance and privacy best practices.
                </div>
              </div>
            </div>

            <div className="container01">
              <div
                className={`question ${activeIndex === 7 ? "active" : ""}`}
                onClick={() => toggleFAQ(7)}
              >
                <span className="sr">08.</span> Are there any winning tricks for Satta King?

              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === 7 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="answer">                  
There are no guaranteed strategies to win — draws are random. Some players review historical charts and trends to make informed choices, but past results do not change future odds. A3 Satta recommends responsible play: set limits, avoid chasing losses and treat betting as entertainment, not income.

                </div>
              </div>
            </div>
			
			<div className="container01">
              <div
                className={`question ${activeIndex === 8 ? "active" : ""}`}
                onClick={() => toggleFAQ(8)}
              >
                <span className="sr">09.</span> How does A3 Satta protect user safety, privacy and ensure responsible gaming?

              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === 8 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="answer">                  
A3 Satta prioritizes user privacy and security. We encourage safe-play practices, share resources on recognizing problem gambling, and provide links to support organizations where available. Protecting personal data and promoting responsible gaming are core parts of our service information.

                </div>
              </div>
            </div>
			
			<div className="container01">
              <div
                className={`question ${activeIndex === 9 ? "active" : ""}`}
                onClick={() => toggleFAQ(9)}
              >
                <span className="sr">10.</span> What distinguishes A3 Satta's business partners, like A3 Satta and B7 Satta?

              </div>
              <div
                className="answercont"
                style={{
                  maxHeight: activeIndex === 9 ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease",
                }}
              >
                <div className="answer">                  
Partner sites and market operators often share results and analytics that contribute to broader transparency across draws. At A3 Satta we highlight verified sources and recommended partner pages to help users find accurate market information and reliable result archives.

                </div>
              </div>
            </div>


            {/* Add more FAQs below as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

