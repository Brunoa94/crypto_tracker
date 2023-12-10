interface ChooseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ChooseCard = (props: ChooseCardProps) => {
  return (
    <div className="bg-indigo-900 rounded-2xl flex items-start w-96 p-7 mt-6 border-2 border-white">
      <div className="flex items-center justify-center p-2 bg-gradient-to-b to-purple-950 from-violet-950 rounded-2xl">
        {props.icon}
      </div>
      <div className="flex flex-col ml-6">
        <span className="text-white text-3xl font-bold font-spacegrotesk uppercase">
          {props.title}
        </span>
        <span className="text-white text-xl mt-4">{props.description}</span>
      </div>
    </div>
  );
};

export default ChooseCard;
