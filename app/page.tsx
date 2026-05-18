export default function Home() {
  return (
    <main
      style={{
        background: "#071028",
        color: "white",
        minHeight: "100vh",
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
          <span>Health Education</span>
          <span>Current Affairs</span>
          <span>AI</span>
          <span>Data Science</span>
        </nav>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed,#06b6d4)",
          padding: "120px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "72px",
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
          }}
        >
          UPPSC • UGC NET • Psychology •
          Sociology • AI • Data Science
        </p>

        <div
          style={{
            marginTop: "40px",
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
            Start MCQs
          </button>
        </div>
      </section>

      <section
        style={{
          padding: "70px 40px",
        }}
      >
        <h2
          style={{
            fontSize: "46px",
            textAlign: "center",
            marginBottom: "40px",
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
          {[
            "UPPSC",
            "UGC NET",
            "Health Education Officer",
            "Artificial Intelligence",
            "Data Science",
            "Current Affairs",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#111827",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "30px",
                  marginBottom: "15px",
                }}
              >
                {item}
              </h3>

              <p
                style={{
                  color: "#d1d5db",
                }}
              >
                Premium MCQs, PYQs,
                Mock Tests and Notes.
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          background: "#0b1220",
          textAlign: "center",
          padding: "40px",
        }}
      >
        © 2026 Lakshya Academy
      </footer>
    </main>
  );
}
