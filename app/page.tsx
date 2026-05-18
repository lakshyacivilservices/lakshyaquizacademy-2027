const uppscSubjects = [
  "History",
  "Geography",
  "Indian Polity",
  "Economy",
  "Environment",
  "General Science",
  "Current Affairs",
  "UP Special",
  "Hindi Sahitya",
];

const uppscMains = [
  "General Hindi",
  "Essay",
  "GS Paper 1",
  "GS Paper 2",
  "GS Paper 3",
  "GS Paper 4",
];

const uppscInterview = [
  "Personality Test",
  "Current Affairs",
  "UP Awareness",
  "Communication Skills",
];

const ugcNetSubjects = [
  "General Paper on Teaching & Research Aptitude",
  "Economics",
  "Philosophy",
  "Psychology",
  "Sociology",
  "History",
  "Anthropology",
  "Commerce",
  "Education",
  "Management",
  "Human Resource Management",
  "Environmental Sciences",
];

const aiSubjects = [
  "AI Basics",
  "Machine Learning",
  "Deep Learning",
  "Prompt Engineering",
];

const dataScienceSubjects = [
  "Python",
  "Statistics",
  "Pandas",
  "Data Analytics",
  "SQL",
];

const gkTricks = [
  "History Tricks",
  "Polity Tricks",
  "Geography Tricks",
  "Science Tricks",
  "Current Affairs Tricks",
  "UP GK Tricks",
  "UPPSC Tricks",
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
          background:
            "linear-gradient(90deg,#020617,#1d4ed8,#7c3aed)",
          color: "white",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          flexWrap: "wrap",
        }}
      >
        <h1>🚀 Lakshya Academy</h1>

        <div
          style={{
            display: "flex",
            gap: "25px",
            flexWrap: "wrap",
          }}
        >
          <details>
            <summary>UPPSC Pre</summary>

            <div
              style={{
                position: "absolute",
                background: "white",
                color: "black",
                padding: "20px",
                width: "300px",
                borderRadius: "14px",
              }}
            >
              {uppscSubjects.map((item, i) => (
                <p key={i}>{item} MCQs</p>
              ))}
            </div>
          </details>

          <details>
            <summary>UPPSC Mains</summary>

            <div
              style={{
                position: "absolute",
                background: "white",
                color: "black",
                padding: "20px",
                width: "300px",
                borderRadius: "14px",
              }}
            >
              {uppscMains.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </details>

          <details>
            <summary>UPPSC Interview</summary>

            <div
              style={{
                position: "absolute",
                background: "white",
                color: "black",
                padding: "20px",
                width: "300px",
                borderRadius: "14px",
              }}
            >
              {uppscInterview.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </details>

          <details>
            <summary>UGC NET</summary>

            <div
              style={{
                position: "absolute",
                background: "white",
                color: "black",
                padding: "20px",
                width: "350px",
                borderRadius: "14px",
              }}
            >
              {ugcNetSubjects.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </details>

          <details>
            <summary>Artificial Intelligence</summary>

            <div
              style={{
                position: "absolute",
                background: "white",
                color: "black",
                padding: "20px",
                width: "300px",
                borderRadius: "14px",
              }}
            >
              {aiSubjects.map((item, i) => (
                <p key={i}>{item} MCQs</p>
              ))}
            </div>
          </details>

          <details>
            <summary>Data Science</summary>

            <div
              style={{
                position: "absolute",
                background: "white",
                color: "black",
                padding: "20px",
                width: "300px",
                borderRadius: "14px",
              }}
            >
              {dataScienceSubjects.map((item, i) => (
                <p key={i}>{item} MCQs</p>
              ))}
            </div>
          </details>

          <details>
            <summary>GK Tricks</summary>

            <div
              style={{
                position: "absolute",
                background: "white",
                color: "black",
                padding: "20px",
                width: "300px",
                borderRadius: "14px",
              }}
            >
              {gkTricks.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </details>

          <details>
            <summary>Current Affairs</summary>

            <div
              style={{
                position: "absolute",
                background: "white",
                color: "black",
                padding: "20px",
                width: "300px",
                borderRadius: "14px",
              }}
            >
              <p>Daily Current Affairs</p>
              <p>Weekly Current Affairs</p>
              <p>Monthly PDFs</p>
              <p>UP Current Affairs</p>
            </div>
          </details>
        </div>
      </header>

      <section
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed,#06b6d4)",
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
          India's Advanced MCQ Platform 🎯
        </h2>

        <p
          style={{
            fontSize: "28px",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          UPPSC • UGC NET • AI • Data Science
          • Psychology • Hindi Sahitya •
          Current Affairs
        </p>

        <button
          style={{
            marginTop: "40px",
            background: "#f97316",
            color: "white",
            border: "none",
            padding: "20px 40px",
            borderRadius: "16px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Start Practicing →
        </button>
      </section>

      <section
        style={{
          padding: "60px 40px",
          background: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Follow Lakshya Academy 🚀
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="#">YouTube</a>
          <a href="#">WhatsApp</a>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Amazon KDP</a>
          <a href="#">Gumroad</a>
          <a href="#">eBooks</a>
        </div>
      </section>

      <footer
        style={{
          background: "#020617",
          color: "white",
          textAlign: "center",
          padding: "30px",
        }}
      >
        © 2026 Lakshya Civil Services Academy
      </footer>
    </main>
  );
}
