import BirthdayCard from '../components/BirthdayCard';

export default function Home() {
  return (
    <div className="min-h-screen">
      <BirthdayCard />
    </div>
  );
}

// Fixed TypeScript import path from @/components/BirthdayCard to relative import
