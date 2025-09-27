import React from "react";

// --- Mock Icons (using lucide-react style SVGs) ---
const LogoIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);
const Bell = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);
const Settings = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.44l-.94.19a2 2 0 0 0-1.27 1.27l-.19.94H4a2 2 0 0 0-2 2v.44l.19.94a2 2 0 0 0 1.27 1.27l.94.19V17a2 2 0 0 0 2 2h.44l.94.19a2 2 0 0 0 1.27 1.27l.19.94H20a2 2 0 0 0 2-2v-.44l-.19-.94a2 2 0 0 0-1.27-1.27l-.94-.19V7a2 2 0 0 0-2-2h-.44l-.94-.19a2 2 0 0 0-1.27-1.27L12.22 2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const Users = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const MessageSquare = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const Zap = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const CheckCircle = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// --- Helper Components using custom classes ---


function StatCard({ icon, label, value, colorVariable }) {
  // Use colorVariable to apply one of the custom CSS background colors
  let style = {};
  if (colorVariable) {
    // The metric-badge style is complex, so we'll just set the background directly
    style.background = `var(--${colorVariable})`;
  }

  return (
    <div className="card">
      <div className="metric">
        <div className="metric-badge" style={style}>
          {icon}
        </div>
        <div>
          <div className="label">{label}</div>
          <div className="value">{value}</div>
        </div>
      </div>
    </div>
  );
}

function ProgressWidget({ value, label, colorVariable }) {
  // Uses .widget for margin spacing and .card for styling
  return (
    <div className="card widget p-4">
      <div className="section-header mb-2">
        <h3 className="section-title" style={{ fontSize: "15px" }}>
          {label}
        </h3>
        <span
          className="font-bold"
          style={{ color: `var(--${colorVariable})` }}
        >
          {value}%
        </span>
      </div>
      <div className="progress">
        <span
          style={{
            width: `${value}%`,
            background: `linear-gradient(180deg,var(--${colorVariable}), var(--${colorVariable}-600, var(--${colorVariable})))`,
          }}
        />
      </div>
    </div>
  );
}

// --- Main Component ---

