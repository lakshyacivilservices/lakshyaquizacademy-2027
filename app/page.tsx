const uppscPre = [
  "Ancient History",
  "Medieval History",
  "Modern History",
  "Indian National Movement",
  "Indian Geography",
  "World Geography",
  "Indian Polity",
  "Governance",
  "Economy",
  "Environment & Ecology",
  "General Science",
  "Current Affairs",
  "UP Special",
  "Hindi Sahitya",
  "English",
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

const ugcNet = [
  "Teaching & Research Aptitude",
  "Economics",
  "Psychology",
  "Sociology",
  "Anthropology",
  "History",
  "Commerce",
  "Education",
  "Management",
  "Human Resource Management",
  "Environmental Sciences",
];

const heo = [
  "Health Education",
  "Public Health",
  "Community Health",
  "Family Welfare",
  "Nutrition",
  "Mental Health",
  "National Health Programmes",
  "Sociology",
  "Social Science",
  "Health Communication",
];

const ai = [
  "AI Basics",
  "Machine Learning",
  "Deep Learning",
  "Prompt Engineering",
  "ChatGPT",
  "Generative AI",
];

const ds = [
  "Python",
  "Statistics",
  "Pandas",
  "NumPy",
  "SQL",
  "Big Data",
  "Data Visualization",
];

const research = [
  "Research Basics",
  "Research Design",
  "Sampling",
  "Hypothesis",
  "SPSS",
  "Research Ethics",
  "Quantitative Research",
  "Qualitative Research",
];

const tricks = [
  "Ancient History Tricks",
  "Medieval History Tricks",
  "Modern History Tricks",
  "Geography Tricks",
  "Polity Tricks",
  "Economy Tricks",
  "Environment Tricks",
  "Science Tricks",
  "Current Affairs Tricks",
  "UP GK Tricks",
  "Hindi Sahitya Tricks",
  "English",
];

const currentAffairs = [
  "Daily Current Affairs",
  "Weekly Current Affairs",
  "Monthly PDFs",
  "UP Current Affairs",
];

const ncert = [
  "NCERT History",
  "NCERT Geography",
  "NCERT Polity",
  "NCERT Economy",
  "NCERT Science",
  "NCERT Environment",
  "English",
];

function Menu({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <details style={{ position: "relative" }}>
      <summary
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "15px",
          listStyle: "none",
          padding: "10px 14px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.08)",
        }}
      >
        {title}
      </summary>

      <div
        style={{
          position: "absolute",
          background: "#111827",
          color: "white",
          width: "280px",
          borderRadius: "18px",
          padding: "18px",
          marginTop: "12px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,0.45)",
          zIndex: 999,
          backdropFilter: "blur(10px)",
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "10px",
              borderBottom:
                "1px solid rgba(255,255,255,0.08)",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            {item}
          </div>
        ))}

        <button
          style={{
            width: "100%",
            marginTop: "16px",
            background: color,
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "12px",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Start MCQs →
        </button>
      </div>
    </details>
  );
}

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial",
        background: "#020617",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <header
        style={{
          background:
            "linear-gradient(90deg,#020617,#172554,#312e81)",
          padding: "18px 28px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          borderBottom:
            "1px solid rgba(255,255,255,0.08)",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "38px",
            }}
          >
            🚀 Lakshya Academy
          </h1>

          <p
            style={{
              margin: 0,
              color: "#cbd5e1",
            }}
          >
            Premium MCQ Learning Platform
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginTop: "12px",
          }}
        >
          <Menu
            title="UPPSC"
            items={uppscPre}
            color="#2563eb"
          />

          <Menu
            title="UPPSC Mains"
            items={uppscMains}
            color="#7c3aed"
          />

          <Menu
            title="Interview"
            items={uppscInterview}
            color="#16a34a"
          />

          <Menu
            title="UGC NET"
            items={ugcNet}
            color="#9333ea"
          />

          <Menu
            title="Health Education Officer"
            items={heo}
            color="#0ea5e9"
          />

          <Menu
            title="Artificial Intelligence"
            items={ai}
            color="#2563eb"
          />

          <Menu
            title="Data Science"
            items={ds}
            color="#ea580c"
          />

          <Menu
            title="Research Methodology"
            items={research}
            color="#ec4899"
          />

          <Menu
            title="GK Tricks"
            items={tricks}
            color="#db2777"
          />

          <Menu
            title="Current Affairs"
            items={currentAffairs}
            color="#0891b2"
          />

          <Menu
            title="NCERT MCQs"
            items={ncert}
            color="#2563eb"
          />
        </div>
      </header>

      <section
        style={{
          padding: "110px 40px",
          background:
            "radial-gradient(circle at top,#312e81,#020617)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            zIndex: 2,
            position: "relative",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(90deg,#2563eb,#7c3aed)",
              display: "inline-block",
              padding: "10px 20px",
              borderRadius: "30px",
              marginBottom: "25px",
              fontWeight: "bold",
            }}
          >
            INDIA'S #1 EXAM PLATFORM
          </div>

          <h2
            style={{
              fontSize: "82px",
              lineHeight: 1,
              marginBottom: "25px",
            }}
          >
            Practice Smart.
            <br />
            Crack Exams.
          </h2>

          <p
            style={{
              fontSize: "24px",
              lineHeight: 1.8,
              color: "#cbd5e1",
            }}
          >
            UPPSC • UGC NET • AI • Data Science
            • Current Affairs • NCERT •
            Research Methodology
          </p>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "40px",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                background:
                  "linear-gradient(90deg,#2563eb,#7c3aed)",
                color: "white",
                border: "none",
                padding: "18px 34px",
                borderRadius: "16px",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              🚀 Start Practicing
            </button>

            <button
              style={{
                background: "transparent",
                color: "white",
                border:
                  "1px solid rgba(255,255,255,0.2)",
                padding: "18px 34px",
                borderRadius: "16px",
                fontWeight: "bold",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              View Courses
            </button>
          </div>
        </div>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(240px,1fr))",
          gap: "24px",
          padding: "40px",
        }}
      >
        {[
          "10,000+ MCQs",
          "50+ Subjects",
          "AI Analytics",
          "Mock Tests",
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background:
                "linear-gradient(135deg,#111827,#1e293b)",
              padding: "35px",
              borderRadius: "24px",
              textAlign: "center",
              border:
                "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2>{item}</h2>

            <p style={{ color: "#cbd5e1" }}>
              Premium learning experience
            </p>
          </div>
        ))}
      </section>

      <footer
        style={{
          marginTop: "50px",
          background: "#020617",
          padding: "40px",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <span>YouTube</span>
          <span>WhatsApp</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Amazon KDP</span>
          <span>Gumroad</span>
        </div>

        <p style={{ color: "#94a3b8" }}>
          © 2026 Lakshya Civil Services
          Academy
        </p>
      </footer>
    </main>
  );
}
