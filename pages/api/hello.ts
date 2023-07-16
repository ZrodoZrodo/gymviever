import { NextApiRequest, NextApiResponse } from "next";
import {UserService} from "../../services/UserService";



const hello = async (req: NextApiRequest, res: NextApiResponse) => {

console.log(req.body)
  const resp =await UserService.addUser(req.body)

  res.json(resp);
};

export default hello;
