function PersonalForm() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-extrabold mb-2 mt-10 text-gray-800">
        Enter Personal Information
      </h2>

      <div>
        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input type="text" name="user_name" required className="w-full px-4 py-2 border rounded-md" />
      </div>

      <div>
        <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input type="email" name="user_email" required className="w-full px-4 py-2 border rounded-md" />
      </div> 

      <div>
        <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input type="tel" name="user_phone" required className="w-full px-4 py-2 border rounded-md" />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
          Age
        </label>
        <input type="number" name="age" required className="w-full px-4 py-2 border rounded-md" />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
        condition
        </label>
        <input type="text" name="condition" required className="w-full px-4 py-2 border rounded-md" />
      </div>
    </div>
  );
}

export default PersonalForm;
