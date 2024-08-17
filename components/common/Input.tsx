interface InputProps {
  placeholder: string;
  name: string;
  onChange: (e: any) => void;
  value: string;
}

function Input(props: InputProps) {
  return (
    <div>
      <input
        {...props}
        className=" bg-[#EFEFEF]  my-4 px-8 w-[30rem] rounded-full py-8 active:ring-1 active:ring-green-700 hover:bg-gray-100 hover:ring-1 hover:ring-green-500"
      />
    </div>
  );
}

export default Input;
