# Premium Lakshya Academy Homepage System

Paste this FULL code into:

```txt
app/page.tsx
```

```tsx
const exams = [
  {
    title: "UPPSC",
    subjects: [
      "Prelims",
      "Mains",
      "Interview",
      "UP Special",
      "Hindi Sahitya",
    ],
  },
  {
    title: "UGC NET",
    subjects: [
      "Psychology",
      "Sociology",
      "History",
      "Anthropology",
      "Commerce",
      "Education",
      "Management",
      "HRM",
      "Environmental Sciences",
    ],
  },
  {
    title: "Artificial Intelligence",
    subjects: [
      "AI Basics",
      "Machine Learning",
      "Deep Learning",
      "Prompt Engineering",
    ],
  },
  {
    title: "Data Science",
    subjects: [
      "Python",
      "Statistics",
      "Pandas",
      "Data Analytics",
    ],
  },
  {
    title: "GK Tricks",
    subjects: [
      "History Tricks",
      "Geography Tricks",
      "Polity Tricks",
      "Science Tricks",
    ],
  },
];

const mcqs = [
  {
    question:
      "Who is known as the Father of Indian Constitution?",
    options: [
      "Mahatma Gandhi",
      "Dr. B.R. Ambedkar",
      "Jawaharlal Nehru",
      "Sardar Patel",
    ],
    answer: 1,
  },
  {
    question:
      "Which river is known as the Ganga of South India?",
    options: [
      "Krishna",
      "Godavari",
      "Kaveri",
      "Narmada",
    ],
    answer: 1,
  },
  {
    question:
      "Which Article deals with Fundamental Rights?",
    options: [
      "Article 12-35",
      "Article 40",
      "Article 370",
      "Article 360",
    ],
    answer: 0,
  },
];

export default function Home() {
  return (
    <main
      style={{
        background: "#071028",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          background:
            "linear-gradient(90deg,#0f172a,#1d4ed8,#7c3aed)",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <h1
          style={{
            fontSize: "34px",
            fontWeight: "bold",
          }}
        >
          🚀 Lakshya Academy
        </h1>

        <div
          style={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {exams.map((exam, index) => (
            <details
              key={index}
              style={{
                position: "relative",
              }}
            >
              <summary
                style={{
                  listStyle: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                {exam.title}
              </summary>

              <div
                style={{
                  position: "absolute",
                  background: "white",
                  color: "black",
                  width: "300px",
                  borderRadius: "18px",
                  padding: "15px",
                  marginTop: "15px",
                  boxShadow:
                    "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                {exam.subjects.map((subject, i) => (
                  <a
                    key={i}
                    href="#"
                    style={{
                      display: "block",
                      padding: "14px",
                      textDecoration: "none",
                      color: "#111827",
                      borderBottom:
                        "1px solid #e5e7eb",
                      fontWeight: "bold",
                    }}
                  >
                    {subject} MCQs
                  </a>
                ))}
              </div>
            </details>
          ))}
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed,#06b6d4)",
          padding: "130px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "78px",
            marginBottom: "20px",
          }}
        >
          India's Premium MCQ Platform 🎯
        </h2>

        <p
          style={{
            fontSize: "28px",
            maxWidth: "1000px",
            margin: "auto",
            lineHeight: "1.7",
          }}
        >
          Practice MCQs for UPPSC,
          UGC NET, Psychology,
          Sociology, AI, Data Science,
          Current Affairs and Competitive Exams.
        </p>

        <div
          style={{
            marginTop: "45px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "#f97316",
              color: "white",
              border: "none",
              padding: "18px 35px",
              borderRadius: "16px",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Start MCQs
          </button>

          <button
            style={{
              background: "white",
              color: "#111827",
              border: "none",
              padding: "18px 35px",
              borderRadius: "16px",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            Buy Premium eBooks
          </button>
        </div>
      </section>

      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "50px",
          }}
        >
          Popular Categories
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "35px",
          }}
        >
          {[
            "UPPSC",
            "UGC NET",
            "Artificial Intelligence",
            "Data Science",
            "Current Affairs",
            "GK Tricks",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#111827",
                borderRadius: "24px",
                padding: "35px",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.3)",
              }}
            >
              <h3
                style={{
                  fontSize: "34px",
                  marginBottom: "20px",
                }}
              >
                {item}
              </h3>

              <p
                style={{
                  color: "#d1d5db",
                  lineHeight: "1.8",
                }}
              >
                Premium MCQs,
                Mock Tests,
                Notes,
                PYQs,
                Smart Learning
                and eBooks.
              </p>

              <button
                style={{
                  marginTop: "25px",
                  background: "#2563eb",
                  color: "white",
                  border: "none",
                  padding: "14px 25px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                }}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#0b1220",
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "50px",
          }}
        >
          Interactive MCQ System ⚡
        </h2>

        <div
          style={{
            background: "#111827",
            borderRadius: "24px",
            padding: "40px",
            maxWidth: "1000px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
              flexWrap: "wrap",
            }}
          >
            <h3>Question 1 of 3</h3>
            <h3>Score: 10</h3>
          </div>

          <h2
            style={{
              fontSize: "34px",
              marginBottom: "35px",
            }}
          >
            {mcqs[0].question}
          </h2>

          <div
            style={{
              display: "grid",
              gap: "18px",
            }}
          >
            {mcqs[0].options.map((option, i) => (
              <button
                key={i}
                style={{
                  background: "#1e293b",
                  color: "white",
                  border: "1px solid #334155",
                  padding: "18px",
                  borderRadius: "14px",
                  fontSize: "18px",
                  textAlign: "left",
                }}
              >
                {option}
              </button>
            ))}
          </div>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "14px 25px",
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              Previous
            </button>

            <button
              style={{
                background: "#22c55e",
                color: "white",
                border: "none",
                padding: "14px 25px",
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              Next
            </button>

            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "14px 25px",
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              Jump Question
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "50px",
          }}
        >
          📚 Premium eBooks Store
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "35px",
          }}
        >
          {[
            "UPPSC Complete Notes",
            "UGC NET Psychology",
            "AI & Data Science",
            "Current Affairs Yearbook",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#111827",
                padding: "35px",
                borderRadius: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  marginBottom: "20px",
                }}
              >
                {item}
              </h3>

              <p
                style={{
                  color: "#d1d5db",
                  lineHeight: "1.8",
                }}
              >
                Highly professional premium notes,
                MCQs and smart learning resources.
              </p>

              <button
                style={{
                  marginTop: "25px",
                  background: "#f97316",
                  color: "white",
                  border: "none",
                  padding: "14px 25px",
                  borderRadius: "12px",
                  fontWeight: "bold",
                }}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          background: "#0b1220",
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
          }}
        >
          Lakshya Civil Services Academy
        </h2>

        <p
          style={{
            marginTop: "25px",
            color: "#d1d5db",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          India's Premium Learning Platform
          for Competitive Exams,
          MCQs, Mock Tests,
          AI Learning and Smart Preparation.
        </p>

        <p
          style={{
            marginTop: "35px",
            color: "#9ca3af",
          }}
        >
          © 2026 Lakshya Academy
        </p>
      </footer>
    </main>
  );
}
```

Then:

1. Save file
2. Commit changes
3. Wait 1 minute
4. Refresh website
