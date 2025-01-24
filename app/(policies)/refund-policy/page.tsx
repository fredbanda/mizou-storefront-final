const RefundPolicy = () => {
  return (
    <div className="flex flex-col gap-6 p-6 text-left max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Refund Policy</h1>

      <p className="text-base leading-relaxed">
        We have a 7-day return policy, which means you have 7 days after receiving your item to request a return. We do not offer refunds unless the item is defective. This is solely at Mizou&apos;s discretion.
      </p>

      <div className="bg-yellow-100 p-4 border-l-4 border-yellow-500">
        <h2 className="font-semibold">PLEASE NOTE:</h2>
        <p className="mt-2 text-sm leading-relaxed">
          To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You&apos;ll also need the receipt or proof of purchase.
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          To begin the return process, you can contact us at <a href="mailto:mizoujewelry@gmail.com" className="text-blue-600 underline">mizoujewelry@gmail.com</a>. Please note that returns will need to be sent to the following address:
        </p>
      </div>

      <p className="text-base leading-relaxed">
        If your return is accepted, we&apos;ll send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
      </p>

      <div className="bg-red-100 p-4 border-l-4 border-red-500">
        <h2 className="font-semibold">Damages and Issues:</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or if you receive the wrong item so that we can evaluate the issue and make it right.
        </p>
      </div>

      <div className="bg-blue-100 p-4 border-l-4 border-blue-500">
        <h2 className="font-semibold">Jewelry Care:</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Please handle with love and care. Like all delicate things, care must be given to ensure longer wear, and Mizou will not be held responsible for the maintenance of your pieces. Please read over our care guide before use.
        </p>
        <p className="mt-2 text-sm leading-relaxed">The general rule is that costume jewelry should be put on last and taken off first. Here are important tips to remember:</p>
        <ul className="list-disc list-inside mt-2 text-sm">
          <li>Keep jewelry away from water, lotion, perfume, chemicals, soap, humidity, and jewelry cleaners.</li>
          <li>When not worn, keep jewelry in your Mizou storage and travel bag, with the air squeezed out to prevent oxidization.</li>
          <li>Remove jewelry when exercising or playing any sports.</li>
          <li>Clean with products made especially for costume jewelry.</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 border-l-4 border-gray-500">
        <h2 className="font-semibold">Exceptions / Non-returnable Items:</h2>
        <p className="mt-2 text-sm leading-relaxed">
          Certain types of items cannot be returned, such as custom products (e.g., special orders or personalized items) and personal care goods (e.g., beauty products). Please get in touch if you have questions or concerns about your specific item.
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          Unfortunately, we cannot accept returns on sale items or gift cards.
        </p>
      </div>

      <div className="bg-green-100 p-4 border-l-4 border-green-500">
        <h2 className="font-semibold">Exchanges:</h2>
        <p className="mt-2 text-sm leading-relaxed">
          The fastest way to ensure you get what you want is to return the item you have. Once the return is accepted, make a separate purchase for the new item.
        </p>
      </div>

      <div className="bg-purple-100 p-4 border-l-4 border-purple-500">
        <h2 className="font-semibold">Refunds:</h2>
        <p className="mt-2 text-sm leading-relaxed">
          We will notify you once we’ve received and inspected your return and let you know if the refund was approved. If approved, you’ll be automatically refunded on your original payment method within 10 business days. Please remember it can take some time for your bank or credit card company to process and post the refund too.
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          If more than 15 business days have passed since we&apos;ve approved your return, please contact us at <a href="mailto:mizoujewelry@gmail.com" className="text-blue-600 underline">mizoujewelry@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
