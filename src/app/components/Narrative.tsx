export default function Narrative() {
  return (
    <section className="px-6 py-32 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="space-y-4">
          <p className="font-serif text-2xl">Take a photo</p>
          <p className="text-sm text-[#8E8E8E]">
            Your outfit, exactly as you'd wear it.
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-serif text-2xl">Get objective feedback</p>
          <p className="text-sm text-[#8E8E8E]">
            No trends. No opinions. Just clarity.
          </p>
        </div>

        <div className="space-y-4">
          <p className="font-serif text-2xl">Leave confident</p>
          <p className="text-sm text-[#8E8E8E]">
            Stop guessing. Start knowing.
          </p>
        </div>
      </div>
    </section>
  );
}
