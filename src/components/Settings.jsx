import { FiUser, FiMail, FiImage, FiSave } from "react-icons/fi";
import { getAuth, updateProfile, updateEmail } from "firebase/auth";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const Settings = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;

    // Update profile
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        // Update email separately
        return updateEmail(auth.currentUser, email);
      })
      .then(() => {
        toast.success("Profile Updated Successfully");
        navigate("/user");
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 text-base-content p-6">
      <div className="bg-base-300 shadow-lg rounded-2xl p-8 w-full max-w-md border border-base-400">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Account Settings
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Image URL Input */}
          <div className="flex items-center bg-base-100 border border-base-400 rounded-lg px-3 py-2 focus-within:ring-2 ring-primary transition">
            <FiImage className="text-gray-400 mr-2" />
            <input
              type="text"
              name="image"
              required
              placeholder="Enter image URL"
              className="w-full bg-transparent outline-none text-base-content placeholder:text-base-content/60"
            />
          </div>

          {/* Name Input */}
          <div className="flex items-center bg-base-100 border border-base-400 rounded-lg px-3 py-2 focus-within:ring-2 ring-primary transition">
            <FiUser className="text-gray-400 mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full bg-transparent outline-none text-base-content placeholder:text-base-content/60"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center bg-base-100 border border-base-400 rounded-lg px-3 py-2 focus-within:ring-2 ring-primary transition">
            <FiMail className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full bg-transparent outline-none text-base-content placeholder:text-base-content/60"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary hover:bg-primary-focus rounded-lg font-medium text-primary-content shadow-md transition cursor-pointer"
          >
            <FiSave /> Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
