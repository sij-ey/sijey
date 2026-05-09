import React from "react";

function Experience() {
  return (
    <section className="p-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-2xl font-bold text-center">Experience</h2>

      <div className="max-w-2xl mx-auto mt-6">
        <h3 className="font-bold">
          Independent Electoral and Boundaries Commission (IEBC)
        </h3>
        <p className="italic">Polling Clerk / Counting Clerk (Aug 2022)</p>

        <ul className="list-disc ml-5 mt-3">
          <li>Processed over 400 voters with 99% accuracy using KIEMS system</li>
          <li>Reduced voter wait time by 25% through efficient flow management</li>
          <li>Maintained 100% accuracy in ballot sorting and counting</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;