function Modal({ data, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-xl relative overflow-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{data?.title}</h2>
        <p className="text-gray-700 mb-2">{data?.text}</p>
      </div>
    </div>
  );
}

export default Modal;

