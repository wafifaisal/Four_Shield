"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Building, ExternalLink, FileText } from "lucide-react";
import Image from "next/image";

interface LinkItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

const ForShieldLawFirm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLogoIntro, setShowLogoIntro] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);

  const links: LinkItem[] = [
    {
      id: "1",
      title: "Whatsapp",
      description: "(+62) SARJITO, S.H., S.E., MBA., M.Kn",
      icon: <Phone className="w-6 h-6" />,
      href: "https://wa.me/62811995443?text=Halo%2C%20saya%20ingin%20konsultasi%20hukum.",
      color: "from-rose-400 to-pink-500",
    },
    {
      id: "2",
      title: "Curriculum Vitae",
      description: "Discover credentials and legal practice background.",
      icon: <FileText className="w-6 h-6" />,
      href: "/CV.pdf",
      color: "from-indigo-400 to-purple-500",
    },
    {
      id: "3",
      title: "Head Office",
      description: "Main headquarters for strategic and legal operations.",
      icon: <Building className="w-6 h-6" />,
      href: "https://www.google.com/maps/search/?api=1&query=Jl.Bend.Jatiluhur+No.18",
      color: "from-blue-400 to-indigo-500",
    },
    {
      id: "4",
      title: "Operational Office",
      description:
        "Regional branches ensuring effective client service delivery.",
      icon: <MapPin className="w-6 h-6" />,
      href: "https://www.google.com/maps/search/?api=1&query=SOHO+Podomoro+City",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  useEffect(() => {
    setMounted(true);

    // Loading phase
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setShowLogoIntro(true);
    }, 2500);

    // Logo intro phase
    const logoTimer = setTimeout(() => {
      setShowLogoIntro(false);
      setShowContent(true);
    }, 5500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br to-sky-500 via-blue-500 from-cyan-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-3 h-3 bg-sky-300/40 rounded-full animate-bounce delay-0" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-blue-300/50 rounded-full animate-bounce delay-1000" />
        <div className="absolute bottom-32 left-16 w-2.5 h-2.5 bg-cyan-300/45 rounded-full animate-bounce delay-2000" />
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-sky-400/35 rounded-full animate-bounce delay-500" />

        {/* Floating Shapes */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-sky-200/20 to-blue-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-cyan-200/15 to-sky-200/15 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100">
          <div className="text-center">
            <div className="relative mb-8">
              <div className="w-20 h-20 border-4 border-sky-200 border-t-sky-500 rounded-full animate-spin mx-auto" />
              <div
                className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-blue-400 rounded-full animate-spin animate-reverse mx-auto"
                style={{ animationDuration: "3s" }}
              />
              <div
                className="absolute inset-2 w-16 h-16 border-2 border-cyan-200 border-b-cyan-400 rounded-full animate-spin mx-auto"
                style={{ animationDuration: "2s" }}
              />
            </div>
            <p className="text-sky-600 text-lg font-medium animate-pulse">
              Loading...
            </p>
          </div>
        </div>
      )}

      {/* Logo Introduction Screen */}
      {showLogoIntro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white to-sky-50">
          <div className="text-center">
            {/* Logo Container */}
            <div className="relative mb-8">
              {/* PNG Logo Placeholder - Replace with actual logo */}
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-sky-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl transform animate-scale-in">
                <Image
                  src="logo.png"
                  alt="For Shield Law Firm"
                  className="w-28 h-28 rounded-3xl"
                />
              </div>

              {/* Animated Ring Around Logo */}
              <div className="absolute inset-0 w-32 h-32 border-4 border-sky-300/50 rounded-3xl animate-pulse mx-auto" />
            </div>

            {/* Sliding Text Animation */}
            <div className="overflow-hidden">
              <h1 className="text-6xl font-black text-transparent bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 bg-clip-text animate-slide-in-right mb-2">
                FOR SHIELD
              </h1>
            </div>
            <div className="overflow-hidden delay-500">
              <h2 className="text-2xl font-bold text-sky-700 animate-slide-in-left tracking-wider">
                ATTORNEY AT LAW
              </h2>
            </div>

            {/* Underline Animation */}
            <div className="w-48 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mt-6 animate-expand-width" />
          </div>
        </div>
      )}

      {/* Main Content */}
      {showContent && (
        <div className="relative z-10 animate-fade-in-up">
          {/* Top Logo Bar */}
          <div className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-lg border-b border-sky-200/50 shadow-sm">
            <div className="flex items-center justify-center py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Image
                    src="logo.png"
                    alt="For Shield Law Firm"
                    className="w-10 h-10 rounded-xl"
                  />
                </div>
                <div>
                  <h1 className="text-sky-700 font-bold text-lg">FOR SHIELD</h1>
                  <p className="text-sky-600 text-xs font-medium">LAW FIRM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8 max-w-md pt-24">
            {/* Profile Section */}
            <div className="text-center mb-10">
              <div className="relative inline-block mb-8">
                <div className="w-36 h-36 mx-auto rounded-3xl bg-white/80 backdrop-blur-xl border border-sky-200 flex items-center justify-center shadow-xl">
                  <div className="w-24 h-24 bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Image
                      src="logo.png"
                      alt="For Shield Law Firm"
                      className="w-28 h-28 rounded-2xl"
                    />{" "}
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-white shadow-lg">
                  <div className="w-full h-full rounded-full bg-green-400 animate-ping opacity-75" />
                </div>
              </div>

              <h1 className="text-4xl font-black text-transparent bg-gradient-to-r from-sky-800 via-blue-900 to-cyan-600 bg-clip-text mb-3">
                FOR SHIELD
              </h1>
              <h2 className="text-xl font-bold text-sky-700 mb-4">LAW FIRM</h2>
              <p className="text-white text-base max-w-sm mx-auto leading-relaxed">
                For Shield Law Firm is a legal firm commited to protecting the
                rights and inter
              </p>
            </div>

            {/* Links Section */}
            <div className="space-y-4 mb-8">
              {links.map((link, index) => (
                <div
                  key={link.id}
                  className="animate-fade-in-up opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block w-full p-5 bg-white/70 backdrop-blur-lg rounded-2xl border border-sky-200/50 shadow-lg hover:shadow-xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                        >
                          <div className="text-white">{link.icon}</div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-800 text-lg group-hover:text-sky-700 transition-colors">
                            {link.title}
                          </h3>
                          <p className="text-slate-600 text-sm group-hover:text-sky-600 transition-colors">
                            {link.description}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-sky-500 group-hover:scale-110 transition-all duration-300" />
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="text-center text-slate-600 text-sm">
              <p className="mb-2 font-semibold">© 2024 For Shield Law Firm</p>
              <p className="text-slate-200">Licensed in Indonesia</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        @keyframes scale-in {
          0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(-90deg);
            opacity: 0.8;
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes expand-width {
          0% {
            width: 0;
          }
          100% {
            width: 12rem;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-reverse {
          animation-direction: reverse;
        }

        .animate-scale-in {
          animation: scale-in 1.5s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.5s both;
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out 1s both;
        }

        .animate-expand-width {
          animation: expand-width 1s ease-out 1.5s both;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ForShieldLawFirm;
