"use client";

import { useState } from "react";

const menuData = [
  {
    title: "UPPSC",
    color: "#2563eb",
    sections: {
      "PRELIMS (GS)": [
        "History",
        "Geography",
        "Indian Polity",
        "Economy",
        "Environment",
        "General Science",
        "Current Affairs",
        "UP Special",
        "Hindi Sahitya",
      ],

      CSAT: [
        "Comprehension",
        "Logical Reasoning",
        "Decision Making",
        "Mental Ability",
        "Basic Numeracy",
        "Data Interpretation",
      ],
    },
  },

  {
    title: "UPPSC Mains",
    color: "#7c3aed",
    sections: {
      MAINS: [
        "General Hindi",
        "Essay",
        "GS Paper 1",
        "GS Paper 2",
        "GS Paper 3",
        "GS Paper 4",
      ],
    },
  },

  {
    title: "UPPSC Interview",
    color: "#16a34a",
    sections: {
      INTERVIEW: [
        "Personality Test",
        "Current Affairs",
        "UP Awareness",
        "Communication Skills",
      ],
    },
  },

  {
    title: "UGC NET",
    color: "#9333ea",
    sections: {
      SUBJECTS: [
        "Teaching & Research Aptitude",
        "Economics",
        "Psychology",
        "Sociology",
        "Anthropology",
        "History",
        "Commerce",
        "Education",
        "Management",
        "Environmental Sciences",
      ],
    },
  },

  {
    title: "Health Education Officer",
    color: "#16a34a",
    sections: {
      SUBJECTS: [
        "Health Education",
        "Public Health",
        "Community Health",
        "Family Welfare",
        "Mental Health",
        "National Health Programmes",
        "Nutrition",
        "Health Communication",
      ],

      "INTERVIEW SYLLABUS": [
        "Subject Knowledge",
        "Communication Skills",
        "Leadership",
      ],
    },
  },

  {
    title: "Artificial Intelligence",
    color: "#2563eb",
    sections: {
      SUBJECTS: [
        "AI Basics",
        "Machine Learning",
        "Deep Learning",
        "Prompt Engineering",
        "ChatGPT",
        "AI Ethics",
      ],
    },
  },

  {
    title: "Data Science",
    color: "#ea580c",
    sections: {
      SUBJECTS: [
        "Python",
        "Statistics",
        "Pandas",
        "NumPy",
        "SQL",
        "Big Data",
        "Data Visualization",
      ],
    },
  },

  {
    title: "Research Methodology",
    color: "#ec4899",
    sections: {
      SUBJECTS: [
        "Research Basics",
        "Research Design",
        "Sampling Techniques",
        "Hypothesis Testing",
        "SPSS MCQs",
        "Research Ethics",
      ],
    },
  },

  {
    title: "GK Tricks",
    color: "#db2777",
    sections: {
      TRICKS: [
        "History Tricks",
        "Geography Tricks",
        "Polity Tricks",
        "Economy Tricks",
        "Science Tricks",
        "Current Affairs Tricks",
        "UP GK Tricks",
        "Hindi Sahitya Tricks",
        "Indian Polity Tricks",
        "Environment Tricks",
      ],
    },
  },

  {
    title: "Current Affairs",
    color: "#0891b2",
    sections: {
      CURRENT: [
        "Daily Current Affairs",
        "Weekly Current Affairs",
        "Monthly PDFs",
        "UP Current Affairs",
      ],
    },
  },

  {
    title: "NCERT MCQs",
    color: "#2563eb",
    sections: {
      NCERT: [
        "NCERT History",
        "NCERT Geography",
        "NCERT Economy",
        "NCERT Science",
        "NCERT Environment",
      ],

      EXAMS: [
        "SSC Exams",
        "Banking Exams",
        "Railway Exams",
        "State PCS Exams",
      ],
    },
  },
];

