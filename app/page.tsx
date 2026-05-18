"use client";

import { useState } from "react";

const exams = [
  "Home",
  "UPPSC PRE",
  "UPPSC MAINS",
  "UPPSC INTERVIEW",
  "UGC NET",
  "Health Education Officer",
  "Research Methodology",
  "Artificial Intelligence",
  "Data Science",
  "Current Affairs",
  "GK Tricks",
  "NCERT MCQs",
];

const subjects: any = {
  Home: [
    "Latest MCQs",
    "Trending Exams",
    "Daily Practice",
    "Premium Tests",
  ],

  "UPPSC PRE": [
    "Ancient History",
    "Medieval History",
    "Modern History",
    "Indian Geography",
    "World Geography",
    "Indian Polity",
    "Economy",
    "Environment",
    "Science",
    "Current Affairs",
    "UP Special",
    "Hindi Sahitya",
    "NCERT MCQs",
  ],

  "UPPSC MAINS": [
    "General Hindi",
    "Essay",
    "GS Paper 1",
    "GS Paper 2",
    "GS Paper 3",
    "GS Paper 4",
  ],

  "UPPSC INTERVIEW": [
    "Personality Test",
    "Current Affairs",
    "UP Awareness",
    "Communication Skills",
  ],

  "UGC NET": [
    "Psychology",
    "Sociology",
    "Anthropology",
    "Commerce",
    "Education",
    "Management",
    "Environmental Sciences",
  ],

  "Health Education Officer": [
    "Health Education",
    "Public Health",
    "Nutrition",
    "Mental Health",
    "Family Welfare",
    "Health Communication",
  ],

  "Research Methodology": [
    "Research Design",
    "Sampling",
    "Hypothesis",
    "SPSS",
    "Research Ethics",
  ],

  "Artificial Intelligence": [
    "AI Basics",
    "Machine Learning",
    "Deep Learning",
    "ChatGPT",
  ],

  "Data Science": [
    "Python",
    "Statistics",
    "Pandas",
    "SQL",
    "Big Data",
  ],

  "Current Affairs": [
    "Daily CA",
    "Weekly CA",
    "Monthly CA",
    "UP Current Affairs",
  ],

  "GK Tricks": [
    "History Tricks",
    "Polity Tricks",
    "Economy Tricks",
    "Science Tricks",
    "UP GK Tricks",
    "Current Affairs Tricks",
  ],

  "NCERT MCQs": [
    "NCERT History",
    "NCERT Geography",
    "NCERT Science",
    "NCERT Economy",
  ],
};

const mcqs = [
  {
    q: "Who founded Maurya Empire?",

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
    q: "Capital of Uttar Pradesh?",

    options: [
      "Agra",
      "Kanpur",
      "Lucknow",
      "Varanasi",
    ],

    answer: "Lucknow",
  },

  {
    q: "AI stands for?",

    options: [
      "Artificial Intelligence",
      "Auto Internet",
      "Advanced Input",
      "None",
    ],

    answer:
      "Artificial Intelligence",
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
    q: "Who wrote Arthashastra?",

    options: [
      "Chanakya",
      "Kabir",
      "Kalidas",
      "None",
    ],

    answer: "Chanakya",
  },
];

