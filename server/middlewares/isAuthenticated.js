import jwt from "jsonwebtoken";

const isAuthenticated = async(req,res,next)=>{
    try {
        const token = req.cookies.token ; 
        // Check if User is Authenticated or not 
        if(!token){
            return res.status(401).json({
                success : false ,
                message : "User not Authentticated"
            })
        }
        const decode = jwt.verify(token , process.env.SECRET_KEY) ;
        if(!decode){
            return res.status(401).json({
                success : false ,
                message : "Invalid Token"
            })
        }
        req.id = decode.userId ; 
        next() ; 
    } catch (error) {
        console.log(error);
    }
}

export default isAuthenticated ;  