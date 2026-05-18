const uppscPre = [
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
  "HRM",
  "Environmental Sciences",
];

const heo = [
  "Health Education",
  "Public Health",
  "National Health Programmes",
  "Family Welfare",
  "Social Science",
];

const ai = [
  "AI Basics",
  "Machine Learning",
  "Deep Learning",
  "Prompt Engineering",
  "AI MCQs",
];

const ds = [
  "Python",
  "Statistics",
  "Pandas",
  "NumPy",
  "SQL",
  "Big Data",
];

const research = [
  "Research Basics",
  "Research Design",
  "Sampling",
  "Hypothesis",
  "SPSS",
  "Research Ethics",
];

const tricks = [
  "History Tricks",
  "Geography Tricks",
  "Polity Tricks",
  "Economy Tricks",
  "Science Tricks",
  "Current Affairs Tricks",
  "UP GK Tricks",
  "UPPSC Tricks",
  "Hindi Sahitya Tricks",
  "Environment Tricks",
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
    <details>
      <summary
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          fontSize: "15px",
          listStyle: "none",
        }}
      >
        {title}
      </summary>

      <div
        style={{
          position: "absolute",
          background: "white",
          color: "black",
          width: "240px",
          borderRadius: "14px",
          padding: "16px",
          marginTop: "10px",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.25)",
          zIndex: 999,
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding: "9px",
              borderBottom:
                "1px solid #e5e7eb",
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
            marginTop: "14px",
            background: color,
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Explore MCQs →
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
        background: "#eef2ff",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          background:
            "linear-gradient(90deg,#020617,#1d4ed8,#7c3aed)",
          color: "white",
          padding: "18px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "36px",
            }}
          >
            🚀 Lakshya Academy
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "13px",
            }}
          >
            India's Premium MCQ Platform
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
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
            title="UPPSC Interview"
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
            color="#16a34a"
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
          background:
            "linear-gradient(135deg,#1d4ed8,#4f46e5,#7c3aed)",
          color: "white",
          padding: "100px 40px",
        }}
      >
        <div
          style={{
            maxWidth: "700px",
          }}
        >
          <div
            style={{
              background: "#1d4ed8",
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: "12px",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            India's Most Advanced
          </div>

          <h2
            style={{
              fontSize: "76px",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            MCQ Platform
          </h2>

          <p
            style={{
              fontSize: "26px",
              lineHeight: 1.6,
            }}
          >
            Prepare for UPPSC, UGC NET,
            AI, Data Science and all
            competitive exams with premium
            MCQs and smart practice.
          </p>

          <button
            style={{
              marginTop: "30px",
              background: "#facc15",
              color: "black",
              border: "none",
              padding: "18px 35px",
              borderRadius: "14px",
              fontWeight: "bold",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            🚀 Start Practicing Now
          </button>
        </div>
      </section>

      <section
        style={{
          background: "white",
          margin: "30px",
          borderRadius: "22px",
          padding: "35px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(200px,1fr))",
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
          <div
            key={i}
            style={{
              textAlign: "center",
            }}
          >
            <h3>{item}</h3>

            <p>Updated premium practice</p>
          </div>
        ))}
      </section>

      <section
        style={{
          background:
            "linear-gradient(90deg,#020617,#0f172a)",
          color: "white",
          margin: "30px",
          borderRadius: "22px",
          padding: "45px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(200px,1fr))",
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
          padding: "25px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "15px",
            flexWrap: "wrap",
          }}
        >
          <span>YouTube</span>
          <span>WhatsApp</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>Amazon KDP</span>
          <span>Gumroad</span>
        </div>

        <p>
          © 2026 Lakshya Civil Services
          Academy
        </p>
      </footer>
    </main>
  );
}
