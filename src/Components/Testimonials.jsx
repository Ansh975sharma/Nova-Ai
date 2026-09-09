import { LuUser } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <div className="py-10 px-4">

      {/* Heading */}
      <div className="text-center mb-8">
               <p> <span className="bg-blue-100 rounded-xl px-3 text-blue-500 font-bold">Testimonials</span></p>

        <h1 className="text-3xl font-bold">
          Loved by{" "}
          <span className="text-blue-500">Modern Teams</span>
        </h1>

        <p className="mt-3 text-gray-600">
          See how teams are using Nova to improve productivity, simplify
          their workflows, and get more done.
        </p>
      </div>


      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">

          <div className="flex items-center gap-3">

            <LuUser className="bg-blue-500 text-white rounded-full text-4xl p-2" />

            <div>
              <h2 className="font-bold">Rohan Mehta</h2>
              <p className="text-sm text-gray-600">
                Frontend Developer · TechNova
              </p>
            </div>

          </div>

          <div className="flex text-yellow-500 my-4 gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-gray-600 text-sm leading-6">
            "Nova has completely changed the way our team works.
            The interface is clean, fast and super easy to use.
            We're way more productive now!"
          </p>

        </div>


        {/* Card 2 */}
        <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">

          <div className="flex items-center gap-3">

            <LuUser className="bg-blue-500 text-white rounded-full text-4xl p-2" />

            <div>
              <h2 className="font-bold">Priya Sharma</h2>
              <p className="text-sm text-gray-600">
                Marketing Manager · GrowthLabs
              </p>
            </div>

          </div>

          <div className="flex text-yellow-500 my-4 gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-gray-600 text-sm leading-6">
            "The collaboration features are amazing.
            Our team stays aligned and we get more done
            in less time."
          </p>

        </div>


        {/* Card 3 */}
        <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition">

          <div className="flex items-center gap-3">

            <LuUser className="bg-blue-500 text-white rounded-full text-4xl p-2" />

            <div>
              <h2 className="font-bold">Aman Verma</h2>
              <p className="text-sm text-gray-600">
                Product Manager · PixelWorks
              </p>
            </div>

          </div>

          <div className="flex text-yellow-500 my-4 gap-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="text-gray-600 text-sm leading-6">
            "Nova is the perfect blend of simplicity and power.
            It helps us stay organized and manage everything
            from one place."
          </p>

        </div>

      </div>

    </div>
  );
}

export default Testimonials;