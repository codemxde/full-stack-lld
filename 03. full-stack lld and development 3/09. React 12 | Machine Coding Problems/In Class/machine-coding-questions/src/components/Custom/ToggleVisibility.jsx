export default function ToggleVisibility({ visibility, hide }) {
  return visibility ? (
    <div>
      <h1 className="text-2xl font-semibold text-blue-400">I am visible now...</h1>
      <div>
        <button className="p-2 bg-slate-200 rounded-lg" onClick={hide}>
          Hide Me
        </button>
      </div>
    </div>
  ) : null;
}
