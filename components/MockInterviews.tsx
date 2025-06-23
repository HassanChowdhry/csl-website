export default function MockInterviews() {
  return (
    <div className="bg-white py-16" id="mock-interviews">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Mock Interviews</h2>
        <p className="mb-8 text-gray-700">
          We conduct mock technical, behavioural and system design interviews. Book a slot with us!
        </p>
        <div className="w-full h-96">
          <iframe
            src="https://calendly.com"
            className="w-full h-full border-0"
            title="Calendly"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
