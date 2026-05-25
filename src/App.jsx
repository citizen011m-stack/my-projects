import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Portfolio", "Contact"];

const TECH_STACK = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "ReactJS", icon: "⚛️" },
  { name: "Vite", icon: "🔥" },
  { name: "NodeJS", icon: "🟢" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "Firebase", icon: "🔥" },
  { name: "Vercel", icon: "▲" },
  { name: "Netlify", icon: "🌿" },
  { name: "Git", icon: "🐙" },
];

const PROJECTS = [
  {
    id: 1,
    title: "مطعم شجرة الدر",
    description: "موقع احترافي لمطعم شجرة الدر يعرض القائمة والخدمات بتصميم أنيق وجذاب.",
    demo: "    demo: "https://resturant-lz6b.vercel.app/",
",
    github: "#",
    tags: ["HTML", "CSS", "JavaScript"],
    features: ["عرض القائمة", "واجهة مستخدم أنيقة", "تصميم متجاوب", "تجربة مستخدم سلسة"],
  },
  {
    id: 2,
    title: "متجر ONO",
    description: "متجر إلكتروني متكامل لـ ONO يوفر تجربة تسوق سلسة وعصرية.",
    demo: "https://extraordinary-onostorea05e34.netlify.app/",
    github: "#",
    tags: ["React", "Tailwind", "JavaScript"],
    features: ["عرض المنتجات", "سلة التسوق", "تصميم عصري", "تجربة شراء سلسة"],
  },
  {
    id: 3,
    title: "Ewan Developments",
    description: "موقع شركة Ewan للتطوير العقاري يعرض المشاريع والخدمات بأسلوب راقٍ.",
    demo: "https://ewandevlopment.netlify.app/",
    github: "#",
    tags: ["React", "CSS", "Node.js"],
    features: ["عرض المشاريع", "صفحات تفصيلية", "تصميم فاخر", "نموذج تواصل"],
  },
  {
    id: 4,
    title: "Arkan",
    description: "موقع Arkan الاحترافي المصمم بعناية لعرض الخدمات والمشاريع المتميزة.",
    demo: "https://friendly-paprenjak-4599db.netlify.app/",
    github: "#",
    tags: ["HTML", "Tailwind", "JavaScript"],
    features: ["تصميم إبداعي", "صفحات متعددة", "أداء عالي", "واجهة احترافية"],
  },
  {
    id: 5,
    title: "Chronos Maison",
    description: "موقع Chronos Maison الأنيق المصمم بأسلوب فاخر لعرض ساعات ومنتجات راقية.",
    demo: "https://chronos-maison.netlify.app/",
    github: "#",
    tags: ["HTML", "CSS", "JavaScript"],
    features: ["تصميم فاخر", "عرض المنتجات", "واجهة أنيقة", "تجربة مستخدم متميزة"],
  },
];

