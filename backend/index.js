// in this file there will be a basic express node js server with some schemas (users, products) and some importants Api endpiont that we will use in our simple mern ecommerce app 
const port = process.env.PORT || 4000;
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const path = require('path');
require ('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://threshold:threshold@cluster0.opj2c.mongodb.net/e-commerce');

app.get('/', (req, res) => {
    res.send('API IS RUNNING');
});


const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb (
            null, 
            `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
        );
    },
});

const upload = multer({ storage: storage});
app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single("product"), (req, res) => {
    res.json({
      success: 1,
      image_url: `https://threshold-server.onrender.com/images/${req.file.filename}`,
    });
  });


const Product = mongoose.model('Product', {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
      },
      category: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
      available: {
        type: Boolean,
        default: true,
      },
})

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        category: req.body.category,
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
      });
      await product.save();
      res.json({
        success: 1,
        name: req.body.name,
      });
});

app.post('/deletproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({
        succes: 1,
        name: req.body.name,
    });
});

app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    res.send(products);
});

app.get('/api/products/count', async (req, res) => {
    try {
        const totalProducts = await Product.countDocuments({});
        res.json({ total: totalProducts });
    } catch (error) {
        res,status(500).json({ error: 'Server Error'});
    }
});

app.get("/api/admin/products/count-by-category", async (req, res) => {
  try {
    const productsByCategory = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
    ]);
    const categoryCount = {};
    productsByCategory.forEach((product) => {
      categoryCount[product._id] = product.count;
    });
    res.json(categoryCount);
  } catch (error) {
    console.error("Error fetching product count by category:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const Users = mongoose.model("Users", {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  });

app.post("/signup", async (req, res) => {
    let check = await Users.findOne({ email: req.body.email });
    if (check) {
      return res
        .status(400)
        .json({
          success: false,
          errors: "User Already Found With The Same Email Address",
        });
    }
    const user = new Users({
      name: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    await user.save();
    const data = {
      user: {
        id: user.id,
      },
    };
    const authToken = jwt.sign(data, "secret_ecom");
    res.json({ success: true, authToken: authToken });
  });

  app.post("/signin", async (req, res) => {
    try {
      let user = await Users.findOne({ email: req.body.email });
      if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
          const data = {
            user: {
              id: user.id,
            },
          };
          const authToken = jwt.sign(data, "secret_ecom");
          res.json({
            success: true,
            authToken: authToken,
            userId: user.id,
          });
        } else {
          res.status(401).json({ success: false, errors: "Wrong Password" });
        }
      } else {
        res.status(404).json({ success: false, errors: "User Not Found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ success: false, errors: "Server error", message: error.message });
    }
  });

app.listen(port, (error) => {
    if (!error) {
        console.log('Backend Server is Running');
    } else {
        console.log('Error', error);
    }
});
