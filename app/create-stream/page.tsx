import React from "react";

const page = () => {
  return (
    <div className="center-container bg-[#F2F2F2] rounded-xl ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mx-auto px-14 py-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name of stream</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-[#C2C2C2] rounded-[8px] pl-4 py-1 outline-none"
              placeholder="text here"
            />
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-1">
            <label htmlFor="link">Stream embed link</label>
            <input
              type="text"
              id="link"
              name="link"
              required
              className="border border-[#C2C2C2] rounded-[8px] pl-4 py-1 outline-none"
              placeholder="link here"
            />
          </div>

          {/* 3 */}
          <div className="flex  gap-8">
            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="Date">Stream Date</label>
              <input
                type="text"
                id="Date"
                name="Date"
                required
                className="border border-[#C2C2C2] rounded-[8px] pl-4 py-1 outline-none w-full"
              />
            </div>

            <div className="flex flex-1 flex-col gap-1">
              <label htmlFor="Time">Stream Time</label>
              <input
                type="text"
                id="Time"
                name="Time"
                required
                className="border border-[#C2C2C2] rounded-[8px] pl-4 py-1 outline-none w-full"
              />
            </div>
          </div>
          {/* 4 */}

          <div className="flex flex-col gap-1">
            <label htmlFor="description">Description</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Create your own Discover , collect and
              sell them too ?"
              className="border border-[#C2C2C2] rounded-[8px] pl-4 py-1 outline-none w-full"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-x-4 w-full">
            {/* Token */}
            <div className="flex flex-col gap-1 w-full">
              <p>Token</p>
              <select className="border border-[#C2C2C2] rounded-[8px] pl-4 py-1 outline-none text-[#737791] w-full">
                <option value="ether">Ether</option>
                <option value="matic">Matic</option>
                <option value="usdc">USDC</option>
                <option value="shiba">Shiba</option>
                <option value="luna">Luna</option>
                <option value="solana">Solana</option>
              </select>
            </div>
            {/* Blockchain */}
            <div className="flex flex-col gap-1 w-full">
              <p>Blockchain</p>
              <select className="border border-[#C2C2C2] rounded-[8px] pl-4 py-1 outline-none text-[#737791] w-full">
                <option value="polygon">Polygon</option>
                <option value="ethereum">Ethereum</option>
                <option value="solana">Solana</option>
                <option value="bitcoin">Bitcoin</option>
                <option value="solana">Solana</option>
                <option value="solana">Solana</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="rewards">Potential Rewards</label>
            <input
              type="text"
              id="rewards"
              name="rewards"
              required
              className="border border-[#C2C2C2] rounded-[8px] pl-4 py-1 outline-none"
            />
          </div>

          {/* 2 */}
          <div className="flex flex-col gap-1">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              required
              className="border border-[#C2C2C2] rounded-[8px] pl-4 py-1 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

const Input = () => {};
