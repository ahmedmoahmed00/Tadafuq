function Checkbox({ id, label }) {
  return (
    <div className="checkbox-container flex justify-end gap-2 Plex-Sans text-white font-[500]">
      <label className="rtl" htmlFor={id}>
        {label}
      </label>
      <input id={id} type="checkbox" />
    </div>
  );
}

export default Checkbox;
