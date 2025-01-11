import Close from "/images/close.png";
function ServiceInputForm({
  isPending,
  showInput,
  setShowInput,
  inputValue,
  setInputValue,
  addContent,
  setAddContent,
  handleFileChange,
  handleFileUploadClick,
  selectedFile,
  setSelectedFile,
  submitServiceAdd,
  handleAddClick,
  fileInputRef,
}) {
  function handleClick() {
    setInputValue("");
    setAddContent("")
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    setSelectedFile(null);
    setShowInput(false);
  }
  return (
    <div className="flex justify-end pr-4">
      {showInput ? (
        <form
          onSubmit={submitServiceAdd}
          className="flex flex-col space-y-2 items-start"
        >
          <div className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="Enter service title"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border rounded px-2 py-1"
            />
            <img
              src={Close}
              alt=""
              onClick={handleClick}
              className="w-[1rem] h-[1rem] cursor-pointer"
            />
          </div>
          <textarea
              type="text"
              placeholder="Enter Content"
              value={addContent}
              onChange={(e) => setAddContent(e.target.value)}
              className="border rounded px-2 py-1"
            />
          <div className="flex items-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
            />
            {fileInputRef.current && (
              <button
                type="button"
                onClick={handleFileUploadClick}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                Upload Image
              </button>
            )}
            {selectedFile && <p>{selectedFile.name}</p>}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className={`bg-blue-500 hover:bg-blue-400  px-4 py-1 rounded text-white ${isPending ? "cursor-not-allowed" : "cursor-pointer"}`}
          >
            {isPending ? "Adding..." : "Add Service"}
          </button>
        </form>
      ) : (
        <button
          onClick={handleAddClick}
          className="bg-blue-500 hover:bg-blue-400 px-4 py-1 rounded text-white"
        >
          Add Service
        </button>
      )}
    </div>
  );
}

export default ServiceInputForm;
