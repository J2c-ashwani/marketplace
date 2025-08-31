// app/page.tsx
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 bg-white">
        <h1 className="text-4xl md:text-6xl font-extrabold text-brand-primary">
          Your Journey to Wellness Starts Here
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Connect with India's top certified health professionals. Personalized guidance, online consultations, and trusted expertise.
        </p>
        <div className="mt-8">
          <Button variant="accent" size="lg">Find a Professional</Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-brand-neutral">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <h3 className="text-xl font-semibold text-brand-secondary">Gym Trainers</h3>
              <p className="mt-2 text-gray-500">Achieve your fitness goals with expert trainers.</p>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-semibold text-brand-secondary">Yoga Instructors</h3>
              <p className="mt-2 text-gray-500">Find balance and peace with certified yoga gurus.</p>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-semibold text-brand-secondary">Dieticians</h3>
              <p className="mt-2 text-gray-500">Get personalized nutrition plans for a healthier you.</p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works, Testimonials, etc. */}
    </>
  );
}