const CERTIFICATES = [
  { title: "React Developer Certificate", issuer: "Meta", year: "2024" },
  { title: "Frontend Web Development", issuer: "Coursera", year: "2023" },
  { title: "JavaScript Algorithms", issuer: "freeCodeCamp", year: "2023" },
  { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2022" },
  { title: "UI/UX Design Fundamentals", issuer: "Google", year: "2023" },
  { title: "Tailwind CSS Mastery", issuer: "Udemy", year: "2024" },
  { title: "Node.js Backend", issuer: "Udemy", year: "2024" },
];

const INITIAL_COMMENTS = [
  { name: "Ahmed", avatar: "A", text: "شغل رائع يا محمد! 🔥", time: "منذ يومين" },
  { name: "Sara", avatar: "S", text: "التصميمات احترافية جداً، استمر!", time: "منذ أسبوع" },
];

const glowStyle = (color = "#a855f7") => ({
  boxShadow: `0 0 18px ${color}55, 0 0 40px ${color}22`,
});

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Projects");
  const [selectedProject, setSelectedProject] = useState(null);
  const [comments, setComments] = useState(INITIAL_COMMENTS);
  const [commentName, setCommentName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [splashDone, setSplashDone] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    setTimeout(() => setSplashDone(true), 2800);
  }, []);

  const postComment = () => {
    if (!commentName.trim() || !commentText.trim()) return;
    setComments([
      { name: commentName, avatar: commentName[0].toUpperCase(), text: commentText, time: "الآن" },
      ...comments,
    ]);
    setCommentName("");
    setCommentText("");
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  if (!splashDone) {
    return (
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#0d081b 0%,#05030a 100%)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        fontFamily: "'Syne', sans-serif",
        transition: "opacity 0.8s",
        opacity: visible ? 1 : 0,
      }}>
        <div style={{ display: "flex", gap: 28, marginBottom: 32 }}>
          {["</>", "👤", "⚙️"].map((icon, i) => (
            <div key={i} style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "rgba(168,85,247,0.12)",
              border: "1.5px solid rgba(168,85,247,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, fontFamily: "monospace", color: "#a855f7",
              animation: `floatIcon ${1.2 + i * 0.3}s ease-in-out infinite alternate`,
              ...glowStyle(),
            }}>
              {icon}
            </div>
          ))}
        </div>
        <h1 style={{
          fontSize: "clamp(1.6rem,5vw,2.8rem)", fontWeight: 800,
          background: "linear-gradient(90deg,#a855f7,#22d3ee,#f0abfc)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          textAlign: "center", margin: "0 16px 12px",
        }}>
          Welcome To My Portfolio Website
        </h1>
        <p style={{ color: "#a0aec0", fontSize: "0.95rem", letterSpacing: 2 }}>
          muhamad-mahmoud.netlify.app
        </p>
        <style>{`
          @keyframes floatIcon {
            from { transform: translateY(0); }
            to   { transform: translateY(-14px); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg,#0d081b 0%,#05030a 60%,#0a0a1a 100%)",
      color: "#fff",
      fontFamily: "'Syne', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #05030a; }
        ::-webkit-scrollbar-thumb { background: #a855f7; border-radius: 3px; }
        .nav-link { position: relative; cursor: pointer; color: #a0aec0; transition: color 0.25s; font-size: 0.95rem; }
        .nav-link:hover { color: #fff; }
        .nav-link::after { content:''; position:absolute; bottom:-4px; left:0; width:0; height:2px; background:linear-gradient(90deg,#a855f7,#22d3ee); transition:width 0.3s; border-radius:2px; }
        .nav-link:hover::after { width:100%; }
        .btn-primary { background:linear-gradient(135deg,#7c3aed,#a855f7); border:none; color:#fff; padding:11px 24px; border-radius:10px; cursor:pointer; font-family:inherit; font-weight:700; font-size:0.95rem; display:flex;align-items:center;gap:8px; transition:transform 0.2s,box-shadow 0.2s; text-decoration:none; }
        .btn-primary:hover { transform:scale(1.05); box-shadow:0 0 24px #a855f755; }
        .btn-outline { background:transparent; border:1.5px solid #a855f7; color:#a855f7; padding:11px 24px; border-radius:10px; cursor:pointer; font-family:inherit; font-weight:700; font-size:0.95rem; display:flex;align-items:center;gap:8px; transition:transform 0.2s,box-shadow 0.2s,background 0.2s; text-decoration:none; }
        .btn-outline:hover { transform:scale(1.05); background:rgba(168,85,247,0.12); box-shadow:0 0 24px #a855f755; }
        .tab-btn { padding:9px 22px; border-radius:30px; border:none; font-family:inherit; font-weight:700; font-size:0.9rem; cursor:pointer; transition:all 0.25s; }
        .tab-active { background:linear-gradient(135deg,#7c3aed,#a855f7); color:#fff; box-shadow:0 0 20px #a855f766; }
        .tab-inactive { background:rgba(255,255,255,0.05); color:#a0aec0; border:1px solid rgba(168,85,247,0.2); }
        .tab-inactive:hover { background:rgba(168,85,247,0.12); color:#fff; }
        .card { background:rgba(255,255,255,0.03); border:1px solid rgba(168,85,247,0.2); border-radius:16px; overflow:hidden; transition:transform 0.25s,box-shadow 0.25s; }
        .card:hover { transform:translateY(-6px); box-shadow:0 12px 40px rgba(168,85,247,0.25); }
        .input-field { width:100%; background:rgba(255,255,255,0.04); border:1px solid rgba(168,85,247,0.3); border-radius:10px; color:#fff; padding:12px 16px; font-family:inherit; font-size:0.95rem; outline:none; transition:border-color 0.25s; }
        .input-field:focus { border-color:#a855f7; box-shadow:0 0 0 3px rgba(168,85,247,0.15); }
        .input-field::placeholder { color:#4a5568; }
        .stat-card { background:rgba(255,255,255,0.03); border:1px solid rgba(168,85,247,0.25); border-radius:14px; padding:24px; text-align:center; }
        .social-btn { width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,0.05);border:1px solid rgba(168,85,247,0.3);display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:18px;transition:all 0.25s; }
        .social-btn:hover { background:rgba(168,85,247,0.2);transform:scale(1.12);box-shadow:0 0 16px #a855f755; }
        .section-title { font-size:clamp(1.8rem,4vw,2.6rem); font-weight:800; background:linear-gradient(90deg,#fff,#a855f7); -webkit-background-clip:text;-webkit-text-fill-color:transparent; }
        @media(max-width:768px){
          .hero-grid{flex-direction:column!important;}
          .about-grid{flex-direction:column!important;}
          .contact-grid{flex-direction:column!important;}
          .hero-right{display:none!important;}
          .desktop-nav{display:none!important;}
          .hamburger-btn{display:flex!important;}
        }
        @media(min-width:769px){
          .hamburger-btn{display:none!important;}
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backdropFilter: "blur(16px)",
        background: "rgba(13,8,27,0.85)",
        borderBottom: "1px solid rgba(168,85,247,0.2)",
        padding: "0 clamp(16px,5vw,48px)",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span style={{
          fontWeight: 800, fontSize: "1.35rem",
          background: "linear-gradient(90deg,#a855f7,#22d3ee)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          Muhamad
        </span>
        <div style={{ display: "flex", gap: 32 }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <span key={l} className="nav-link" onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
          ))}
        </div>
        <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "#fff", fontSize: 26, cursor: "pointer" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "rgba(13,8,27,0.97)",
          borderBottom: "1px solid rgba(168,85,247,0.2)",
          padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16,
        }}>
          {NAV_LINKS.map(l => (
            <span key={l} style={{ color: "#a0aec0", cursor: "pointer", fontSize: "1.05rem" }}
              onClick={() => scrollTo(l.toLowerCase())}>{l}</span>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "80px clamp(16px,7vw,80px) 48px",
      }}>
        <div className="hero-grid" style={{ display: "flex", gap: 48, width: "100%", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1px solid rgba(168,85,247,0.5)", borderRadius: 30,
              padding: "6px 16px", marginBottom: 24, background: "rgba(168,85,247,0.08)",
            }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
              <span style={{ color: "#d8b4fe", fontSize: "0.85rem", fontWeight: 600 }}>Ready to innovate</span>
            </div>
            <h1 style={{ fontSize: "clamp(2.4rem,6vw,4rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 8 }}>
              Frontend Developer
            </h1>
            <h2 style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 600, color: "#a855f7", marginBottom: 16 }}>
              Web Developer & Designer
            </h2>
            <p style={{ color: "#a0aec0", lineHeight: 1.7, maxWidth: 480, marginBottom: 28 }}>
              Creating innovative, functional, and user-friendly websites for digital solutions.
              Passionate about building seamless user experiences that make an impact.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
              {["React", "JavaScript", "Tailwind", "HTML/CSS"].map(t => (
                <span key={t} style={{
                  background: "rgba(168,85,247,0.1)", border: "1px solid rgba(168,85,247,0.35)",
                  borderRadius: 30, padding: "4px 14px", fontSize: "0.82rem", color: "#d8b4fe", fontWeight: 600,
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
              <button className="btn-primary" onClick={() => scrollTo("portfolio")}>🚀 Projects</button>
              <button className="btn-outline" onClick={() => scrollTo("contact")}>✉️ Contact</button>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {[
                { icon: "🐙", href: "https://github.com/citizen011m-stack" },
                { icon: "💼", href: "https://www.linkedin.com/in/muhammad-mahmoud-aldami-29315431b?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                { icon: "📸", href: "https://www.instagram.com/citizenf69?igsh=eXMwNjBwaWJtMXp1" },
                { icon: "✉️", href: "mailto:citizen011m@gmail.com" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                  <div className="social-btn">{s.icon}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-right" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <div style={{
              width: 340, height: 340, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(168,85,247,0.18) 0%,transparent 70%)",
              position: "absolute",
            }} />
            <div style={{
              background: "rgba(255,255,255,0.03)", border: "1.5px solid rgba(168,85,247,0.3)",
              borderRadius: 24, padding: 32, backdropFilter: "blur(10px)", ...glowStyle(),
            }}>
              <div style={{ fontFamily: "monospace", fontSize: "0.85rem", lineHeight: 2, color: "#a0aec0" }}>
                <span style={{ color: "#f472b6" }}>const</span>{" "}
                <span style={{ color: "#22d3ee" }}>developer</span>{" "}
                <span style={{ color: "#fff" }}>= {"{"}</span><br />
                &nbsp;&nbsp;<span style={{ color: "#a855f7" }}>name</span><span style={{ color: "#fff" }}>:</span>{" "}
                <span style={{ color: "#86efac" }}>'Muhamad Mahmoud'</span>,<br />
                &nbsp;&nbsp;<span style={{ color: "#a855f7" }}>role</span><span style={{ color: "#fff" }}>:</span>{" "}
                <span style={{ color: "#86efac" }}>'Frontend Dev'</span>,<br />
                &nbsp;&nbsp;<span style={{ color: "#a855f7" }}>passion</span><span style={{ color: "#fff" }}>:</span>{" "}
                <span style={{ color: "#86efac" }}>'Web Design'</span>,<br />
                &nbsp;&nbsp;<span style={{ color: "#a855f7" }}>projects</span><span style={{ color: "#fff" }}>: </span>
                <span style={{ color: "#fb923c" }}>5</span>,<br />
                <span style={{ color: "#fff" }}>{"}"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "80px clamp(16px,7vw,80px)", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 className="section-title">About Me</h2>
          <p style={{ color: "#a0aec0", marginTop: 8 }}>Transforming ideas into digital experiences</p>
        </div>
        <div className="about-grid" style={{ display: "flex", gap: 48, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <p style={{ color: "#a0aec0", lineHeight: 1.8, marginBottom: 16 }}>
              Hi! I'm <strong style={{ color: "#fff" }}>Muhamad Mahmoud Al-Dami</strong>, a passionate Frontend Developer
              dedicated to crafting beautiful and functional web experiences. I specialize in React.js, Tailwind CSS,
              and modern JavaScript to build responsive, high-performance websites.
            </p>
            <p style={{ color: "#a0aec0", lineHeight: 1.8, marginBottom: 32 }}>
              I believe great design and clean code go hand in hand. Every project I take on, I aim to deliver not just
              a website — but a seamless digital experience that truly connects with users.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary">📄 Download CV</button>
              <button className="btn-outline" onClick={() => scrollTo("portfolio")}>🗂️ View Projects</button>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div className="card" style={{
              width: 280, height: 320, display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 16, ...glowStyle(),
            }}>
              <div style={{
                width: 110, height: 110, borderRadius: "50%",
                background: "linear-gradient(135deg,#7c3aed,#22d3ee)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 48, ...glowStyle("#22d3ee"),
              }}>👨‍💻</div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, fontSize: "1.05rem" }}>Muhamad Mahmoud</p>
                <p style={{ color: "#a855f7", fontSize: "0.85rem" }}>Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: 20, marginTop: 56,
        }}>
          {[
            { num: "5", label: "Total Projects", sub: "Innovative web solutions crafted" },
            { num: "7", label: "Certificates", sub: "Professional skills validated" },
            { num: "2+", label: "Years of Experience", sub: "Continuous learning journey" },
          ].map(s => (
            <div key={s.label} className="stat-card">
              <p style={{
                fontSize: "2.4rem", fontWeight: 800,
                background: "linear-gradient(90deg,#a855f7,#22d3ee)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>{s.num}</p>
              <p style={{ fontWeight: 700, marginTop: 4 }}>{s.label}</p>
              <p style={{ color: "#a0aec0", fontSize: "0.82rem", marginTop: 4 }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: "80px clamp(16px,7vw,80px)", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2 className="section-title">Portfolio Showcase</h2>
          <p style={{ color: "#a0aec0", marginTop: 8 }}>A collection of my best work and achievements</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
          {["Projects", "Certificates", "Tech Stack"].map(tab => (
            <button key={tab}
              className={`tab-btn ${activeTab === tab ? "tab-active" : "tab-inactive"}`}
              onClick={() => { setActiveTab(tab); setSelectedProject(null); }}>
              {tab}
            </button>
          ))}
        </div>

        {selectedProject && (
          <div className="card" style={{ padding: 36, maxWidth: 720, margin: "0 auto", ...glowStyle() }}>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 12 }}>{selectedProject.title}</h3>
            <p style={{ color: "#a0aec0", lineHeight: 1.7, marginBottom: 24 }}>{selectedProject.description}</p>
            <h4 style={{ color: "#a855f7", marginBottom: 12, fontWeight: 700 }}>✨ Key Features</h4>
            <ul style={{ listStyle: "none", marginBottom: 24 }}>
              {selectedProject.features.map(f => (
                <li key={f} style={{ color: "#a0aec0", padding: "4px 0", display: "flex", gap: 8 }}>
                  <span style={{ color: "#22d3ee" }}>▸</span> {f}
                </li>
              ))}
            </ul>
            <h4 style={{ color: "#a855f7", marginBottom: 12, fontWeight: 700 }}>🔧 Technologies Used</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              {selectedProject.tags.map(t => (
                <span key={t} style={{
                  background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.4)",
                  borderRadius: 20, padding: "4px 14px", fontSize: "0.82rem", color: "#d8b4fe",
                }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={selectedProject.demo} target="_blank" rel="noreferrer">
                <button className="btn-primary">🌐 Live Demo</button>
              </a>
              <button className="btn-outline" onClick={() => setSelectedProject(null)}>← Back to Projects</button>
            </div>
          </div>
        )}

        {!selectedProject && activeTab === "Projects" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24 }}>
            {PROJECTS.map(p => (
              <div key={p.id} className="card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{
                  height: 160,
                  background: "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(34,211,238,0.15))",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48,
                }}>🖥️</div>
                <div style={{ padding: 20, flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ color: "#a0aec0", fontSize: "0.88rem", lineHeight: 1.6, flex: 1, marginBottom: 16 }}>
                    {p.description}
                  </p>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a href={p.demo} target="_blank" rel="noreferrer" style={{ flex: 1, textDecoration: "none" }}>
                      <button className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "0.85rem", padding: "9px 12px" }}>
                        🌐 Live Demo
                      </button>
                    </a>
                    <button className="btn-outline"
                      style={{ flex: 1, justifyContent: "center", fontSize: "0.85rem", padding: "9px 12px" }}
                      onClick={() => setSelectedProject(p)}>
                      📋 Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Tech Stack" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))", gap: 20 }}>
            {TECH_STACK.map(t => (
              <div key={t.name} className="card" style={{ padding: 20, textAlign: "center", cursor: "default" }}>
                <div style={{ fontSize: 36, marginBottom: 10 }}>{t.icon}</div>
                <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>{t.name}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "Certificates" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: 20 }}>
            {CERTIFICATES.map(c => (
              <div key={c.title} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>🏆</div>
                <h3 style={{ fontWeight: 700, marginBottom: 6, fontSize: "0.95rem" }}>{c.title}</h3>
                <p style={{ color: "#a855f7", fontSize: "0.85rem" }}>{c.issuer}</p>
                <p style={{ color: "#a0aec0", fontSize: "0.8rem", marginTop: 4 }}>{c.year}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px clamp(16px,7vw,80px)", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 className="section-title">Contact Me</h2>
          <p style={{ color: "#a0aec0", marginTop: 8 }}>
            Got a question? Send me a message, and I'll get back to you soon.
          </p>
        </div>
        <div className="contact-grid" style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <div className="card" style={{ padding: 32 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 24, fontSize: "1.15rem" }}>✉️ Get In Touch</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <input className="input-field" placeholder="Your Name"
                  value={contactName} onChange={e => setContactName(e.target.value)} />
                <input className="input-field" placeholder="Your Email" type="email"
                  value={contactEmail} onChange={e => setContactEmail(e.target.value)} />
                <textarea className="input-field" placeholder="Your Message" rows={5}
                  style={{ resize: "vertical" }}
                  value={contactMsg} onChange={e => setContactMsg(e.target.value)} />
                <button className="btn-primary" style={{ justifyContent: "center" }}>📤 Send Message</button>
              </div>
              <h4 style={{ marginTop: 28, marginBottom: 14, fontWeight: 700, color: "#a0aec0" }}>Connect With Me</h4>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {[
                  { label: "💼 LinkedIn", href: "https://www.linkedin.com/in/muhammad-mahmoud-aldami-29315431b?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                  { label: "📸 Instagram", href: "https://www.instagram.com/citizenf69?igsh=eXMwNjBwaWJtMXp1" },
                  { label: "🐙 GitHub", href: "https://github.com/citizen011m-stack" },
                  { label: "✉️ Gmail", href: "mailto:citizen011m@gmail.com" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
                    <button className="btn-outline" style={{ fontSize: "0.82rem", padding: "7px 14px" }}>{s.label}</button>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div className="card" style={{ padding: 32 }}>
              <h3 style={{ fontWeight: 700, marginBottom: 6, fontSize: "1.15rem" }}>
                💬 Comments{" "}
                <span style={{
                  background: "rgba(168,85,247,0.2)", borderRadius: 20,
                  padding: "2px 10px", fontSize: "0.8rem", color: "#a855f7",
                }}>{comments.length}</span>
              </h3>
              <p style={{ color: "#a0aec0", fontSize: "0.85rem", marginBottom: 20 }}>Leave a comment below!</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                <input className="input-field" placeholder="Your Name"
                  value={commentName} onChange={e => setCommentName(e.target.value)} />
                <textarea className="input-field" placeholder="Your Comment" rows={3}
                  style={{ resize: "vertical" }}
                  value={commentText} onChange={e => setCommentText(e.target.value)} />
                <button className="btn-primary" style={{ justifyContent: "center" }} onClick={postComment}>
                  📝 Post Comment
                </button>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, maxHeight: 280, overflowY: "auto" }}>
                {comments.map((c, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 12, padding: 14,
                    background: "rgba(255,255,255,0.03)", borderRadius: 10,
                    border: "1px solid rgba(168,85,247,0.15)",
                  }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: "50%",
                      background: "linear-gradient(135deg,#7c3aed,#22d3ee)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, flexShrink: 0,
                    }}>{c.avatar}</div>
                    <div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                        <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{c.name}</span>
                        <span style={{ color: "#4a5568", fontSize: "0.75rem" }}>{c.time}</span>
                      </div>
                      <p style={{ color: "#a0aec0", fontSize: "0.88rem", lineHeight: 1.5 }}>{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "28px clamp(16px,7vw,80px)",
        borderTop: "1px solid rgba(168,85,247,0.15)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ color: "#a0aec0", fontSize: "0.85rem" }}>
          © 2025 Muhamad Mahmoud Al-Dami — All rights reserved.
        </span>
        <span style={{
          fontSize: "0.85rem",
          background: "linear-gradient(90deg,#a855f7,#22d3ee)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: 700,
        }}>
          Built with ❤️ & React
        </span>
      </footer>
    </div>
  );
}
