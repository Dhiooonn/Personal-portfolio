interface Props {
  year: string;
  month: string;
  company: string;
  role: string;
  active?: boolean;
}

export default function ExperienceItem({
  year,
  month,
  company,
  role,
  active,
}: Props) {
  return (
    <div
      className={`flex justify-between items-center px-8 py-6 rounded-xl transition-colors duration-200 hover:bg-teal-100
      ${active ? "bg-white/5 border border-white/10" : ""}`}
    >
      <div className="">
        <h2 className="text-[50px] font-bold font-fredoka text-teal-500">
          {year}
        </h2>
        <p className="text-xl text-teal-500">{month}</p>
      </div>

      <div className="text-right">
        <p className="text-3xl font-semibold text-teal-500">{role}</p>
        <h3 className="text-teal-500 text-lg">{company}</h3>
      </div>
    </div>
  );
}
