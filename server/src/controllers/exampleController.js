// controllers/exampleController.js

// const Example = require('../models/Example');


// Controller functions for handling CRUD operations related to the "example" resource

// Get all examples
exports.getExamples = async (req, res) => {
  try {
    let a = [{
        productName: "Burger One",
        quantity: 5,
        price: 100 * 5,
        pricePerQuantity: 100 * 5,
      },
      {
        productName: "Burger two",
        quantity: 3,
        price: 200,
        pricePerQuantity: 200 * 3,
      },
      {
        productName: "Burger three",
        quantity: 2,
        price: 500,
        pricePerQuantity: 500 * 2,
      },
      {
        productName: "Burger four",
        quantity: 1,
        price: 500 * 1,
        pricePerQuantity: 500 * 1,
      },
      {
        productName: "Burger three",
        quantity: 2,
        price: 500,
        pricePerQuantity: 500 * 2,
      },
      {
        productName: "Burger four",
        quantity: 1,
        price: 500 * 1,
        pricePerQuantity: 500 * 1,
      },
      {
        productName: "Burger three",
        quantity: 2,
        price: 500,
        pricePerQuantity: 500 * 2,
      },
      {
        productName: "Burger four",
        quantity: 1,
        price: 500 * 1,
        pricePerQuantity: 500 * 1,
      },
      {
        productName: "Burger three",
        quantity: 2,
        price: 500,
        pricePerQuantity: 500 * 2,
      },
      {
        productName: "Burger four",
        quantity: 1,
        price: 500 * 1,
        pricePerQuantity: 500 * 1,
      },
      {
        productName: "Burger three",
        quantity: 2,
        price: 500,
        pricePerQuantity: 500 * 2,
      },
      {
        productName: "Burger four",
        quantity: 1,
        price: 500 * 1,
        pricePerQuantity: 500 * 1,
      }]
    res.status(200).json(a);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new example
// exports.createExample = async (req, res) => {
//   const example = new Example(req.body);
//   try {
//     const newExample = await example.save();
//     res.status(201).json(newExample);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get a specific example by ID
// exports.getExampleById = async (req, res) => {
//   try {
//     const example = await Example.findById(req.params.id);
//     if (example) {
//       res.status(200).json(example);
//     } else {
//       res.status(404).json({ message: 'Example not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Update an example by ID
// exports.updateExample = async (req, res) => {
//   try {
//     const example = await Example.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (example) {
//       res.status(200).json(example);
//     } else {
//       res.status(404).json({ message: 'Example not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete an example by ID
// exports.deleteExample = async (req, res) => {
//   try {
//     const example = await Example.findByIdAndDelete(req.params.id);
//     if (example) {
//       res.status(200).json({ message: 'Example deleted' });
//     } else {
//       res.status(404).json({ message: 'Example not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
