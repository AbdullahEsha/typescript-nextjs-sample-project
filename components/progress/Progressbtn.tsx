type TProgress = {
  number: string;
  borderColor: string;
  textColor: string;
  bgColor: string;
};

const Progressbtn = ({
  number,
  borderColor,
  textColor,
  bgColor,
}: TProgress) => {
  return (
    <div
      className={`border ${borderColor} ${textColor} ${bgColor} rounded-lg p-1.5  text-sm`}
    >
      {number}%
    </div>
  );
};

export default Progressbtn;
