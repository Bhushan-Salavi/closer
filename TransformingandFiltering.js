//TransformingandFiltering.js
function processProducts(products) {
    const productNames = products.map(function (product) {
      return product.name;
    });
  
    products.forEach(function (product) {
      let priceMessage;
      if (product.price > 50) {
        priceMessage = "above $50";
      } else {
        priceMessage = "below $50";
      }
      console.log(product.name + " is " + priceMessage);
    });
    return productNames;
  }
  const input = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 20 }
  ];
  
  const productNames = processProducts(input);
  
  