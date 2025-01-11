import { useRef } from "react";
import { toast } from "react-toastify";

import { useUpdateServices } from "../../hooks/useUpdateServices";
import { uploadImageToSupabase } from "../../service/uploadImageSupa";

function ServiceModal({ service, closeModal, handleDelete }) {
  const { mutate: updateService } = useUpdateServices();
  const modalFileRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title");
    const imageFile = modalFileRef.current?.files[0];

    let imageUrl = service.image;
    console.log(imageUrl);
    
    if (imageFile) {
      try {
        imageUrl = await uploadImageToSupabase(imageFile);
        if (!imageUrl) {
          toast.error("Image upload failed. Please try again.");
          return;
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image.");
        return;
      }
    }

    updateService({ id: service.id, title, image: imageUrl });
    toast.success("Service updated successfully!");
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg relative">
        <h2 className="text-2xl font-semibold mb-4 break-words">
          Edit Service: {service.title}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              placeholder="Edit service title"
              name="title"
              defaultValue={service.title}
              className="border border-gray-300 rounded px-4 py-2 w-full"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Image</label>
            <input
              type="file"
              ref={modalFileRef}
              className="hidden"
              name="image"
            />
            <button
              type="button"
              onClick={() => modalFileRef?.current?.click()}
              className="bg-gray-200 px-4 py-2 rounded border border-gray-300"
            >
              Upload Image
            </button>
          </div>

          <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 w-full lg:justify-between">
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded text-white"
            >
              Save Changes
            </button>

            <p
              className="bg-red-500 px-4 py-2 rounded text-white cursor-pointer text-center"
              onClick={() => handleDelete(service.id)}
            >
              Delete Service
            </p>
          </div>

          <button
            onClick={closeModal}
            className="absolute top-1 right-4 text-gray-500 hover:text-gray-700 hover:scale-110"
          >
            ✕
          </button>
        </form>
      </div>
    </div>
  );
}

export default ServiceModal;
