import { DEBUG } from "../../../utils/constants";

function DebugPanel() {
  if (!DEBUG) return null;

  return (
    <aside
      style={{
        position: "fixed",
        right: "16px",
        bottom: "16px",
        background: "#111827",
        color: "white",
        padding: "12px 16px",
        borderRadius: "12px",
        fontSize: "14px",
        zIndex: 100,
      }}
    >
      DEV MODE ACTIVE
    </aside>
  );
}

export default DebugPanel;