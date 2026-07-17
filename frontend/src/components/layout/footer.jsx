import { useState, useEffect } from "react";
import { FaGlobe, FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Footer() {
  const [logoUrl, setLogoUrl] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchLogo();
    fetchFooterData();
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

  const fetchFooterData = async () => {
    try {
      setLoading(true);
      const [footerResponse, socialResponse, contactResponse] = await Promise.all([
        axios.get(`${import.meta.env.VITE_API_URL}/api/footer-settings`),
        axios.get(`${import.meta.env.VITE_API_URL}/api/social-settings`),
        axios.get(`${import.meta.env.VITE_API_URL}/api/contact-settings`)
      ]);
      
      const footerSettings = footerResponse.data?.[0] || {};
      const socialSettings = socialResponse.data?.[0] || {};
      const contactSettings = contactResponse.data?.[0] || {};
      
      // Merge all datasets
      setFooterData({
        ...footerSettings,
        ...contactSettings,
        social_links: [
          { platform: 'facebook', url: socialSettings.facebook },
          { platform: 'instagram', url: socialSettings.instagram },
          { platform: 'linkedin', url: socialSettings.linkedin },
          { platform: 'youtube', url: socialSettings.youtube }
        ].filter(link => link.url) // Only include links that have URLs
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const getSocialIcon = (platform) => {
    const iconMap = {
      'website': FaGlobe,
      'instagram': FaInstagram,
      'facebook': FaFacebook,
      'twitter': FaTwitter,
      'linkedin': FaLinkedin,
      'youtube': FaYoutube,
      'pinterest': FaPinterest,
      'tiktok': FaTiktok,
      'globe': FaGlobe,
      'default': FaGlobe
    };
    return iconMap[platform?.toLowerCase()] || iconMap.default;
  };

  const renderSocialLinks = () => {
    if (footerData?.social_links && Array.isArray(footerData.social_links)) {
      return footerData.social_links.map((social, index) => {
        const IconComponent = getSocialIcon(social.platform);
        return (
          <a
            key={index}
            href={social.url || "#"}
            className="w-10 h-10 rounded-xl bg-[#1f1f1f] border border-[#D7B25B]/10 flex items-center justify-center text-[#C9A96A] hover:bg-[#D7B25B] hover:text-black hover:scale-110 hover:shadow-lg hover:shadow-[#D7B25B]/30 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconComponent size={16} />
          </a>
        );
      });
    }
    return null;
  };

  if (loading) {
    return (
      <footer className="bg-[#0d0d0d] py-16 lg:py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-1/4 mb-4"></div>
            <div className="h-3 bg-gray-700 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="h-3 bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-700 rounded w-3/4"></div>
              <div className="h-3 bg-gray-700 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-black py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative gradient border at top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D7B25B] to-transparent opacity-50"></div>
      {/* Ambient decorative orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#D7B25B]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-[#D7B25B]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16 relative z-10">

        {/* Column 1: Logo + Description */}
        <div className="flex flex-col group">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="w-[140px] h-[70px] object-contain mb-6 transition-all hover:scale-105 duration-300 group-hover:drop-shadow-[0_4px_20px_rgba(215,178,91,0.3)]" />
          ) : (
            <div className="w-[140px] h-[70px] rounded-[50%] border-2 border-[#D7B25B]/40 flex items-center justify-center mb-6 bg-gradient-to-br from-[#D7B25B]/10 to-transparent transition-all hover:border-[#D7B25B]/60 hover:shadow-lg hover:shadow-[#D7B25B]/20">
              <span className="font-['Great_Vibes',cursive] text-[#D7B25B] text-[38px] leading-none -mt-1">
                {footerData?.brand_initial}
              </span>
            </div>
          )}
          <p className="text-gray-400 text-[14px] leading-relaxed">
            {footerData?.description}
          </p>
        </div>

        {/* Column 2: Contact */}
        <div>
          <h4 className="text-[#D7B25B] uppercase tracking-[3px] text-[11px] mb-8 font-semibold relative inline-block">
            Contact
            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#D7B25B]"></span>
          </h4>
          <div className="space-y-5">
            {footerData?.phone && (
              <div className="flex items-start gap-3 group cursor-pointer">
                <span className="text-[#D7B25B] font-medium text-[13px] min-w-[55px] group-hover:text-white transition-colors">Phone:</span>
                <span className="text-gray-400 text-[13px] leading-relaxed group-hover:text-gray-300 transition-colors">{footerData.phone}</span>
              </div>
            )}
            {footerData?.email && (
              <div className="flex items-start gap-3 group cursor-pointer">
                <span className="text-[#D7B25B] font-medium text-[13px] min-w-[55px] group-hover:text-white transition-colors">Email:</span>
                <span className="text-gray-400 text-[13px] leading-relaxed group-hover:text-gray-300 transition-colors">{footerData.email}</span>
              </div>
            )}
            {footerData?.address && (
              <div className="flex items-start gap-3 group cursor-pointer">
                <span className="text-[#D7B25B] font-medium text-[13px] min-w-[55px] group-hover:text-white transition-colors">Address:</span>
                <span className="text-gray-400 text-[13px] leading-relaxed group-hover:text-gray-300 transition-colors">{footerData.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* Column 3: Navigation */}
        <div>
          <h4 className="text-[#D7B25B] uppercase tracking-[3px] text-[11px] mb-8 font-semibold relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#D7B25B]"></span>
          </h4>
          <ul className="space-y-4">
            <li><Link to="/about_us" className="text-gray-300 text-[15px] hover:text-[#D7B25B] transition-all duration-300 transform hover:translate-x-2 hover:tracking-wide inline-block">About us</Link></li>
            <li><Link to="/services" className="text-gray-300 text-[15px] hover:text-[#D7B25B] transition-all duration-300 transform hover:translate-x-2 hover:tracking-wide inline-block">Services</Link></li>
            <li><Link to="/our_gallery" className="text-gray-300 text-[15px] hover:text-[#D7B25B] transition-all duration-300 transform hover:translate-x-2 hover:tracking-wide inline-block">Gallery</Link></li>
            <li><Link to="/projects" className="text-gray-300 text-[15px] hover:text-[#D7B25B] transition-all duration-300 transform hover:translate-x-2 hover:tracking-wide inline-block">Vastu</Link></li>
          </ul>
        </div>

        {/* Column 4: Social + Copyright */}
        <div>
          <h4 className="text-[#D7B25B] uppercase tracking-[3px] text-[11px] mb-8 font-semibold relative inline-block">
            Connect
            <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#D7B25B]"></span>
          </h4>
          <div className="flex gap-4 mb-10">
            {renderSocialLinks()}
          </div>
          <div className="pt-6 border-t border-gray-800/50">
            <p className="text-gray-400 text-[13px] leading-relaxed">
               {footerData?.company_name}.
            </p>
            <p className="text-gray-400 text-[12px] leading-relaxed mt-1 italic">
              {footerData?.tagline}
            </p>
          </div>
        </div>

      </div>

      <div className="mt-10 pt-6 border-t border-gray-800/50 text-center">
        <a
          href="https://www.aarnixtech.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-gray-400 hover:text-[#D7B25B] transition-colors duration-300"
        >
          Developed by Aarnix Tech
        </a>
      </div>
    </footer>
  );
}