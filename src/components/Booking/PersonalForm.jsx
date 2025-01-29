
import { useAddPatient } from "../../hooks/useAddPatient";

function PersonalForm() {
  const { mutate: addPatient } = useAddPatient();

  const handleAddPatient = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const phone = formData.get("use_phone");
    const age = formData.get("age");

    addPatient({user_name: name, user_email: email, user_phone: phone, age: age});
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Enter Personal Information
      </h2>
      <form onSubmit={handleAddPatient} className="space-y-6">
        <div>
          <label
            htmlFor="user_name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label
            htmlFor="user_email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            htmlFor="user_phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="user_phone"
            name="user_phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Age
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="Enter your age"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PersonalForm;
