import jwt from 'jsonwebtoken'
import User from 'model/user/action'



export default (req, res, next) => {
  const header = req.headers.authorization
  let token

  if (header) token = header.split(' ')[1]
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(500).json({ code: -1, msg: 'Invalid token' })
      } else {
        if (User.vertify(decoded)) {
        	next()
        }else{
          res.status(500).json({ code: -1, msg: 'Invalid user & pwd' })
        }
      }
    })
  } else {
    res.status(500).json({ code: -1, msg: 'No token' })
  }
}