"use client";

import { useState } from "react";
import { BoardProps } from "@/interfaces/board-interface";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="bg-nav-blue min-h-screen p-4">
      <div className="flex flex-row overflow-x-auto space-x-4">
        <Board name={"ToDo"} />
        <Board name={"In Progress"} />
        <Board name={"Review"} />
        <Board name={"Done"} />
      </div>
    </div>
  );
}

function Board(props: BoardProps) {
  return (
    <div className="w-1/4 bg-gray-100 rounded-2xl shadow-md">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">{props.name}</h2>
      </div>
      <div className="p-4 space-y-4">
        <Card />
      </div>
      <div className="p-4 border-t border-gray-200 text-center text-gray-500">
        <AddButton category={props.name} />
      </div>
    </div>
  );
}

function AddButton({ category }: { category: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="text-gray-500 px-2 py-1 rounded-md"
      >
        + Add Card
      </button>
      {isModalOpen && <Modal toggleModal={toggleModal} category={category} />}
    </>
  );
}

interface ModalProps {
  toggleModal: () => void;
  category: string;
}

function Modal({ toggleModal, category }: ModalProps) {
  const [option, setOption] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useRouter();

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-75"
      onClick={toggleModal}
    >
      <div
        className="relative p-4 w-full max-w-md rounded-lg shadow bg-white dark:bg-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-center p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Add New Task in {category}
          </h3>
        </div>

        <div className="grid gap-4 mb-4 p-4">
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              id="category"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="TODO">ToDo</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="REVIEW">Review</option>
              <option value="DONE">Done</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Content
            </label>
            <textarea
              rows={4}
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Task content"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-nav-blue rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600"
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}

function Card() {
  return <div className="bg-white p-4 rounded-md shadow-lg">Task 1</div>;
}
