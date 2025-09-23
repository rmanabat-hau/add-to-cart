const CheckoutSection = () => {
  return (
    <div className="text-white flex flex-col m-1 space-y-2">
      <div className="text-xl font-semibold">Cart (0 items)</div>
      <div className="pt-4">
        <input
          className="w-full bg-gray-500 rounded border p-2"
          placeholder="Enter voucher code"
        />
      </div>
      <div className=" flex w-full gap-2">
        <button className="bg-blue-500 w-1/2 font-bold">APPLY VOUCHER</button>
        <button className="bg-gray-500 w-1/2 font-bold">CLEAR VOUCHER</button>
      </div>
      <div className="text-3xl font-semibold py-3 flex justify-between items-center ">
        <div>Total: $0.00</div>
        <button className="text-xl bg-blue-500 w-1/2 font-bold">BUY</button>
      </div>
    </div>
  );
};

export default CheckoutSection;
