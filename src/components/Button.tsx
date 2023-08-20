interface props {
  title: string;
}

export default function Button({ title }: props) {
  return (
    <button className="border h-[3rem] w-[10rem] pt-2 pb-2 pl-4 pr-4 mt-[-11px] border-r-2">
      {title}
    </button>
  );
}
