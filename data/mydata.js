const products = [
    {
      "id": "042",
      "name": "White sneakers",
      "category": "Sneakers",
      "price": 99.99,
      "image": "/images/shoe-white.jpg"
      ,"quantity": 0
    },
    {
      "id": "017",
      "name": "Black hoodie",
      "category": "Hoodie",
      "price": 10.99,
      "image": "/images/hoodie-black.jpg"
      ,"quantity": 0
    },
    {
      "id": "028",
      "name": "Khaki joggers",
      "category": "Pants",
      "price": 45.99,
      "image": "/images/pants-brown-street.jpg"
      ,"quantity": 0
    },
    {
      "id": "003",
      "name": "Pink T-shirt",
      "category": "T-shirt",
      "price": 10.99,
      "image": "/images/t-shirt-pink.jpg"
      ,"quantity": 0
    },
    {
      "id": "008",
      "name": "Brown handbag",
      "category": "Bags",
      "price": 10.99,
      "image": "/images/bag-3.jpg"
      ,"quantity": 0
    },
    {
      "id": "029",
      "name": "Grey pants",
      "category": "Pants",
      "price": 75.99,
      "image": "/images/pants-gery-mens.jpg"
      ,"quantity": 0
    },
    {
      "id": "016",
      "name": "Brown hat",
      "category": "Hats",
      "price": 10.99,
      "image": "/images/hats-5.jpg"
      ,"quantity": 0
    },
    {
      "id": "048",
      "name": "Sunglasses",
      "category": "Sunglasses",
      "price": 50.99,
      "image": "/images/sunglasses-1.jpg"
      ,"quantity": 0
    },
    
    {
      "id": "007",
      "name": "Yellow backpack",
      "category": "Bags",
      "price": 10.99,
      "image": "/images/bag-2.jpg"
      ,"quantity": 0
    },
    {
      "id": "043",
      "name": "White sneakers",
      "category": "Sneakers",
      "price": 129.99,
      "image": "/images/shoes-1.jpg"
      ,"quantity": 0
    },
    {
      "id": "056",
      "name": "Watch",
      "category": "Watches",
      "price": 795.99,
      "image": "/images/watch-4.jpg"
      ,"quantity": 0
    },
    {
      "id": "025",
      "name": "Yellow windbreaker",
      "category": "Jacket",
      "price": 78.99,
      "image": "/images/jacket-windbreaker.jpg"
      ,"quantity": 0
    },
    {
      "id": "001",
      "name": "Black T-shirt",
      "category": "T-shirt",
      "price": 10.99,
      "image": "/images/t-shirt-black.jpg"
      ,"quantity": 0
    },
    {
      "id": "035",
      "name": "Pocadot scarf",
      "category": "Scarfs",
      "price": 25.99,
      "image": "/images/scarf-4.jpg"
      ,"quantity": 0
    },
    {
      "id": "057",
      "name": "Watch",
      "category": "Watches",
      "price": 695.99,
      "image": "/images/watch-5.jpg"
      ,"quantity": 0
    },
    {
      "id": "004",
      "name": "White T-shirt",
      "category": "T-shirt",
      "price": 10.99,
      "image": "/images/t-shirt-white.jpg"
      ,"quantity": 0
    },
    {
      "id": "044",
      "name": "Green sneakers",
      "category": "Sneakers",
      "price": 149.99,
      "image": "/images/shoes-2.jpg"
      ,"quantity": 0
    },
    {
      "id": "026",
      "name": "Yellow overhead jacket",
      "category": "Jacket",
      "price": 80.99,
      "image": "/images/jacket-yellow.jpg"
      ,"quantity": 0
    },
    {
      "id": "018",
      "name": "Grey hoodie",
      "category": "Hoodie",
      "price": 23.99,
      "image": "/images/hoodie-grey-punk.jpg"
      ,"quantity": 0
    },
    {
      "id": "049",
      "name": "Sunglasses",
      "category": "Sunglasses",
      "price": 50.99,
      "image": "/images/sunglasses-2.jpg"
      ,"quantity": 0
    },
    {
      "id": "027",
      "name": "Women's jeans",
      "category": "Pants",
      "price": 50.99,
      "image": "/images/pants-blue-womens.jpg"
      ,"quantity": 0
    },
    {
      "id": "015",
      "name": "Red and white mesh cap",
      "category": "Hats",
      "price": 10.99,
      "image": "/images/hats-4.jpg"
      ,"quantity": 0
    },
    {
      "id": "041",
      "name": "Women's boots",
      "category": "Dress-shoes",
      "price": 299.99,
      "image": "/images/dress-shoes-5.jpg"
      ,"quantity": 0
    },
    {
      "id": "009",
      "name": "White and black bag",
      "category": "Bags",
      "price": 10.99,
      "image": "/images/bag-4.jpg"
      ,"quantity": 0
    },
    {
      "id": "045",
      "name": "Black skate shoes",
      "category": "Sneakers",
      "price": 99.99,
      "image": "/images/shoes-nike-skate.jpg"
      ,"quantity": 0
    },
    {
      "id": "014",
      "name": "Red baseball cap",
      "category": "Hats",
      "price": 10.99,
      "image": "/images/hats-3.jpg"
      ,"quantity": 0
    },
    {
      "id": "019",
      "name": "Sports hoodie",
      "category": "Hoodie",
      "price": 33.99,
      "image": "/images/hoodie-sports.jpg"
      ,"quantity": 0
    },
    {
      "id": "030",
      "name": "Women's grey pants",
      "category": "Pants",
      "price": 75.99,
      "image": "/images/pants-grey.jpg"
      ,"quantity": 0
    },
    {
      "id": "050",
      "name": "Sunglasses",
      "category": "Sunglasses",
      "price": 50.99,
      "image": "/images/sunglasses-3.jpg"
      ,"quantity": 0
    },
    {
      "id": "023",
      "name": "Jeans jacket",
      "category": "Jacket",
      "price": 69.99,
      "image": "/images/jacket-jean.jpg"
      ,"quantity": 0
    },
    {
      "id": "040",
      "name": "Red heels",
      "category": "Dress-shoes",
      "price": 499.99,
      "image": "/images/dress-shoes-4.jpg"
      ,"quantity": 0
    },
    {
      "id": "013",
      "name": "Beret multiple colors ",
      "category": "Hats",
      "price": 10.99,
      "image": "/images/hats-2.jpg"
      ,"quantity": 0
    },
    {
      "id": "002",
      "name": "Blue T-shirt",
      "category": "T-shirt",
      "price": 15.99,
      "image": "/images/t-shirt-blue.jpg"
      ,"quantity": 0
    },
    {
      "id": "006",
      "name": "Brown Bag",
      "category": "Bags",
      "price": 10.99,
      "image": "/images/bag-1.jpg"
      ,"quantity": 0
    },
    {
      "id": "051",
      "name": "Sunglasses",
      "category": "Sunglasses",
      "price": 50.99,
      "image": "/images/sunglasses-4.jpg"
      ,"quantity": 0
    },
    {
      "id": "031",
      "name": "Men's jeans",
      "category": "Pants",
      "price": 75.99,
      "image": "/images/pants-jeans.jpg"
      ,"quantity": 0
    },
    {
      "id": "034",
      "name": "Red scarf",
      "category": "Scarfs",
      "price": 29.99,
      "image": "/images/scarf-3.jpg"
      ,"quantity": 0
    },
    {
      "id": "039",
      "name": "Brown dress shoes",
      "category": "Dress-shoes",
      "price": 110.99,
      "image": "/images/dress-shoes-3.jpg"
      ,"quantity": 0
    },
    {
      "id": "053",
      "name": "Watch",
      "category": "Watches",
      "price": 395.99,
      "image": "/images/watch-1.jpg"
      ,"quantity": 0
    },
    {
      "id": "022",
      "name": "Brown jacket",
      "category": "Jacket",
      "price": 80.99,
      "image": "/images/jacket-brown.jpg"
      ,"quantity": 0
    },
    {
      "id": "020",
      "name": "White hoodie",
      "category": "Hoodie",
      "price": 20.99,
      "image": "/images/hoodie-white.jpg"
      ,"quantity": 0
    },
    {
      "id": "052",
      "name": "Sunglasses",
      "category": "Sunglasses",
      "price": 50.99,
      "image": "/images/sunglasses-5.jpg"
      ,"quantity": 0
    },
    {
      "id": "032",
      "name": "Colorful scarf",
      "category": "Scarfs",
      "price": 35.99,
      "image": "/images/scarf-1.jpg"
      ,"quantity": 0
    },
    {
      "id": "038",
      "name": "White heels",
      "category": "Dress-shoes",
      "price": 299.99,
      "image": "/images/dress-shoes-2.jpg"
      ,"quantity": 0
    },
    {
      "id": "005",
      "name": "Yellow T-shirt",
      "category": "T-shirt",
      "price": 10.99,
      "image": "/images/t-shirt-yellow.jpg"
      ,"quantity": 0
    },
    {
      "id": "011",
      "name": "Black tote bag",
      "category": "Bags",
      "price": 10.99,
      "image": "/images/bag-6.jpg"
      ,"quantity": 0
    },
    {
      "id": "054",
      "name": "Watch",
      "category": "Watches",
      "price": 1299.99,
      "image": "/images/watch-2.jpg"
      ,"quantity": 0
    },
    {
      "id": "047",
      "name": "White women's shoes",
      "category": "Sneakers",
      "price": 129.99,
      "image": "/images/shoes-white.jpg"
      ,"quantity": 0
    },
    {
      "id": "033",
      "name": "Grey scarf",
      "category": "Scarfs",
      "price": 25.99,
      "image": "/images/scarf-2.jpg"
      ,"quantity": 0
    },
    {
      "id": "021",
      "name": "Yellow hoodie",
      "category": "Hoodie",
      "price": 33.99,
      "image": "/images/hoodie-yellow.jpg"
      ,"quantity": 0
    },
    {
      "id": "037",
      "name": "Blue dress shoes",
      "category": "Dress-shoes",
      "price": 110.99,
      "image": "/images/dress-shoes-1.jpg"
      ,"quantity": 0
    },
    {
      "id": "012",
      "name": "Olive buckethat",
      "category": "Hats",
      "price": 10.99,
      "image": "/images/hats-1.jpg"
      ,"quantity": 0
    },
    {
      "id": "024",
      "name": "Leather jacket",
      "category": "Jacket",
      "price": 80.99,
      "image": "/images/jacket-leather.jpg"
      ,"quantity": 0
    },
    {
      "id": "046",
      "name": "Yellow shoes",
      "category": "Sneakers",
      "price": 89.99,
      "image": "/images/shoes-vans.jpg"
      ,"quantity": 0
    },
    {
      "id": "055",
      "name": "Watch",
      "category": "Watches",
      "price": 3995.99,
      "image": "/images/watch-3.jpg"
      ,"quantity": 0
    },
    {
      "id": "010",
      "name": "Dark green backpack",
      "category": "Bags",
      "price": 10.99,
      "image": "/images/bag-5.jpg"
      ,"quantity": 0
    },
    {
      "id": "036",
      "name": "Women's scarf",
      "category": "Scarfs",
      "price": 55.99,
      "image": "/images/scarf-5.jpg"
      ,"quantity": 0
    }
  ]

module.exports = products