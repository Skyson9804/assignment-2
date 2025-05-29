import React from "react";

const data = [
  {
    name: "Flatbread",
    price: "Rs 500",
    state: "	Naples, Campania",
    ingredients:
      "Dough, sauce (usually tomato sauce), cheese (typically mozzarella)",

    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/1280px-Pizza-3007395.jpg",
  },
];

const Card = () => {
  return (
    <div className="flex items-center justify-center m-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.slice(0, 10).map((items, index) => (
          <>
            <div
              key={index}
              className="max-w-sm bg-[#a7dece81] shadow-slate-600 p-6 rounded-lg shadow-lg text-center"
            >
              {/* <h1>{index+1}</h1> */}
              <img
                src={items.image}
                alt={items.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h1 className="text-xl font-bold">Name: {items.name}</h1>
              <h2>Price: {items.price}</h2>
              <p>Reason or State: {items.state}</p>
              <p>Main ingredients: {items.ingredients}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Card;
