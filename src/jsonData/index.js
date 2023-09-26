export const orderSummary = {
  supplier: {
    title: "Supplier",
    value: "Fresho",
  },
  shippingDate: {
    title: "Delivery date",
    value: "Tue, Sep 27",
  },
  total: {
    title: "Total",
    value: "Rs. 15,028.3",
  },
  category: {
    title: "Category",
    value: ["fruits", "meat"],
    icons: true,
  },
  department: {
    title: "Department",
    value: "Delhivery",
  },
  status: {
    title: "Status",
    value: "Awaiting your approvel",
  },
};

export const orderDetails = {
  supplier: "Fesho",
  shippingDate: "Tue, Sep 27",
  cart: [
    {
      name: "Banana",
      brand: "Robusta",
      price: 38,
      unit: "38 * 1Kg",
      quantity: 12,
      status: [],
      category: "fruit",
      approved: false,
      missing: false,
      urgent: false,
    },
    {
      name: "Apple",
      brand: "Shimla",
      price: 93,
      unit: "93 * 1Kg",
      quantity: 15,
      originalQuantity: 12,
      status: [],
      category: "fruit",
      approved: true,
      missing: false,
      urgent: false,
      reasons: ["Quality is not the same"],
    },
    {
      name: "Chicken Biryani",
      brand: "Behrouz",
      price: 210,
      unit: "210 * 1Kg",
      quantity: 7,
      status: [],
      category: "meat",
      approved: false,
      missing: false,
      urgent: false,
    },
    {
      name: "Pomegranate - Regular",
      brand: "Fresho",
      price: 154,
      originalPrice: 139,
      unit: "154 * 1Kg",
      quantity: 18,
      status: [],
      category: "fruit",
      approved: true,
      missing: false,
      urgent: false,
      reasons: ["Price is not the same"],
    },
  ],
  department: "BigBasket",
  status: "Awaiting your approval",
};

export const getCatalog = (value = "") => {
  let arr = new Array(5).fill("1");
  if (!["fish", "beef", "chicken"].includes(value.toString().toLowerCase())) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([]);
      }, 1000);
    });
  }
  let result = arr.map((key, index) => {
    return {
      uuid: crypto.randomUUID(),
      name: `${value}, Ground free fall, 80% Lean, Fresh ${value}, Ground dish ${
        index + 1
      }`,
      brand: "Enim diam",
      unit: "6 * 1LB",
      price: Math.floor(Math.random() * (15 - 6 + 1)) + 6,
      quantity: 0,
      reasons: [],
    };
  });
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
};
