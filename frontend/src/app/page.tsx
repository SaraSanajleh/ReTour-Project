import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="container-fluid p-0">
        <div className="bg-white border rounded-4 p-4">
          <h1 className="h4 mb-2">Plan Your Trip</h1>

          <p className="text-secondary mb-0">
            Your trip-planning form will appear here.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}