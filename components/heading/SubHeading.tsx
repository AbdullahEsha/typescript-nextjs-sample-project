interface IText {
  text: string;
}

export const SubHeading = ({ text }: IText) => {
  return <h3 className="font-semibold text-xl mb-4">{text}</h3>;
};
