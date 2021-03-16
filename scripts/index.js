// global price consts
const hdPrice = 3.25;
const ffPrice = 2.0;
const sPrice = 1.5;

// computations
const computeSubtotal = (hotDogs, frenchFries, sodas) => {
  return hdPrice * hotDogs + ffPrice * frenchFries + sPrice * sodas;
};

const computeDiscount = (subtotal) => {
  return subtotal >= 20 ? subtotal * 0.1 : 0;
};

const computeTax = (subtotal, discount) => {
  return (subtotal - discount) * 0.0625;
};

const computeTotal = (subtotal, discount, tax) => {
  return subtotal - discount + tax;
};

const buildOrderSummary = (
  hotDogs,
  frenchFries,
  sodas,
  subtotal,
  discount,
  tax,
  total
) => {
  return ` You ordered:\n  - ${hotDogs} hot dog(s)\n  - ${frenchFries} french fries\n \
  - ${sodas} soda(s)\n\n  Subtotal: $${subtotal}\n  Discount: $${discount}\n\
  Tax: $${tax}\n\n  TOTAL: $${total}`;
};

document.querySelector("#order-form").addEventListener("submit", (e) => {
  // break input apart
  let hotDogs = parseInt(document.querySelector("#hotdogs-num").value);
  let frenchFries = parseInt(document.querySelector("#frenchfries-num").value);
  let sodas = parseInt(document.querySelector("#sodas-num").value);

  // process order
  let subtotal = computeSubtotal(hotDogs, frenchFries, sodas);
  let discount = computeDiscount(subtotal);
  let tax = computeTax(subtotal, discount);
  let total = computeTotal(subtotal, discount, tax);

  // summarize order and report
  let orderSummary = buildOrderSummary(
    hotDogs,
    frenchFries,
    sodas,
    subtotal.toFixed(2),
    discount.toFixed(2),
    tax.toFixed(2),
    total.toFixed(2)
  );

  alert(orderSummary);
});
