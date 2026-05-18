"use client";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#eaeded",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          background: "#131921",
          color: "white",
          padding: "18px",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        🚀 Lakshya Academy
      </header>

      <section
        style={{
          padding: "40px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(90deg,#2563eb,#7c3aed,#ec4899)",

            padding: "40px",

            borderRadius: "20px",

            color: "white",

            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              marginBottom: "10px",
            }}
          >
            Premium MCQ Platform
          </h1>

          <p
            style={{
              fontSize: "18px",
            }}
          >
            UPPSC • UGC NET • AI •
            Data Science • Research
            Methodology
          </p>
        </div>

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "20px",
          }}
        >
          <h2>Website Fixed Successfully ✅</h2>

          <p>
            Your Next.js app is now
            compiling correctly.
          </p>

          <p>
            Now you can gradually add:
          </p>

          <ul>
            <li>UPPSC PRE</li>
            <li>UPPSC MAINS</li>
            <li>UPPSC INTERVIEW</li>
            <li>UGC NET</li>
            <li>AI</li>
            <li>Data Science</li>
            <li>Current Affairs</li>
            <li>GK Tricks</li>
          </ul>
        </div>
      </section>

      <footer
        style={{
          background:
            "linear-gradient(90deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00ab)",

          color: "white",

          padding: "40px",

          marginTop: "40px",
        }}
      >
        <h2>Follow Us</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <a href="#">
            YouTube
          </a>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            Facebook
          </a>

          <a href="#">
            Blogger
          </a>

          <a href="#">
            Gumroad
          </a>

          <a href="#">
            Amazon KDP
          </a>
        </div>
      </footer>
    </main>
  );
}