export default function Home() {
  const [selectedExam, setSelectedExam] =
    useState("Home");

  const [selectedSubject, setSelectedSubject] =
    useState("Latest MCQs");

  const [answers, setAnswers] =
    useState<any>({});

  const [score, setScore] =
    useState(0);

  const checkAnswer = (
    qIndex: number,
    option: string,
    answer: string
  ) => {
    if (answers[qIndex]) return;

    setAnswers({
      ...answers,

      [qIndex]: {
        selected: option,

        answer,
      },
    });

    if (option === answer) {
      setScore(score + 1);
    }
  };

  return (
    <main
      style={{
        fontFamily: "Arial",
        background: "#eaeded",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "#131921",
          color: "white",
          padding: "10px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent:
            "space-between",
          position: "sticky",
          top: 0,
          zIndex: 999,
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
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "#f59e0b",
            }}
          />

          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "22px",
              }}
            >
              Lakshya Academy
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "10px",
                color: "#cbd5e1",
              }}
            >
              Premium MCQ Platform
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
          }}
        >
          {exams.map((exam, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedExam(exam);

                setSelectedSubject(
                  subjects[exam][0]
                );

                setAnswers({});

                setScore(0);
              }}
              style={{
                background:
                  selectedExam === exam
                    ? "#febd69"
                    : "#232f3e",

                color:
                  selectedExam === exam
                    ? "black"
                    : "white",

                border: "none",

                padding: "8px 12px",

                borderRadius: "6px",

                fontSize: "11px",

                fontWeight: "bold",

                cursor: "pointer",

                whiteSpace:
                  "nowrap",
              }}
            >
              {exam}
            </button>
          ))}
        </div>
      </header>

      <div
        style={{
          display: "flex",
        }}
      >
        <aside
          style={{
            width: "270px",
            background: "white",
            minHeight: "100vh",
            padding: "18px",
            borderRight:
              "1px solid #d1d5db",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg,#131921,#232f3e)",

              borderRadius: "16px",

              padding: "24px",

              color: "white",

              marginBottom: "20px",
            }}
          >
            <div
              style={{
                background:
                  "rgba(255,255,255,0.1)",

                display:
                  "inline-block",

                padding:
                  "6px 10px",

                borderRadius:
                  "8px",

                fontSize:
                  "10px",

                marginBottom:
                  "10px",
              }}
            >
              AMAZON STYLE UI
            </div>

            <h2
              style={{
                fontSize: "34px",
                lineHeight: 1.1,
              }}
            >
              Premium
              <br />
              MCQ Portal
            </h2>

            <p
              style={{
                fontSize: "12px",
                lineHeight: 1.7,
                color: "#d1d5db",
              }}
            >
              UPPSC • UGC NET • AI •
              Research Methodology •
              Current Affairs
            </p>

            <button
              style={{
                marginTop: "12px",
                background: "#febd69",
                border: "none",
                padding: "12px",
                borderRadius: "8px",
                width: "100%",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              🚀 Start Learning
            </button>
          </div>

          <h3
            style={{
              fontSize: "14px",
            }}
          >
            Subjects
          </h3>

          <div
            style={{
              display: "grid",
              gap: "8px",
              marginTop: "12px",
            }}
          >
            {subjects[selectedExam].map(
              (
                subject: string,
                i: number
              ) => (
                <button
                  key={i}
                  onClick={() =>
                    setSelectedSubject(
                      subject
                    )
                  }
                  style={{
                    background:
                      selectedSubject ===
                      subject
                        ? "#131921"
                        : "#f3f4f6",

                    color:
                      selectedSubject ===
                      subject
                        ? "white"
                        : "#111827",

                    border:
                      "1px solid #e5e7eb",

                    padding:
                      "10px",

                    borderRadius:
                      "8px",

                    textAlign:
                      "left",

                    fontSize:
                      "11px",

                    cursor:
                      "pointer",

                    fontWeight:
                      "bold",
                  }}
                >
                  {subject}
                </button>
              )
            )}
          </div>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            <h3
              style={{
                fontSize: "13px",
              }}
            >
              Follow Us
            </h3>

            <div
              style={{
                display: "grid",
                gap: "8px",
                marginTop: "10px",
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
            padding: "20px",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg,#232f3e,#131921)",

              color: "white",

              borderRadius: "16px",

              padding: "30px",

              marginBottom: "20px",
            }}
          >
            <h1
              style={{
                fontSize: "38px",
                marginBottom: "8px",
              }}
            >
              {selectedSubject}
            </h1>

            <p
              style={{
                fontSize: "14px",
                color: "#d1d5db",
              }}
            >
              Score: {score}/
              {mcqs.length}
            </p>
          </div>

          {mcqs.map((mcq, qIndex) => (
            <div
              key={qIndex}
              style={{
                background: "white",

                borderRadius: "16px",

                padding: "22px",

                marginBottom: "18px",

                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <h2
                style={{
                  fontSize: "16px",
                  color: "#111827",
                }}
              >
                Q{qIndex + 1}. {mcq.q}
              </h2>

              <div
                style={{
                  display: "grid",
                  gap: "10px",
                  marginTop: "18px",
                }}
              >
                {mcq.options.map(
                  (option, i) => {
                    const selected =
                      answers[qIndex]
                        ?.selected;

                    const answer =
                      answers[qIndex]
                        ?.answer;

                    let bg = "white";

                    let color =
                      "#111827";

                    if (
                      selected ===
                        option &&
                      option ===
                        answer
                    ) {
                      bg = "#22c55e";

                      color = "white";
                    }

                    else if (
                      selected ===
                        option &&
                      option !==
                        answer
                    ) {
                      bg = "#ef4444";

                      color = "white";
                    }

                    else if (
                      option ===
                        answer &&
                      selected
                    ) {
                      bg = "#22c55e";

                      color = "white";
                    }

                    return (
                      <button
                        key={i}
                        onClick={() =>
                          checkAnswer(
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
                            "14px",

                          borderRadius:
                            "10px",

                          cursor:
                            "pointer",

                          textAlign:
                            "left",

                          fontSize:
                            "12px",

                          fontWeight:
                            "bold",
                        }}
                      >
                        {option}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          ))}
        </section>
      </div>

      <footer
        style={{
          background: "#131921",
          color: "white",
          padding: "18px",
          textAlign: "center",
          fontSize: "11px",
        }}
      >
        © 2026 Lakshya Academy •
        Premium MCQ Learning Platform
      </footer>
    </main>
  );
}
