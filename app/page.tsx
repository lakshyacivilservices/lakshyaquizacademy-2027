const [timeLeft, setTimeLeft] =
  useState(300);

useEffect(() => {
  const timer = setInterval(() => {
    setTimeLeft((prev) =>
      prev > 0 ? prev - 1 : 0
    );
  }, 1000);

  return () => clearInterval(timer);
}, []);

<div
  style={{
    background:
      "linear-gradient(90deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00ab)",

    color: "white",

    padding: "20px",

    borderRadius: "18px",

    marginBottom: "20px",

    display: "flex",

    justifyContent:
      "space-between",

    alignItems: "center",

    boxShadow:
      "0 0 20px rgba(0,0,0,0.15)",
  }}
>
  <div>
    <h1
      style={{
        margin: 0,
        fontSize: "34px",
      }}
    >
      {selectedSubject}
    </h1>

    <p
      style={{
        marginTop: "8px",
        fontSize: "14px",
      }}
    >
      Score: {score}/
      {currentMcqs.length}
    </p>
  </div>

  <div
    style={{
      background:
        "rgba(255,255,255,0.15)",

      padding: "14px 18px",

      borderRadius: "14px",

      fontSize: "20px",

      fontWeight: "bold",
    }}
  >
    ⏳ {Math.floor(timeLeft / 60)}:
    {(timeLeft % 60)
      .toString()
      .padStart(2, "0")}
  </div>
</div>

{
  currentMcqs.map(
    (mcq: any, qIndex: number) => (
      <div
        key={qIndex}
        style={{
          background: "white",

          borderRadius: "20px",

          padding: "26px",

          marginBottom: "22px",

          boxShadow:
            "0 4px 20px rgba(0,0,0,0.08)",

          border:
            "2px solid #f3f4f6",
        }}
      >
        <h2
          style={{
            fontSize: "18px",

            color: "#111827",

            lineHeight: 1.6,
          }}
        >
          Q{qIndex + 1}. {mcq.q}
        </h2>

        <div
          style={{
            display: "grid",

            gap: "12px",

            marginTop: "22px",
          }}
        >
          {mcq.options.map(
            (
              option: string,
              i: number
            ) => {
              const selected =
                answers[qIndex]
                  ?.selected;

              const answer =
                answers[qIndex]
                  ?.answer;

              let bg = "white";

              let color =
                "#111827";

              let border =
                "2px solid #e5e7eb";

              if (
                selected ===
                  option &&
                option === answer
              ) {
                bg =
                  "linear-gradient(90deg,#22c55e,#16a34a)";

                color =
                  "white";

                border =
                  "2px solid #16a34a";
              }

              else if (
                selected ===
                  option &&
                option !== answer
              ) {
                bg =
                  "linear-gradient(90deg,#ef4444,#dc2626)";

                color =
                  "white";

                border =
                  "2px solid #dc2626";
              }

              else if (
                option ===
                  answer &&
                selected
              ) {
                bg =
                  "linear-gradient(90deg,#22c55e,#16a34a)";

                color =
                  "white";

                border =
                  "2px solid #16a34a";
              }

              return (
                <button
                  key={i}
                  onClick={() =>
                    checkAnswer(
                      qIndex,
                      option,
                      mcq.answer
                    )
                  }
                  style={{
                    background:
                      bg,

                    color:
                      color,

                    border:
                      border,

                    padding:
                      "16px",

                    borderRadius:
                      "14px",

                    textAlign:
                      "left",

                    fontSize:
                      "13px",

                    fontWeight:
                      "bold",

                    cursor:
                      "pointer",

                    transition:
                      "0.3s",

                    transform:
                      "scale(1)",

                    boxShadow:
                      "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  {option}
                </button>
              );
            }
          )}
        </div>
      </div>
    )
  );
}

<footer
  style={{
    background:
      "linear-gradient(90deg,#ff0000,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00ab)",

    color: "white",

    padding: "50px",

    marginTop: "40px",

    borderTopLeftRadius:
      "24px",

    borderTopRightRadius:
      "24px",
  }}
>
  <div
    style={{
      display: "flex",

      justifyContent:
        "space-between",

      flexWrap: "wrap",

      gap: "30px",
    }}
  >
    <div>
      <h2>
        🚀 Lakshya Academy
      </h2>

      <p>
        India's Premium MCQ
        Platform
      </p>
    </div>

    <div>
      <h3>Social Media</h3>

      <div
        style={{
          display: "grid",

          gap: "10px",

          marginTop: "10px",
        }}
      >
        <a href="#">
          📺 YouTube
        </a>

        <a href="#">
          📸 Instagram
        </a>

        <a href="#">
          📘 Facebook
        </a>

        <a href="#">
          ✍️ Blogger
        </a>

        <a href="#">
          💰 Gumroad
        </a>

        <a href="#">
          📚 Amazon KDP
        </a>
      </div>
    </div>

    <div>
      <h3>Features</h3>

      <p>✔ AI MCQs</p>

      <p>✔ Live Timer</p>

      <p>✔ Score System</p>

      <p>✔ Interactive Tests</p>

      <p>✔ Daily Current Affairs</p>
    </div>
  </div>

  <hr
    style={{
      margin: "28px 0",

      borderColor:
        "rgba(255,255,255,0.3)",
    }}
  />

  <p
    style={{
      textAlign: "center",

      fontSize: "12px",
    }}
  >
    © 2026 Lakshya Academy
  </p>
</footer>
