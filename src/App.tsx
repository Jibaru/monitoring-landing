import React from "react";
import {
  Command,
  BarChart3,
  Search,
  Layout,
  ArrowRight,
  Github,
  Terminal,
  Shield,
  Zap,
} from "lucide-react";

const APP_URL = "https://monitoring-ui-one.vercel.app/";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Command className="h-8 w-8" />
              <span className="ml-2 text-xl font-semibold">Monitoring</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#demo" className="text-gray-600 hover:text-gray-900">
                Demo
              </a>
              <a
                href={APP_URL}
                target="_BLANK"
                className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Centralized Logging Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Monitor, analyze, and manage logs from all your applications in one
            place. Get logs insights and never miss critical issues.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={APP_URL}
              target="_BLANK"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg hover:bg-gray-800 flex items-center justify-center"
            >
              Start Monitoring <ArrowRight className="ml-2" />
            </a>
            <a
              href="#demo"
              className="border border-gray-300 px-8 py-4 rounded-lg text-lg hover:bg-gray-50 flex items-center justify-center"
            >
              View Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Simplified place that you need for log management
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8" />}
              title="Logs Monitoring"
              description="Track logs across all your applications in a single place with powerful filtering and search capabilities."
            />
            <FeatureCard
              icon={<Search className="h-8 w-8" />}
              title="Advanced Search"
              description="Find exactly what you're looking for with our powerful search and filtering system."
            />
            <FeatureCard
              icon={<Layout className="h-8 w-8" />}
              title="Aggregation Dashboards"
              description="See aggregated data dashboards to monitor the metrics that matter most to your team."
            />
            <FeatureCard
              icon={<Terminal className="h-8 w-8" />}
              title="Multi-app Support"
              description="Monitor logs from multiple applications in a single, unified interface."
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            See it in action
          </h2>
          <div className="rounded-xl overflow-hidden shadow-2xl border">
            <video
              className="w-full"
              controls={false}
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/minidemo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Command className="h-8 w-8" />
                <span className="ml-2 text-xl font-semibold">Monitoring</span>
              </div>
              <p className="text-gray-400">
                Simplifying log management for modern applications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#features" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-white">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            {/*<div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#docs" className="hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#api" className="hover:text-white">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#status" className="hover:text-white">
                    Status
                  </a>
                </li>
              </ul>
            </div>*/}
            {/*<div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#careers" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>*/}
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
            <p className="text-gray-400">
              &copy; 2025 Monitoring. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-white"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="text-gray-900 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
