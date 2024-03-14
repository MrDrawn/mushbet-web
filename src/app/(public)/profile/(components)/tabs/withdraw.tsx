export function WithdrawTab() {
  return (
    <div className="bg-[#27273D] p-[25px] rounded-[4px]">
      <div className="relative overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-[15px] font-medium text-white">
            <tr>
              <th scope="col" className="pl-4 py-5">
                Type
              </th>
              <th scope="col" className="px-6 py-5">
                Bonus
              </th>
              <th scope="col" className="px-6 py-5">
                Coins
              </th>
              <th scope="col" className="px-6 py-5">
                Email/Address
              </th>
              <th scope="col" className="px-6 py-5">
                Transactions
              </th>
              <th scope="col" className="px-6 py-5">
                Date
              </th>
              <th scope="col" className="px-6 py-5">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-[#212134]">
              <th
                scope="row"
                className="pl-4 py-4 font-medium whitespace-nowrap text-white rounded-l-[4px]"
              >
                PayPal
              </th>
              <td className="px-6 py-4 text-white">15%</td>
              <td className="px-6 py-4 text-white">16,767</td>
              <td className="px-6 py-4 text-white">email@gmail.com</td>
              <td className="px-6 py-4 text-white">-</td>
              <td className="px-6 py-4 text-white">06/06/2023</td>
              <td className="px-6 py-4 rounded-r-[4px] text-white">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
