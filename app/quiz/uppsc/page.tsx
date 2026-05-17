const subjects = [
  "History",
  "Geography",
  "Indian Polity",
  "Economy",
  "Environment",
  "General Science",
  "Current Affairs",
  "UP Special",
];

export default function Page() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>UPPSC Subjects 🚀</h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {subjects.map((subject, index) => (
          <div
            key={index}
            style={{
              background: "#2563eb",
              color: "white",
              padding: "20px",
              borderRadius: "12px",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            {subject}
          </div>
        ))}
      </div>
    </main>
  );
}
