
import {NextApiRequest, NextApiResponse} from "next";


const hello=async (req:NextApiRequest, res:NextApiResponse) => {

    console.log(req.body)
res.json({message:"api works"})
}

export default hello
