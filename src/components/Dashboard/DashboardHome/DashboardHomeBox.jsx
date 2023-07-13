const DashboardHomeBox = ({ heading, total, borderColor, color }) => {
  return (
    <div
      className={
        "flex flex-col justify-center py-6 px-8 bg-white rounded-md border-l-4 " +
        borderColor
      }
    >
      <h5 className={"uppercase text-sm sm:text-base " + color}>{heading}</h5>
      <span className="font-bold text-xl md:text-2xl">{total}</span>
    </div>
  );
};

export default DashboardHomeBox;
