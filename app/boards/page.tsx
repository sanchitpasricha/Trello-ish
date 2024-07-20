"use client";

import { useState } from "react";
import { BoardProps } from "@/interfaces/board-interface";

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
      <button onClick={toggleModal} className="text-gray px-2 py-1 rounded-md">
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
  return (
    <div
      className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-75"
      onClick={toggleModal}
    >
      <div
        className="relative p-4 w-full max-w-md max-h-full rounded-lg shadow dark:bg-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex  justify-center p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Add New Task in {category}
          </h3>
        </div>

        <div className="grid gap-4 mb-4 p-4">
          <div className="col-span-2">
            <label className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white  "
              required
              placeholder="Title"
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white">
              Content
            </label>
            <textarea
              rows={10}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white  "
              placeholder="Task content"
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="text-white inline-flex items-center bg-nav-blue  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
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
