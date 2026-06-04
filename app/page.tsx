export default function Home() {
  const produtos = [
    {
      nome: "Colar Luxo Dourado",
      preco: "R$ 89,90",
      imagem:
        "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800",
    },
    {
      nome: "Brinco Elegance",
      preco: "R$ 59,90",
      imagem:
        "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=800",
    },
    {
      nome: "Pulseira Premium",
      preco: "R$ 69,90",
      imagem:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800",
    },
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#faf8f5",
        color: "#222",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px 20px",
          background:
            "linear-gradient(to bottom, #fff7e6, #faf8f5)",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "10px",
            color: "#b8860b",
          }}
        >
          Malásia Semijoias
        </h1>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "1.3rem",
            lineHeight: "1.8",
          }}
        >
          Elegância, brilho e sofisticação para transformar cada momento em
          algo especial.
        </p>

        <a
          href="#colecao"
          style={{
            marginTop: "30px",
            padding: "15px 35px",
            background: "#d4af37",
            color: "fff",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Ver Coleção
        </a>
      </section>

      {/* SOBRE */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            color: "b8860b",
          }}
        >
          Nossa Essência
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          Na Malásia Semijoias você encontra peças selecionadas para mulheres
          que valorizam beleza, qualidade e exclusividade. Cada detalhe é
          pensado para destacar sua elegância.
        </p>
      </section>

      {/* PRODUTOS */}
      <section
        id="colecao"
        style={{
          padding: "80px 20px",
          background: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "50px",
            color: "#b8860b",
          }}
        >
          Coleção Destaque
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {produtos.map((produto, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "20px" }}>
                <h3>{produto.nome}</h3>

                <p
                  style={{
                    color: "#b8860b",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                  }}
                >
                  {produto.preco}
                </p>

                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#d4af37",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Tenho Interesse
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#b8860b",
            marginBottom: "40px",
            fontSize: "2.5rem",
          }}
        >
          Por que escolher a Malásia?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div>
            <h3>✨ Qualidade Premium</h3>
            <p>Peças selecionadas com acabamento impecável.</p>
          </div>

          <div>
            <h3>💎 Elegância</h3>
            <p>Modelos modernos e sofisticados.</p>
          </div>

          <div>
            <h3>🚚 Entrega Segura</h3>
            <p>Receba suas peças com praticidade e confiança.</p>
          </div>
        </div>
      </section>

      {/* WHATSAPP */}
      <section
        style={{
          padding: "80px 20px",
          background: "#d4af37",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
          }}
        >
          Fale Conosco
        </h2>

        <p
          style={{
            marginBottom: "30px",
            fontSize: "1.1rem",
          }}
        >
          Tire dúvidas e faça seu pedido pelo WhatsApp.
        </p>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "15px 35px",
            background: "#25D366",
            color: "#fff",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          Chamar no WhatsApp
        </a>
      </section>

      {/* RODAPÉ */}
      <footer
        style={{
          textAlign: "center",
          padding: "25px",
          background: "#111",
          color: "#fff",
        }}
      >
        © {new Date().getFullYear()} Malásia Semijoias • Todos os direitos
        reservados.
      </footer>
    </main>
  );
}