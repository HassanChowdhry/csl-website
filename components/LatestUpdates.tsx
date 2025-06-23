export default function LatestUpdates() {
  return (
    <div className="bg-gray-50 py-16" id="updates">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Latest Updates</h2>
        <p className="mb-6 text-gray-700">Follow us on LinkedIn and Instagram for the latest news.</p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/company/dal-csl/" className="text-indigo-600 font-semibold">LinkedIn</a>
          <a href="https://www.instagram.com/dalcsl/" className="text-indigo-600 font-semibold">Instagram</a>
        </div>
      </div>
    </div>
  );
}
