// components/layout/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand / Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-brand-primary">
              FitIndia
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              Your fitness, our mission.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/professionals/gym-trainers" className="text-gray-600 hover:text-brand-primary text-sm">
              Gym Trainers
            </Link>
            <Link href="/professionals/yoga-instructors" className="text-gray-600 hover:text-brand-primary text-sm">
              Yoga Instructors
            </Link>
            <Link href="/professionals/dieticians" className="text-gray-600 hover:text-brand-primary text-sm">
              Dieticians
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-brand-primary text-sm">
              Blog
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} FitIndia. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
