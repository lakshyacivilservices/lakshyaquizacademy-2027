"use client";

import { useState } from "react";

const examData = [
  {
    id: "uppsc",
    title: "UPPSC PRE",
    color: "#2563eb",

    subjects: [
      "Ancient History",
      "Modern History",
      "Indian Geography",
      "World Geography",
      "Indian Polity",
      "Economy",
      "Environment",
      "General Science",
      "Current Affairs",
      "UP Special",
      "Hindi Sahitya",
      "NCERT MCQs",
    ],

    mcqs: [
      {
        q: "Who founded the Maurya Empire?",
        o: [
          "Ashoka",
          "Chandragupta Maurya",
          "Harsha",
          "Kanishka",
        ],
        a: "Chandragupta Maurya",
      },

      {
        q: "Which river is called the Ganga of South India?",
        o: [
          "Godavari",
          "Krishna",
          "Kaveri",
          "Narmada",
        ],
        a: "Godavari",
      },
    ],
  },

  {
    id: "mains",
    title: "UPPSC MAINS",
    color: "#7c3aed",

    subjects: [
      "General Hindi",
      "Essay",
      "GS Paper 1",
      "GS Paper 2",
      "GS Paper 3",
      "GS Paper 4",
    ],

    mcqs: [
      {
        q: "Essay paper is of how many marks in UPPSC?",
        o: ["100", "150", "200", "300"],
        a: "150",
      },

      {
        q: "GS Paper 4 is related to?",
        o: [
          "Science",
          "History",
          "Ethics",
          "Geography",
        ],
        a: "Ethics",
      },
    ],
  },

  {
    id: "ugcnet",
    title: "UGC NET",
    color: "#9333ea",

    subjects: [
      "Psychology",
      "Sociology",
      "Anthropology",
      "Education",
      "Management",
      "Environmental Sciences",
    ],

    mcqs: [
      {
        q: "Who proposed Classical Conditioning?",
        o: [
          "Skinner",
          "Pavlov",
          "Freud",
          "Bandura",
        ],
        a: "Pavlov",
      },

      {
        q: "UGC NET Paper 1 is related to?",
        o: [
          "Research Aptitude",
          "Math",
          "Science",
          "History",
        ],
        a: "Research Aptitude",
      },
    ],
  },

  {
    id: "heo",
    title: "HEALTH EDUCATION OFFICER",
    color: "#16a34a",

    subjects: [
      "Health Education",
      "Public Health",
      "Nutrition",
      "Mental Health",
      "Family Welfare",
    ],

    mcqs: [
      {
        q: "WHO stands for?",
        o: [
          "World Health Organization",
          "World Human Office",
          "Health World Order",
          "None",
        ],
        a: "World Health Organization",
      },

      {
        q: "Balanced diet contains?",
        o: [
          "Only proteins",
          "Only vitamins",
          "All nutrients",
          "Only carbs",
        ],
        a: "All nutrients",
      },
    ],
  },

  {
    id: "ai",
    title: "ARTIFICIAL INTELLIGENCE",
    color: "#0ea5e9",

    subjects: [
      "Machine Learning",
      "Deep Learning",
      "Prompt Engineering",
      "ChatGPT",
    ],

    mcqs: [
      {
        q: "AI stands for?",
        o: [
          "Artificial Intelligence",
          "Advanced Internet",
          "Auto Input",
          "None",
        ],
        a: "Artificial Intelligence",
      },

      {
        q: "ChatGPT is developed by?",
        o: [
          "Google",
          "Microsoft",
          "OpenAI",
          "Meta",
        ],
        a: "OpenAI",
      },
    ],
  },

  {
    id: "datascience",
    title: "DATA SCIENCE",
    color: "#ea580c",

    subjects: [
      "Python",
      "Pandas",
      "Statistics",
      "SQL",
      "Big Data",
    ],

    mcqs: [
      {
        q: "Python is a?",
        o: [
          "Programming Language",
          "Database",
          "Browser",
          "OS",
        ],
        a: "Programming Language",
      },

      {
        q: "Pandas is used for?",
        o: [
          "Gaming",
          "Data Analysis",
          "Video Editing",
          "Animation",
        ],
        a: "Data Analysis",
      },
    ],
  },
];

export default function Home() {
  const [selectedExam, setSelectedExam] =
    useState(examData[0]);

  return (
    <main
      style={{
        display: "flex",
        fontFamily: "Arial",
        background: "#f3f4f6",
      }}
    >
      <aside
        style={{
          width: "250px",
          background: "#020617",
          color: "white",
          minHeight: "100vh",
          padding: "20px",
          position: "sticky",
          top: 0,
          overflowY: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            marginBottom: "25px",
          }}
        >
          🚀 Lakshya
        </h1>

        {examData.map((exam, i) => (
          <button
            key={i}
            onClick={() =>
              setSelectedExam(exam)
            }
            style={{
              width: "100%",
              textAlign: "left",
              background:
                selectedExam.id === exam.id
                  ? exam.color
                  : "#111827",
              color: "white",
              border: "none",
              padding: "14px",
              marginBottom: "12px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "bold",
            }}
          >
            {exam.title}
          </button>
        ))}

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h3>Follow Us</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <a href="#">YouTube</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Blogger</a>
            <a href="#">Gumroad</a>
            <a href="#">Amazon KDP</a>
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
              "linear-gradient(90deg,#1d4ed8,#7c3aed)",
            color: "white",
            padding: "50px",
            borderRadius: "24px",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "52px",
              marginBottom: "20px",
            }}
          >
            {selectedExam.title}
          </h1>

          <p
            style={{
              fontSize: "18px",
            }}
          >
            India's Premium MCQ Platform
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "24px",
            marginBottom: "30px",
          }}
        >
          <h2>Subjects</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "14px",
              marginTop: "20px",
            }}
          >
            {selectedExam.subjects.map(
              (subject, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    background: "#eff6ff",
                    padding: "14px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    color: "#111827",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  {subject}
                </a>
              )
            )}
          </div>
        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "24px",
          }}
        >
          <h2>MCQs</h2>

          {selectedExam.mcqs.map((mcq, i) => (
            <div
              key={i}
              style={{
                marginTop: "30px",
                background: "#f8fafc",
                padding: "24px",
                borderRadius: "18px",
              }}
            >
              <h3>
                Q{i + 1}. {mcq.q}
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "12px",
                  marginTop: "20px",
                }}
              >
                {mcq.o.map((opt, j) => (
                  <button
                    key={j}
                    style={{
                      background: "white",
                      border:
                        "1px solid #d1d5db",
                      padding: "14px",
                      borderRadius: "12px",
                      textAlign: "left",
                      cursor: "pointer",
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <p
                style={{
                  marginTop: "18px",
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                Correct Answer: {mcq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
