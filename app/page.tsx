"use client";

import { useState } from "react";

const platformData = [
  {
    category: "Home",

    color: "#2563eb",

    subjects: [
      {
        name: "Daily MCQs",

        mcqs: [
          {
            q: "Capital of India?",
            options: [
              "Delhi",
              "Mumbai",
              "Lucknow",
              "Agra",
            ],
            answer: "Delhi",
          },

          {
            q: "Largest Ocean?",
            options: [
              "Pacific",
              "Indian",
              "Atlantic",
              "Arctic",
            ],
            answer: "Pacific",
          },

          {
            q: "CPU stands for?",
            options: [
              "Central Processing Unit",
              "Computer Program Unit",
              "Central Program User",
              "None",
            ],
            answer:
              "Central Processing Unit",
          },

          {
            q: "Fastest land animal?",
            options: [
              "Lion",
              "Tiger",
              "Cheetah",
              "Horse",
            ],
            answer: "Cheetah",
          },

          {
            q: "Who wrote Ramayana?",
            options: [
              "Kalidas",
              "Valmiki",
              "Kabir",
              "Tulsidas",
            ],
            answer: "Valmiki",
          },
        ],
      },
    ],
  },

  {
    category: "UPPSC",

    color: "#2563eb",

    subjects: [
      {
        name: "Ancient History",

        mcqs: [
          {
            q: "Founder of Maurya Empire?",
            options: [
              "Ashoka",
              "Chandragupta Maurya",
              "Harsha",
              "Kanishka",
            ],
            answer:
              "Chandragupta Maurya",
          },

          {
            q: "Who wrote Arthashastra?",
            options: [
              "Chanakya",
              "Kabir",
              "Kalidas",
              "None",
            ],
            answer: "Chanakya",
          },

          {
            q: "Nalanda University was in?",
            options: [
              "UP",
              "Delhi",
              "Bihar",
              "MP",
            ],
            answer: "Bihar",
          },

          {
            q: "Ashoka belonged to?",
            options: [
              "Maurya Dynasty",
              "Gupta Dynasty",
              "Kushan Dynasty",
              "Slave Dynasty",
            ],
            answer:
              "Maurya Dynasty",
          },

          {
            q: "Vedas are written in?",
            options: [
              "Hindi",
              "Sanskrit",
              "Pali",
              "Urdu",
            ],
            answer: "Sanskrit",
          },
        ],
      },

      {
        name: "Indian Geography",

        mcqs: [
          {
            q: "Capital of UP?",
            options: [
              "Kanpur",
              "Lucknow",
              "Agra",
              "Varanasi",
            ],
            answer: "Lucknow",
          },

          {
            q: "Largest state in India?",
            options: [
              "UP",
              "Rajasthan",
              "MP",
              "Bihar",
            ],
            answer: "Rajasthan",
          },

          {
            q: "Indian desert?",
            options: [
              "Thar",
              "Sahara",
              "Gobi",
              "None",
            ],
            answer: "Thar",
          },

          {
            q: "Highest mountain peak?",
            options: [
              "K2",
              "Everest",
              "Kanchenjunga",
              "Nanda Devi",
            ],
            answer: "Everest",
          },

          {
            q: "Ganga originates from?",
            options: [
              "Gangotri",
              "Yamunotri",
              "Badrinath",
              "Kedarnath",
            ],
            answer: "Gangotri",
          },
        ],
      },
    ],
  },

  {
    category: "Research Methodology",

    color: "#ec4899",

    subjects: [
      {
        name: "Research Basics",

        mcqs: [
          {
            q: "Research starts with?",
            options: [
              "Problem",
              "Book",
              "Data",
              "Analysis",
            ],
            answer: "Problem",
          },

          {
            q: "SPSS is used for?",
            options: [
              "Statistics",
              "Cooking",
              "Gaming",
              "Drawing",
            ],
            answer: "Statistics",
          },

          {
            q: "Hypothesis means?",
            options: [
              "Fact",
              "Assumption",
              "Law",
              "Theory",
            ],
            answer: "Assumption",
          },

          {
            q: "Sampling means?",
            options: [
              "Population",
              "Subset",
              "Experiment",
              "Survey",
            ],
            answer: "Subset",
          },

          {
            q: "Qualitative research uses?",
            options: [
              "Words",
              "Numbers",
              "Graphs",
              "Formula",
            ],
            answer: "Words",
          },
        ],
      },
    ],
  },

  {
    category: "UGC NET",

    color: "#9333ea",

    subjects: [
      {
        name: "Psychology",

        mcqs: [
          {
            q: "Who proposed Classical Conditioning?",
            options: [
              "Freud",
              "Pavlov",
              "Piaget",
              "Skinner",
            ],
            answer: "Pavlov",
          },

          {
            q: "IQ stands for?",
            options: [
              "Internal Quality",
              "Intelligence Quotient",
              "Intelligence Query",
              "None",
            ],
            answer:
              "Intelligence Quotient",
          },

          {
            q: "Father of Psychoanalysis?",
            options: [
              "Freud",
              "Skinner",
              "Bandura",
              "Piaget",
            ],
            answer: "Freud",
          },

          {
            q: "Memory is related to?",
            options: [
              "Learning",
              "Storage",
              "Recall",
              "All",
            ],
            answer: "All",
          },

          {
            q: "Behaviorism was given by?",
            options: [
              "Watson",
              "Freud",
              "Piaget",
              "Maslow",
            ],
            answer: "Watson",
          },
        ],
      },
    ],
  },

  {
    category:
      "Artificial Intelligence",

    color: "#0ea5e9",

    subjects: [
      {
        name: "AI Basics",

        mcqs: [
          {
            q: "AI stands for?",
            options: [
              "Artificial Intelligence",
              "Advanced Internet",
              "Auto Information",
              "None",
            ],
            answer:
              "Artificial Intelligence",
          },

          {
            q: "ChatGPT developed by?",
            options: [
              "Google",
              "OpenAI",
              "Meta",
              "Microsoft",
            ],
            answer: "OpenAI",
          },

          {
            q: "ML means?",
            options: [
              "Machine Learning",
              "Main Logic",
              "Machine Logic",
              "None",
            ],
            answer:
              "Machine Learning",
          },

          {
            q: "AI works mainly on?",
            options: [
              "Data",
              "Books",
              "Food",
              "Music",
            ],
            answer: "Data",
          },

          {
            q: "Deep Learning uses?",
            options: [
              "Neural Networks",
              "Cooking",
              "Painting",
              "Gaming",
            ],
            answer:
              "Neural Networks",
          },
        ],
      },
    ],
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState(platformData[0]);

  const [selectedSubject, setSelectedSubject] =
    useState(
      platformData[0].subjects[0]
    );

  const [answers, setAnswers] =
    useState<any>({});

  const [score, setScore] =
    useState(0);

  const handleAnswer = (
    qIndex: number,
    option: string,
    answer: string
  ) => {
    if (answers[qIndex]) return;

    const correct = option === answer;

    setAnswers({
      ...answers,

      [qIndex]: {
        selected: option,
        answer,
      },
    });

    if (correct) {
      setScore(score + 1);
    }
  };

  return (
    <main
      style={{
        background: "#eaedf2",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          background: "#131921",
          color: "white",
          padding: "14px 22px",
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 999,
          overflowX: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "#ef4444",
            }}
          />

          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "28px",
              }}
            >
              Lakshya Academy
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "11px",
                color: "#cbd5e1",
              }}
            >
              India's Premium MCQ Platform
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          {platformData.map(
            (item, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedCategory(
                    item
                  );

                  setSelectedSubject(
                    item.subjects[0]
                  );

                  setAnswers({});

                  setScore(0);
                }}
                style={{
                  background:
                    selectedCategory.category ===
                    item.category
                      ? item.color
                      : "#232f3e",

                  color: "white",

                  border: "none",

                  padding:
                    "10px 16px",

                  borderRadius:
                    "8px",

                  cursor:
                    "pointer",

                  fontWeight:
                    "bold",

                  fontSize:
                    "12px",

                  whiteSpace:
                    "nowrap",
                }}
              >
                {item.category}
              </button>
            )
          )}
        </div>
      </header>

      <div
        style={{
          display: "flex",
        }}
      >
        <aside
          style={{
            width: "320px",
            background: "white",
            padding: "24px",
            borderRight:
              "1px solid #d1d5db",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg,#001f5c,#1d4ed8,#7c3aed)",

              color: "white",

              borderRadius: "22px",

              padding: "30px",

              marginBottom: "24px",
            }}
          >
            <div
              style={{
                background:
                  "rgba(255,255,255,0.1)",

                display:
                  "inline-block",

                padding:
                  "8px 12px",

                borderRadius:
                  "10px",

                fontSize:
                  "12px",
              }}
            >
              India's Most
            </div>

            <h2
              style={{
                fontSize: "46px",
                lineHeight: 1,
              }}
            >
              Advanced
              <br />

              <span
                style={{
                  color:
                    "#facc15",
                }}
              >
                MCQ Platform
              </span>
            </h2>

            <p
              style={{
                lineHeight: 1.8,
              }}
            >
              UPPSC • UGC NET • AI •
              Data Science • Research
              Methodology
            </p>

            <button
              style={{
                marginTop:
                  "18px",

                background:
                  "#facc15",

                border:
                  "none",

                padding:
                  "14px 18px",

                borderRadius:
                  "10px",

                fontWeight:
                  "bold",

                cursor:
                  "pointer",
              }}
            >
              🚀 Start Practicing
            </button>
          </div>

          <h2
            style={{
              color: "#111827",
            }}
          >
            Subjects
          </h2>

          <div
            style={{
              display: "grid",
              gap: "10px",
              marginTop: "18px",
            }}
          >
            {selectedCategory.subjects.map(
              (subject, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedSubject(
                      subject
                    );

                    setAnswers({});

                    setScore(0);
                  }}
                  style={{
                    background:
                      selectedSubject.name ===
                      subject.name
                        ? selectedCategory.color
                        : "#f3f4f6",

                    color:
                      selectedSubject.name ===
                      subject.name
                        ? "white"
                        : "#111827",

                    border:
                      "none",

                    padding:
                      "14px",

                    borderRadius:
                      "12px",

                    cursor:
                      "pointer",

                    textAlign:
                      "left",

                    fontWeight:
                      "bold",

                    fontSize:
                      "13px",
                  }}
                >
                  {subject.name}
                </button>
              )
            )}
          </div>

          <div
            style={{
              marginTop: "40px",
            }}
          >
            <h3>Follow Us</h3>

            <div
              style={{
                display: "grid",
                gap: "10px",
              }}
            >
              <a href="#">
                YouTube
              </a>

              <a href="#">
                Instagram
              </a>

              <a href="#">
                Facebook
              </a>

              <a href="#">
                Blogger
              </a>

              <a href="#">
                Gumroad
              </a>

              <a href="#">
                Amazon KDP
              </a>
            </div>
          </div>
        </aside>

        <section
          style={{
            flex: 1,
            padding: "30px",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#7c3aed)",

              color: "white",

              padding: "40px",

              borderRadius: "24px",

              marginBottom: "24px",
            }}
          >
            <h1
              style={{
                fontSize: "52px",
              }}
            >
              {selectedSubject.name}
            </h1>

            <p
              style={{
                fontSize: "18px",
              }}
            >
              Score: {score}/
              {
                selectedSubject.mcqs
                  .length
              }
            </p>
          </div>

          {selectedSubject.mcqs.map(
            (mcq, qIndex) => (
              <div
                key={qIndex}
                style={{
                  background:
                    "white",

                  padding:
                    "30px",

                  borderRadius:
                    "22px",

                  marginBottom:
                    "24px",

                  boxShadow:
                    "0 0 20px rgba(0,0,0,0.04)",
                }}
              >
                <h2>
                  Q{qIndex + 1}.{" "}
                  {mcq.q}
                </h2>

                <div
                  style={{
                    display:
                      "grid",

                    gap: "14px",

                    marginTop:
                      "22px",
                  }}
                >
                  {mcq.options.map(
                    (
                      option,
                      i
                    ) => {
                      const selected =
                        answers[
                          qIndex
                        ]
                          ?.selected;

                      const answer =
                        answers[
                          qIndex
                        ]?.answer;

                      let bg =
                        "white";

                      let color =
                        "#111827";

                      if (
                        selected ===
                          option &&
                        option ===
                          answer
                      ) {
                        bg =
                          "#22c55e";

                        color =
                          "white";
                      }

                      else if (
                        selected ===
                          option &&
                        option !==
                          answer
                      ) {
                        bg =
                          "#ef4444";

                        color =
                          "white";
                      }

                      else if (
                        option ===
                          answer &&
                        selected
                      ) {
                        bg =
                          "#22c55e";

                        color =
                          "white";
                      }

                      return (
                        <button
                          key={
                            i
                          }

                          onClick={() =>
                            handleAnswer(
                              qIndex,
                              option,
                              mcq.answer
                            )
                          }

                          style={{
                            background:
                              bg,

                            color:
                              color,

                            border:
                              "1px solid #d1d5db",

                            padding:
                              "16px",

                            borderRadius:
                              "14px",

                            cursor:
                              "pointer",

                            textAlign:
                              "left",

                            fontWeight:
                              "bold",

                            fontSize:
                              "14px",
                          }}
                        >
                          {
                            option
                          }
                        </button>
                      );
                    }
                  )}
                </div>
              </div>
            )
          )}
        </section>
      </div>
    </main>
  );
}
