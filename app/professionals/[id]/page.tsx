// app/professionals/profile/[id]/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/Badge'; // Assume you created this component

// This is a server component, so you can fetch data directly.
// In a real app, this would fetch from your database.
async function getProfessionalData(id: string) {
  // MOCK DATA
  return {
    id,
    name: 'Dr. Anjali Sharma',
    type: 'Dietician',
    imageUrl: '/path/to/profile-image.jpg', // Placeholder
    isVerified: true,
    location: 'Ahmedabad, Gujarat',
    experience: '12+ Years',
    expertise: ['Weight Management', 'PCOS Diet', 'Diabetic Nutrition', 'Sports Nutrition'],
    consultationFee: 1500,
    about: 'Dr. Anjali Sharma is a renowned dietician with over a decade of experience in clinical nutrition...',
    rating: 4.9,
    reviewCount: 128,
  };
}

// Dynamic SEO Metadata
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const professional = await getProfessionalData(params.id);
  return {
    title: `${professional.name} - ${professional.type} in ${professional.location}`,
    description: `Book an online consultation with ${professional.name}. Specializes in ${professional.expertise.join(', ')}.`,
    openGraph: {
        images: [professional.imageUrl],
    }
  };
}


export default async function ProfessionalProfilePage({ params }: { params: { id: string } }) {
  const professional = await getProfessionalData(params.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <div className="flex flex-col items-center">
              <Image
                src={professional.imageUrl}
                alt={professional.name}
                width={150}
                height={150}
                className="rounded-full border-4 border-brand-primary"
              />
              <h1 className="text-2xl font-bold mt-4">{professional.name}</h1>
              <p className="text-gray-600">{professional.type}</p>
              {professional.isVerified && <Badge className="mt-2 bg-blue-100 text-brand-secondary">Verified Professional</Badge>}
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>{professional.location}</p>
                <p>{professional.experience} of experience</p>
                <p>⭐ {professional.rating} ({professional.reviewCount} reviews)</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Details & Booking */}
        <div className="lg:col-span-2">
          <Card>
            <h2 className="text-xl font-semibold mb-4">About {professional.name}</h2>
            <p className="text-gray-600 leading-relaxed">{professional.about}</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {professional.expertise.map(skill => <Badge key={skill}>{skill}</Badge>)}
            </div>
            
            <div className="mt-8 p-4 bg-brand-neutral rounded-lg flex items-center justify-between">
              <div>
                <p className="text-gray-600">Consultation Fee</p>
                <p className="text-2xl font-bold text-brand-primary">₹{professional.consultationFee}</p>
              </div>
              <Button variant="accent" size="lg">Book Consultation</Button>
            </div>
          </Card>
          
          {/* Reviews Section would go here */}
        </div>
      </div>
    </div>
  );
}