const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

stripe.products
  .create({
    name: "Registry Donation",
    description: "A specified $ amount to be gifted to the reciever.",
  })
  .then((product) => {
    stripe.prices
      .create({
        unit_amount: 1200,
        currency: "usd",
        recurring: {
          interval: "once",
        },
        product: product.id,
      })
      .then((price) => {
        console.log("Success! Here is your verification code: " + product.id);
        console.log("Success! Here is your donation amount: " + price.id);
      });
  });
