// app/refund-policy/page.js DOSYASININ İÇERİĞİ

export default function RefundPolicyPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-h-screen pt-[110px]">
      <div className="flex flex-col gap-4  max-w-2xl text-xl mx-auto">
        <h1 className="font-bold text-center text-5xl">Refund Policy</h1>

        <p>
          We have a 7-day return policy, which means you have 7 days after
          receiving your item (the first day of the return window starts the day
          tracking shows delivered status) to request a return. If it is a split
          package order, it will start from the time of the final package
          delivery date and time.
        </p>

        <p>
          To be eligible for a return, your order must be unworn with original
          tags and clear garment packaging with SKU label. We do not accept
          exchanges of any kind. You’ll also need the receipt or proof of
          purchase.
        </p>
      </div>
    </div>
  );
}
