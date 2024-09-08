
declare type buttonprops = {
  title:string
  icons:React.ReactNode
  position:string 
  handleclick?: () => void;
  otherClasses ?:string
}

const MagicButton = ({title, position, icons, handleclick}: buttonprops) => {
  const isEmailRelated = title === "Email is Copied!" || title === "Copy my email address";

  return (
    <button className="relative inline-flex h-12  w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 " onClick={handleclick}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2`}>
        {position === "left" && icons}
        {isEmailRelated ? (
      <>
        {/* Show only the first word for small screens */}
        <span className="text-white sm:hidden">{title.split(' ')[0]}</span>
        {/* Show full title for medium and large screens */}
        <span className="text-white hidden sm:inline">{title}</span>
      </>
    ) : (
      // Show full title for all screen sizes if not related to email
      <span className="text-white">{title}</span>
    )}
        {position === "right" && icons}
      </span>
    </button>
  );
};

export default MagicButton;
