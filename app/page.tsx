const exams = [
  {
    name: "UPPSC",
    subjects: [
      "History",
      "Geography",
      "Indian Polity",
      "Economy",
      "Environment",
      "Science",
      "Current Affairs",
      "UP Special",
    ],
  },
  {
    name: "UGC NET Psychology",
    subjects: [
      "Research Methods",
      "Biopsychology",
      "Learning",
      "Memory",
      "Social Psychology",
    ],
  },
  {
    name: "SSC GK",
    subjects: [
      "History",
      "Polity",
      "Geography",
      "Economics",
      "Science",
    ],
  },
];

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial",
        background: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background: "#0f172a",
          color: "white",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h1>🚀 Lakshya Academy</h1>

        <nav
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          {exams.map((exam, index) => (
            <div
              key={index}
              style={{
                position: "relative",
              }}
            >
              <details>
                <summary
                  style={{
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {exam.name}
                </summary>

                <div
                  style={{
                    position: "absolute",
                    background: "white",
                    color: "black",
                    padding: "15px",
                    borderRadius: "12px",
                    marginTop: "10px",
                    width: "250px",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.2)",
                  }}
                >
                  {exam.subjects.map(
                    (subject, i) => (
                      <a
                        key={i}
                        href="#"
                        style={{
                          display: "block",
                          padding: "10px",
                          textDecoration: "none",
                          color: "#111827",
                          borderBottom:
                            "1px solid #e5e7eb",
                        }}
                      >
                        {subject} MCQs
                      </a>
                    )
                  )}
                </div>
              </details>
            </div>
          ))}
        </nav>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#06b6d4,#7c3aed)",
          color: "white",
          padding: "120px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "70px",
            marginBottom: "20px",
          }}
        >
          India's Premium Exam MCQ Platform 🎯
        </h2>

        <p
          style={{
            fontSize: "28px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          Practice MCQs for UPPSC, UGC NET,
          SSC, Psychology and all major
          competitive exams.
        </p>

        <button
          style={{
            marginTop: "40px",
            background: "#f97316",
            color: "white",
            border: "none",
            padding: "20px 40px",
            borderRadius: "14px",
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Start Practicing →
        </button>
      </section>

      <section
        style={{
          padding: "60px 40px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "30px",
          }}
        >
          Popular Exams
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {exams.map((exam, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "20px",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                {exam.name}
              </h3>

              {exam.subjects.map(
                (subject, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "12px",
                      background: "#eff6ff",
                      marginBottom: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    {subject} MCQs
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          background: "#0f172a",
          color: "white",
          padding: "50px 40px",
          marginTop: "50px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(200px,1fr))",
            gap: "30px",
          }}
        >
          <div>
            <h3>Exams</h3>
            <p>UPPSC</p>
            <p>UGC NET</p>
            <p>SSC</p>
          </div>

          <div>
            <h3>Subjects</h3>
            <p>History</p>
            <p>Polity</p>
            <p>Psychology</p>
          </div>

          <div>
            <h3>Resources</h3>
            <p>MCQs</p>
            <p>Notes</p>
            <p>Current Affairs</p>
          </div>

          <div>
            <h3>About</h3>
            <p>Lakshya Academy</p>
            <p>India's Exam Platform</p>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          © 2026 Lakshya Civil Services Academy
        </p>
      </footer>
    </main>
  );
}
