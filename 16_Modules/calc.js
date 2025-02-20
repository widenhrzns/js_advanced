export function add(first, second) {
  return first + second;
}

export function sub(first, second) {
  return first - second;
}
async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  return response.json();
}

export const res = await getProducts();
