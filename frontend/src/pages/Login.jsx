import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Login() {
  const navigate = useNavigate();
  const [logoUrl, setLogoUrl] = useState(null);

  useEffect(() => {
    fetchLogo();
  }, []);

  const fetchLogo = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/logo-settings`);
      if (response.data && response.data.length > 0) {
        const logoData = response.data[0];
        const logoPath = logoData.logo.startsWith('/uploads/')
          ? logoData.logo
          : `/uploads/${logoData.logo}`;
        const fullUrl = `${import.meta.env.VITE_API_URL}${logoPath}`;
        setLogoUrl(fullUrl);
      }
    } catch (error) {
          }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        formData
      );

      localStorage.setItem("token", res.data.token);

      const decoded = jwtDecode(res.data.token);

      localStorage.setItem("role", decoded.role);

      navigate("/admin");
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Invalid Email or Password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-[#0C0C0C]
        via-[#111111]
        to-[#181818]
        px-4
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          w-96
          h-96
          bg-[#D7B25B]/10
          rounded-full
          blur-[120px]
        "
      />

      <div
        className="
          relative
          w-full
          max-w-md
          bg-[#181818]
          border
          border-[#D7B25B]/10
          rounded-[32px]
          overflow-hidden
          shadow-[0_20px_80px_rgba(0,0,0,0.5)]
          backdrop-blur-xl
        "
      >
        {/* Header */}
        <div
          className="
            px-8
            py-10
            text-center
            border-b
            border-[#D7B25B]/10
          "
        >
          <img
            src={logoUrl}
            alt="Tanush Interiors"
            className="
              h-16
              mx-auto
              mb-5
            "
          />

          <h1
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            Admin Login
          </h1>

          <div
            className="
              w-20
              h-1
              bg-[#D7B25B]
              mx-auto
              rounded-full
              mt-4
            "
          />

          <p
            className="
              text-[#E8D19A]
              mt-4
            "
          >
            Welcome Back to Tanush Interiors
          </p>
        </div>

        {/* Form */}
        <div className="p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Email */}
            <div>
              <label
                className="
                  block
                  mb-2
                  text-[#E8D19A]
                  font-medium
                "
              >
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-[#111111]
                  border
                  border-[#D7B25B]/15
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder:text-[#E8D19A]/50
                  outline-none
                  focus:border-[#D7B25B]
                  focus:ring-2
                  focus:ring-[#D7B25B]/20
                  transition-all
                "
              />
            </div>

            {/* Password */}
            <div>
              <label
                className="
                  block
                  mb-2
                  text-[#E8D19A]
                  font-medium
                "
              >
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                required
                className="
                  w-full
                  bg-[#111111]
                  border
                  border-[#D7B25B]/15
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  placeholder:text-[#E8D19A]/50
                  outline-none
                  focus:border-[#D7B25B]
                  focus:ring-2
                  focus:ring-[#D7B25B]/20
                  transition-all
                "
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-3.5
                rounded-xl
                bg-gradient-to-r
                from-[#D7B25B]
                to-[#C89A38]
                text-black
                font-bold
                shadow-[0_8px_25px_rgba(215,178,91,0.25)]
                hover:scale-[1.02]
                transition-all
                duration-300
                disabled:opacity-70
              "
            >
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}