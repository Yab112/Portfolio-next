
declare type buttonprops = {
  title?:string
  icons:React.ReactNode
  position:string 
  handleclick?: (e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) => void;
  otherClasses ?:string
  disabled?:boolean
}

const MagicButton = ({
  title,
  position,
  icons,
  handleclick,
  disabled,
}: buttonprops) => {
  const isEmailRelated =
    title === "Email is Copied!" || title === "Copy my email address";

  return (
    <button
      className={`relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={handleclick}
      disabled={disabled}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
      >
        {position === "left" && icons}
        {isEmailRelated ? (
          <>
            <span className="text-white sm:hidden">
              {title.split(" ")[0]}
            </span>
            <span className="text-white hidden sm:inline">
              {title}
            </span>
          </>
        ) : (
          <span className="text-white">{title}</span>
        )}
        {position === "right" && icons}
      </span>
    </button>
  );
};

export default MagicButton;