export default function AdminDashboard() {
  // Mock Data
  const stats = [
    {
      icon: <Users />,
      label: "Active Users",
      value: "1,245",
      colorVariable: "accent",
    },
    {
      icon: <MessageSquare />,
      label: "Open Tickets",
      value: "12",
      colorVariable: "warning",
    },
    {
      icon: <CheckCircle />,
      label: "Uptime (24h)",
      value: "99.9%",
      colorVariable: "success",
    },
    {
      icon: <Zap />,
      label: "Sessions Today",
      value: "312",
      colorVariable: "info",
    },
  ];

  const sessions = [
    {
      id: 1001,
      counselor: "Alice Johnson",
      user: "User A",
      date: "2025-09-24",
      status: "Active",
    },
    {
      id: 1002,
      counselor: "Bob Smith",
      user: "User B",
      date: "2025-09-24",
      status: "Pending",
    },
    {
      id: 1003,
      counselor: "Charlie Day",
      user: "User C",
      date: "2025-09-23",
      status: "Active",
    },
    {
      id: 1004,
      counselor: "Dee Reynolds",
      user: "User D",
      date: "2025-09-23",
      status: "Inactive",
    },
    {
      id: 1005,
      counselor: "Frank Reynolds",
      user: "User E",
      date: "2025-09-22",
      status: "Active",
    },
  ];

  const progressMetrics = [
    { label: "Storage Utilization", value: 75, colorVariable: "accent" },
    { label: "API Latency (ms)", value: 8, colorVariable: "success" },
  ];

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Active":
        return "badge live";
      case "Pending":
        return "badge pending";
      case "Inactive":
        return "badge inactive";
      default:
        return "badge draft";
    }
  };

  const chartData = [12, 18, 25, 30, 22, 15, 10, 8, 14, 20, 28, 35]; // Mock bar heights

  return (
    <React.Fragment>
      {/* ===================================================================
        EMBEDDED STYLES: YOUR CUSTOM CSS FOR SCOPED STYLING
        ===================================================================
      */}
      <style>
        {`
          :root{
            --bg:#0b0c12;
            --panel:#11131a;
            --card:#171926;
            --muted:#232634;
            --text:#e7e9f0;
            --text-dim:#a4adbf;
            --border:#26293a;
            --accent:#7c3aed;
            --accent-600:#6d28d9;
            --success:#22c55e;
            --warning:#f59e0b;
            --danger:#ef4444;
            --info:#38bdf8;
            --pink:#ec4899;
            --radius:14px;
            --radius-sm:10px;
            --shadow:0 10px 30px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.02);
            --shadow-soft:0 6px 18px rgba(0,0,0,.25);
          }
          
          *{box-sizing:border-box}
          html,body,#root{height:100%}
          html,body{background:var(--bg);color:var(--text);font-family:"Inter",system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
          a{color:inherit;text-decoration:none}
          button{font:inherit}
          
          .container{
            max-width:1280px;
            margin:0 auto;
            padding:20px 22px 40px;
          }
            
            /* Top Nav */
          .nav{
            position:sticky;top:0;z-index:40;
            background:linear-gradient(180deg,rgba(11,12,18,.85),rgba(11,12,18,.65));
            backdrop-filter: blur(10px);
            border-bottom:1px solid var(--border);
          }
          .nav-inner{
            display:flex;align-items:center;gap:18px;
            padding:14px 22px;
          }
          .brand{
            display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.2px
          }
          .brand-badge{
            width:32px;height:32px;border-radius:10px;background:radial-gradient(120% 120% at 10% 10%, #8b5cf6 0%, #6d28d9 50%, #3b0764 100%);
            display:grid;place-items:center;box-shadow:0 8px 20px rgba(124,58,237,.45), inset 0 0 22px rgba(255,255,255,.08);
          }
          .brand-badge svg{transform:scale(.9)}
          .nav-links{display:flex;gap:18px;margin-left:10px}
          .nav-link{
            padding:8px 12px;border-radius:10px;color:var(--text-dim);font-weight:600;border:1px solid transparent;
          }
          .nav-link.active{color:#fff;background:var(--panel);border-color:var(--border)}
          .nav-spacer{flex:1}
          .nav-actions{display:flex;align-items:center;gap:10px}
          .pill{
            background:var(--panel);border:1px solid var(--border);color:var(--text-dim);
            padding:8px 12px;border-radius:999px;font-weight:600
          }
          .icon-btn{
            width:38px;height:38px;border-radius:12px;background:var(--panel);
            border:1px solid var(--border);display:grid;place-items:center;color:var(--text-dim)
          }
          .avatar{
            width:38px;height:38px;border-radius:50%;
            background:linear-gradient(135deg,#f472b6,#8b5cf6);
            display:grid;place-items:center;font-weight:800;color:#fff
          }
          
          /* Hero */
          .hero{
            margin-top:18px;background:linear-gradient(135deg,rgba(124,58,237,.18),rgba(124,58,237,.06) 30%, rgba(17,19,26,1) 60%);
            border:1px solid var(--border);border-radius:var(--radius);padding:20px 24px;box-shadow:var(--shadow);
            display:flex;align-items:center;gap:16px
          }
          .hero-title{font-size:18px;font-weight:800}
          .hero-sub{color:var(--text-dim);font-size:13.5px}
          .cta{
            margin-left:auto;display:inline-flex;align-items:center;gap:10px;background:linear-gradient(180deg,var(--accent),var(--accent-600));
            border:0;color:#fff;padding:10px 14px;border-radius:12px;font-weight:700;box-shadow:0 10px 20px rgba(124,58,237,.35)
          }
          
          /* Stats */
          .grid{
            display:grid;gap:18px
          }
          .grid.metrics{
            grid-template-columns:repeat(4, minmax(0,1fr));
            margin-top:18px
          }
          .card{
            background:var(--card);border:1px solid var(--border);border-radius:var(--radius);
            box-shadow:var(--shadow);padding:16px
          }
          .metric{
            display:flex;align-items:center;gap:14px
          }
          .metric-badge{
            width:44px;height:44px;border-radius:12px;display:grid;place-items:center;
            background:var(--panel);border:1px solid var(--border);color:#fff
          }
          .metric .label{color:var(--text-dim);font-weight:600}
          .metric .value{font-size:26px;font-weight:800;letter-spacing:.3px;margin-top:2px}
          
          /* Main layout */
          .grid.main{
            grid-template-columns: 2fr 1fr;
            margin-top:18px
          }
          .section-header{
            display:flex;align-items:center;justify-content:space-between;margin-bottom:12px
          }
          .section-title{font-weight:800}
          .section-actions{display:flex;gap:10px}
          .btn{
            background:var(--panel);border:1px solid var(--border);color:#fff;padding:8px 12px;border-radius:10px;font-weight:700
          }
          .btn.primary{
            background:linear-gradient(180deg,var(--accent),var(--accent-600));border:0
          }
          
          /* Table */
          .table{
            width:100%;border-collapse:collapse;font-size:13.5px
          }
          .table th,.table td{
            padding:12px;border-bottom:1px dashed var(--border);text-align:left
          }
          .table th{color:var(--text-dim);font-weight:700}
          .badge{
            padding:4px 8px;border-radius:999px;font-size:12px;font-weight:800;letter-spacing:.2px;
            border:1px solid transparent;display:inline-block
          }
          .badge.active{background:rgba(34,197,94,.12);border-color:rgba(34,197,94,.25);color:#86efac}
          .badge.pending{background:rgba(245,158,11,.12);border-color:rgba(245,158,11,.25);color:#facc15}
          .badge.inactive{background:rgba(239,68,68,.12);border-color:rgba(239,68,68,.25);color:#fca5a5}
          .badge.live{background:rgba(124,58,237,.18);border-color:rgba(124,58,237,.35);color:#c4b5fd}
          .badge.draft{background:rgba(148,163,184,.12);border-color:rgba(148,163,184,.25);color:#cbd5e1}
          
          /* Charts */
          .chart{
            height:220px;display:flex;align-items:flex-end;gap:14px;padding:8px 2px 0 2px
          }
          .bar{
            width:22px;border-radius:7px 7px 0 0;background:linear-gradient(180deg,#8b5cf6,#5b21b6);
            box-shadow:0 8px 18px rgba(124,58,237,.35)
          }
          .bar.dim{background:linear-gradient(180deg,#4b5563,#1f2937);box-shadow:none}
          .chart-x{
            display:flex;justify-content:space-between;color:var(--text-dim);font-size:12px;margin-top:10px
          }
          
          /* Progress */
          .progress{
            height:8px;background:var(--panel);border:1px solid var(--border);border-radius:999px;overflow:hidden
          }
          .progress > span{
            display:block;height:100%;background:linear-gradient(180deg,var(--accent),var(--accent-600))
          }
          
          /* Right column widgets */
          .widget + .widget{margin-top:18px}
          
          /* Responsive */
          @media (max-width:1100px){
            .grid.metrics{grid-template-columns:repeat(2,minmax(0,1fr))}
            .grid.main{grid-template-columns:1fr}
          }
        `}
      </style>

      {/* 1. NAVIGATION BAR */}

      {/* 2. MAIN CONTAINER */}
      <div className="container">
        {/* HERO SECTION */}
        <div className="hero">
          <div style={{ flexGrow: 1 }}>
            <div className="hero-title">Welcome back, Administrator.</div>
            <div className="hero-sub">
              Review system health, monitor recent activity, and manage platform
              users.
            </div>
          </div>
          <button className="cta">
            <Settings className="w-5 h-5" /> Manage Settings
          </button>
        </div>

        {/* METRICS GRID */}
        <div className="grid metrics">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* MAIN CONTENT GRID (2 COLUMNS) */}
        <div className="grid main">
          {/* LEFT COLUMN: ACTIVITY TABLE & CHART */}
          <div>
            {/* LATEST SESSIONS TABLE */}
            <div className="card" style={{ padding: "24px" }}>
              <div className="section-header">
                <h2 className="section-title">Latest User Sessions</h2>
                <div className="section-actions">
                  <button className="btn">View All</button>
                  <button className="btn primary">New Report</button>
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Session ID</th>
                    <th>Counselor</th>
                    <th>User</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((session, index) => (
                    <tr key={index}>
                      <td>#{session.id}</td>
                      <td>{session.counselor}</td>
                      <td>{session.user}</td>
                      <td>{session.date}</td>
                      <td>
                        <span className={getStatusBadgeClass(session.status)}>
                          {session.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* MONTHLY TRAFFIC CHART */}
            <div
              className="card"
              style={{ padding: "24px", marginTop: "18px" }}
            >
              <h2 className="section-title mb-4">
                Platform Growth (Monthly Users)
              </h2>
              <div className="chart">
                {chartData.map((height, index) => (
                  <div
                    key={index}
                    className={`bar ${
                      index < chartData.length - 1 ? "dim" : ""
                    }`}
                    style={{ height: `${height * 3}px` }}
                  />
                ))}
              </div>
              <div className="chart-x">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: WIDGETS */}
          <div>
            <h2 className="section-title">System Status</h2>
            {progressMetrics.map((metric, index) => (
              <ProgressWidget key={index} {...metric} />
            ))}

            <div className="card widget p-4">
              <h2 className="section-title" style={{ marginBottom: "10px" }}>
                Quick Actions
              </h2>
              <button
                className="cta w-full"
                style={{
                  background: "var(--danger)",
                  boxShadow: "none",
                  marginBottom: "10px",
                }}
              >
                <Zap /> Restart Service
              </button>
              <button
                className="cta w-full"
                style={{ background: "var(--info)", boxShadow: "none" }}
              >
                <MessageSquare /> Send Broadcast
              </button>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="footer">
          <div>&copy; 2025 MindMate Admin. All rights reserved.</div>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}
