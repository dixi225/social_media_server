const  express=require('express')
const app=express()
const helmet=require('helmet')
const authRouter=require('./routers/authRouter')
const postRouter =require('./routers/postRouter')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const userRouter = require('./routers/userRouter')

//middlewares

app.use(express.json())
app.use(helmet())
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173'
}))
app.use('/auth',authRouter)   
app.use('/posts',postRouter)
app.use('/user',userRouter)

module.exports=app