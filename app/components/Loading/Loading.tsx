const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
      <span className="icon-[line-md--loading-alt-loop] h-40 w-40 animate-spin text-red-primary"></span>
    </div>
  );
};

export default Loading;
