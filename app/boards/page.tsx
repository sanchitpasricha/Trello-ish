export default function Home() {
  return (
    <div className="bg-nav-blue min-h-screen p-4">
      <div className="flex flex-row overflow-x-auto space-x-4">
        {/* Board 1 */}
        <div className=" w-1/4 bg-white rounded-2xl shadow-md">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">To Do</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="bg-gray-200 p-4 rounded-md shadow-sm">Task 1</div>
            <div className="bg-gray-200 p-4 rounded-md shadow-sm">Task 2</div>
          </div>
          <div className="p-4 border-t border-gray-200 text-center text-gray-500">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
              Add Card
            </button>
          </div>
        </div>

        {/* Board 2 */}
        <div className=" w-1/4 bg-white rounded-2xl shadow-md">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">In Progress</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="bg-gray-200 p-4 rounded-md shadow-sm">Task 3</div>
          </div>
          <div className="p-4 border-t border-gray-200 text-center text-gray-500">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
              Add Card
            </button>
          </div>
        </div>

        {/* Board 3 */}
        <div className=" w-1/4 bg-white rounded-2xl shadow-md">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Review</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="bg-gray-200 p-4 rounded-md shadow-sm">Task 3</div>
          </div>
          <div className="p-4 border-t border-gray-200 text-center text-gray-500">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
              Add Card
            </button>
          </div>
        </div>

        {/* Board 4 */}
        <div className=" w-1/4 bg-white rounded-2xl shadow-md">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Done</h2>
          </div>
          <div className="p-4 space-y-4">
            <div className="bg-gray-200 p-4 rounded-md shadow-sm">Task 4</div>
          </div>
          <div className="p-4 border-t border-gray-200 text-center text-gray-500">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
              Add Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
