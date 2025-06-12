import DebugService from "../../services/DebugService";

const DebugInfo = () => {
  return (
    <div className="debug-info text-contrast">
      {DebugService.ReadSettings().CheatsEnabled && "Cheats enabled"}
    </div>
  );
};

export default DebugInfo;
