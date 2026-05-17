import Product from "../models/productModel.js"

export const createProduct = async (req, res) => {

  try {

    const {
      name,
      category,
      shortDescription,
      fullDescription,
      price,
      image,
    } = req.body

    if (
      !name ||
      !category ||
      !shortDescription ||
      !fullDescription ||
      !price ||
      !image
    ) {

      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      })

    }

    const product = await Product.create({
      name,
      category,
      shortDescription,
      fullDescription,
      price,
      image,
    })

    res.status(201).json({
      success: true,
      data: product,
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    })

  }

}

export const getProducts = async (req, res) => {

  try {

    const products = await Product
      .find()
      .sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      data: products,
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    })

  }

}

export const deleteProduct = async (req, res) => {

  try {

    const product = await Product.findById(
      req.params.id
    )

    if (!product) {

      return res.status(404).json({
        success: false,
        message: "Product not found",
      })

    }

    await product.deleteOne()

    res.status(200).json({
      success: true,
      message: "Product deleted",
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    })

  }

}

export const updateProduct = async (req, res) => {

  try {

    const {
      name,
      category,
      shortDescription,
      fullDescription,
      price,
      image,
    } = req.body

    const product = await Product.findById(
      req.params.id
    )

    if (!product) {

      return res.status(404).json({
        success: false,
        message: "Product not found",
      })

    }

    product.name = name
    product.category = category
    product.shortDescription = shortDescription
    product.fullDescription = fullDescription
    product.price = price
    product.image = image

    await product.save()

    res.status(200).json({
      success: true,
      data: product,
    })

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    })

  }

}