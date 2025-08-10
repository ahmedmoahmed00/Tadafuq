const importantLinks = [
  { text: "الشروط والأحكام", href: "#" },
  { text: "سياسة الخصوصية", href: "#" },
];

function ImportantLinks() {
  return (
    <div className="max-[992px]:-order-1">
      <div className="flex flex-col gap-8">
        <h4 className="Plex-Sans font-bold text-[#EB5212]">روابط تهمك</h4>
        <ul className="KumbhSans flex flex-col gap-[20px]">
          {importantLinks.map(({ text, href }, idx) => (
            <li key={idx} className="duration-300 hover:text-[#EB5212]">
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImportantLinks;