export default function Home() {
  const [activeMenu, setActiveMenu] =
    useState("UPPSC");

  return (
    <main
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          background:
            "linear-gradient(90deg,#020617,#0f172a,#172554)",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          overflowX: "auto",
          whiteSpace: "nowrap",
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
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "#ef4444",
            }}
          />

          <div>
            <h1
              style={{
                color: "white",
                margin: 0,
                fontSize: "18px",
              }}
            >
              Lakshya Academy
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                margin: 0,
                fontSize: "11px",
              }}
            >
              India's Premium MCQ Platform
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            marginLeft: "20px",
          }}
        >
          {menuData.map((menu, i) => (
            <button
              key={i}
              onClick={() =>
                setActiveMenu(menu.title)
              }
              style={{
                background:
                  activeMenu === menu.title
                    ? "#1d4ed8"
                    : "transparent",
                color: "white",
                border:
                  "1px solid rgba(255,255,255,0.1)",
                padding: "10px 12px",
                borderRadius: "8px",
                fontSize: "12px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {menu.title}
            </button>
          ))}
        </div>
      </header>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          minHeight: "640px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(180deg,#001f5c,#001133)",
            color: "white",
            padding: "30px 24px",
          }}
        >
          <div
            style={{
              background:
                "rgba(255,255,255,0.08)",
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "10px",
              marginBottom: "20px",
              fontSize: "13px",
            }}
          >
            India's Most
          </div>

          <h2
            style={{
              fontSize: "58px",
              lineHeight: 1,
              marginBottom: "24px",
            }}
          >
            Advanced
            <br />
            <span style={{ color: "#facc15" }}>
              MCQ Platform
            </span>
          </h2>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "15px",
              color: "#dbeafe",
            }}
          >
            Prepare for UPPSC, UGC NET,
            HEO, AI, Data Science and all
            competitive exams with premium
            MCQs.
          </p>

          <button
            style={{
              marginTop: "30px",
              background: "#facc15",
              color: "black",
              border: "none",
              padding: "16px 24px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            🚀 Start Practicing
          </button>
        </div>

        <div
          style={{
            background: "white",
            padding: "18px",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              minWidth: "1250px",
            }}
          >
            {menuData.map((menu, i) => (
              <div
                key={i}
                style={{
                  width: "220px",
                  padding: "14px",
                  borderRight:
                    "1px solid #e5e7eb",
                }}
              >
                <h2
                  style={{
                    color: menu.color,
                    fontSize: "20px",
                    marginBottom: "18px",
                  }}
                >
                  {menu.title}
                </h2>

                {Object.entries(
                  menu.sections
                ).map(([section, items], j) => (
                  <div
                    key={j}
                    style={{
                      marginBottom: "22px",
                    }}
                  >
                    <div
                      style={{
                        background: "#eff6ff",
                        display: "inline-block",
                        padding: "6px 10px",
                        borderRadius: "8px",
                        fontSize: "11px",
                        fontWeight: "bold",
                        marginBottom: "12px",
                      }}
                    >
                      {section}
                    </div>

                    {items.map((item, k) => (
                      <div
                        key={k}
                        style={{
                          padding: "8px 0",
                          fontSize: "13px",
                          color: "#111827",
                          borderBottom:
                            "1px solid #f3f4f6",
                        }}
                      >
                        • {item}
                      </div>
                    ))}
                  </div>
                ))}

                <button
                  style={{
                    marginTop: "14px",
                    width: "100%",
                    background: menu.color,
                    color: "white",
                    border: "none",
                    padding: "12px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  Explore MCQs →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "white",
          margin: "20px",
          borderRadius: "20px",
          padding: "28px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {[
          "High Quality MCQs",
          "Smart Analytics",
          "Exam Simulation",
          "Bookmark & Review",
          "Detailed Reports",
        ].map((item, i) => (
          <div key={i}>
            <h3
              style={{
                color: "#111827",
              }}
            >
              {item}
            </h3>

            <p
              style={{
                color: "#6b7280",
                lineHeight: 1.7,
              }}
            >
              Premium learning experience
            </p>
          </div>
        ))}
      </section>

      <section
        style={{
          background:
            "linear-gradient(90deg,#020617,#001f5c)",
          margin: "20px",
          borderRadius: "20px",
          padding: "34px",
          color: "white",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        <div>
          <h2>10,000+</h2>
          <p>High Quality MCQs</p>
        </div>

        <div>
          <h2>25,000+</h2>
          <p>Happy Students</p>
        </div>

        <div>
          <h2>50+</h2>
          <p>Subjects Covered</p>
        </div>

        <div>
          <h2>99%</h2>
          <p>Success Rate</p>
        </div>
      </section>

      <footer
        style={{
          background: "#020617",
          color: "white",
          padding: "24px",
          textAlign: "center",
        }}
      >
        © 2026 Lakshya Academy
      </footer>
    </main>
  );
}
