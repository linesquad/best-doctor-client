function PersonalForm({ formErrors }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-extrabold mb-2 mt-10 text-gray-800">
        Enter Personal Information
      </h2>

      <div>
        <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            formErrors.user_name ? 'border-red-500' : 'border-gray-300'
          }`}
          
        />
        {formErrors.user_name && (
          <p className="text-red-500 text-sm mt-1">{formErrors.user_name}</p>
        )}
      </div>

      <div>
        <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            formErrors.user_email ? 'border-red-500' : 'border-gray-300'
          }`}
          
        />
        {formErrors.user_email && (
          <p className="text-red-500 text-sm mt-1">{formErrors.user_email}</p>
        )}
      </div>

      <div>
        <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          name="user_phone"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            formErrors.user_phone ? 'border-red-500' : 'border-gray-300'
          }`}
          
        />
        {formErrors.user_phone && (
          <p className="text-red-500 text-sm mt-1">{formErrors.user_phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
          Age
        </label>
        <input
          type="number"
          name="age"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            formErrors.age ? 'border-red-500' : 'border-gray-300'
          }`}
          
        />
        {formErrors.age && (
          <p className="text-red-500 text-sm mt-1">{formErrors.age}</p>
        )}
      </div>

      <div>
        <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
          Condition
        </label>
        <input
          type="text"
          name="condition"
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            formErrors.condition ? 'border-red-500' : 'border-gray-300'
          }`}
          
        />
        {formErrors.condition && (
          <p className="text-red-500 text-sm mt-1">{formErrors.condition}</p>
        )}
      </div>
    </div>
  );
}

export default PersonalForm;