const User = require("../models/user");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  newUser,
  // userPosts,
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
    console.log(err)
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    console.log(err)
    return res.status(400).json(err);
  }
}

async function newUser(req, res) {
  const newUser = req.body;
  const currentUser = req.body.email;
  try {
    let user = await User.findOneAndUpdate(
      { email: req.body.email },
      { $set: newUser },
      {
        new: true,
      }
    );
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    return res.status(400).json(err);
  }
}

// async function userPosts(req, res) {
//   const id = req.params.id;
//   await Post.find({ profile: id }, function (err, posts) {
//     if (err) return err;
//     return res.json(posts);
//   });
// }

// Helper Functions
function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}
