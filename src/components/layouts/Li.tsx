type PropsString = {
  item: string;
};

const Li = ({ item }: PropsString) => {
  return <li className="mr-3 text-xs leading-4 text-slate-400">{item}</li>;
};

export default Li;
