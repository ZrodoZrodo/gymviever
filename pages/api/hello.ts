import { NextApiRequest, NextApiResponse } from "next";



const hello = async (req: NextApiRequest, res: NextApiResponse) => {




  res.json({message:"dd"});
};

export default hello;
