export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8f5f2",
        color: "#222",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "10px",
        }}
      >
        Malásia Semijoias
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
        }}
      >
        Elegância, brilho e sofisticação para todos os momentos.
      </p>

      <button
        style={{
          marginTop: "25px",
          padding: "12px 24px",
          borderRadius: "10px",
          border: "none",
          background: "#d4af37",
          color: "white",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Ver Coleção
      </button>
    </main>
  );
}
