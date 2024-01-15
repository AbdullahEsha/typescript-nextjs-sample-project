import { TProgressBar } from "@/types/types";

const ProgressBar = ({ width, bgLight, bgDark }: TProgressBar) => {
  return (
    <div className={`w-24 lg:w-48 ${bgLight} rounded-full h-[9px]`}>
      <div className={`${bgDark} h-[9px] rounded-full ${width}`}></div>
    </div>
  );
};

export default ProgressBar;
