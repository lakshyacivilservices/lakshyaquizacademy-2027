export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial",
        background: "#071028",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}

      <header
        style={{
          background: "#0b1220",
          padding: "18px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.3)",
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

        <nav
          style={{
            display: "flex",
            gap: "25px",
            fontWeight: "bold",
          }}
        >
          <span>UPPSC</span>
          <span>UGC NET</span>
          <span>AI</span>
          <span>Data Science</span>
          <span>GK Tricks</span>
          <span>Current Affairs</span>
          <span>eBooks</span>
        </nav>
      </header>

      {/* HERO SECTION */}

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
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "1.6",
          }}
        >
          Prepare for UPPSC, UGC NET,
          Psychology, Sociology, AI,
          Data Science and Competitive Exams
          with highly professional MCQs,
          notes and eBooks.
        </p>

        <div
          style={{
            marginTop: "50px",
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
              borderRadius: "14px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Start MCQs →
          </button>

          <button
            style={{
              background: "white",
              color: "#111827",
              border: "none",
              padding: "18px 35px",
              borderRadius: "14px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Buy Premium eBooks
          </button>
        </div>
      </section>

      {/* EXAM CARDS */}

      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Popular Exams
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
            "Health Education Officer",
            "Artificial Intelligence",
            "Data Science",
            "GK Tricks",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#111827",
                padding: "35px",
                borderRadius: "24px",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.3)",
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
                Premium MCQs, Notes,
                PYQs, Mock Tests,
                Current Affairs and
                Smart Learning System.
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
                Explore →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section
        style={{
          background: "#0b1220",
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Platform Features ⚡
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {[
            "MCQ Practice",
            "Jump Questions",
            "Previous Question",
            "Score System",
            "Timer",
            "Bookmark Questions",
            "Leaderboard",
            "Daily Current Affairs",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#111827",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* EBOOK STORE */}

      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            textAlign: "center",
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
                  fontSize: "30px",
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
                High quality premium study
                materials for competitive exams.
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

      {/* FOOTER */}

      <footer
        style={{
          background: "#0b1220",
          padding: "60px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
          }}
        >
          Lakshya Civil Services Academy
        </h2>

        <p
          style={{
            color: "#d1d5db",
            marginTop: "20px",
            lineHeight: "1.8",
          }}
        >
          India's Modern Learning Platform
          for Competitive Exams & Smart MCQ
          Preparation.
        </p>

        <p
          style={{
            marginTop: "30px",
            color: "#9ca3af",
          }}
        >
          © 2026 Lakshya Academy
        </p>
      </footer>
    </main>
  );
}
