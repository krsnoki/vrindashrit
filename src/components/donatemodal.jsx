
export default function Modal({ message, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-teal-600 p-6 rounded-lg shadow-lg text-center h-[8rem] w-[20rem]">
          <h2 className="text-xl font-semibold font-dm mb-3">{message}</h2>
          <button
            onClick={onClose}
            className="mt-4 px-4 py-1 bg-teal-600 text-white rounded hover:bg-teal-800"
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  