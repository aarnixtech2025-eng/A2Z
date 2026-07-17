import { useState } from "react";
import axios from "axios";
import { FiLock, FiMail, FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ForgotEmail() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Request update, 2: Update email
  const [loading, setLoading] = useState(false);
  const [emailToken, setEmailToken] = useState("");
  const [formData, setFormData] = useState({
    password: "",
    newEmail: "",
    confirmEmail: ""
  });

  const handleRequestUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/forgot-email`, {
        password: formData.password
      });

      setEmailToken(response.data.emailToken);
      setStep(2);
      alert("Email update token generated. Please enter your new email.");
    } catch (error) {
      alert(`Failed: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.newEmail !== formData.confirmEmail) {
      alert("Emails do not match");
      setLoading(false);
      return;
    }

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/update-email`, {
        token: emailToken,
        newEmail: formData.newEmail
      });

      alert("Email updated successfully! Please login with your new email.");
      navigate("/login");
    } catch (error) {
      alert(`Failed: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full">
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition-colors"
        >
          <FiArrowLeft size={20} />
          Back to Dashboard
        </button>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {step === 1 ? "Update Email" : "Enter New Email"}
          </h1>
          <p className="text-gray-600 mb-6">
            {step === 1 
              ? "Enter your password to receive an email update token" 
              : "Enter your new email address"}
          </p>

          {step === 1 ? (
            <form onSubmit={handleRequestUpdate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#D7B25B] to-[#C89A38] text-black font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
              >
                {loading ? "Processing..." : "Verify your mail"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleUpdateEmail} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  New Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={formData.newEmail}
                    onChange={(e) => setFormData({ ...formData, newEmail: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
                    placeholder="Enter new email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm New Email
                </label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    value={formData.confirmEmail}
                    onChange={(e) => setFormData({ ...formData, confirmEmail: e.target.value })}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D7B25B] focus:border-transparent"
                    placeholder="Confirm new email"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-[#D7B25B] to-[#C89A38] text-black font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update Email"}
              </button>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
