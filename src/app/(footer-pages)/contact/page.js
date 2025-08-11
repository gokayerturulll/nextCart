export default function ContactPage() {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 max-h-screen  pt-[110px]">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          nextCart
        </h1>

        <div className="space-y-5 text-lg text-gray-700">
          <p>
            <span className="font-semibold text-gray-900">Store Name: </span>
            nextCart
          </p>

          <p>
            <span className="font-semibold text-gray-900">Phone Number:</span>

            <span className="ml-2 hover:underline hover:text-gray-900">
              +1 111-111-11-11
            </span>
          </p>

          <p>
            <span className="font-semibold text-gray-900">Email:</span>

            <span className="ml-2 text-blue-600 hover:underline">
              info@nextcart.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
