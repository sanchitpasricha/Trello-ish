export default function LoadingSkeleton() {
  return (
    <div>
      <div className="flex justify-center items-center h-full w-full bg-white">
        <div className="w-12 h-12 rounded-full bg-gray-400 animate-spin"></div>
      </div>
    </div>
  );
}
