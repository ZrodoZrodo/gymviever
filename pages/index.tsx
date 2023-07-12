import prisma from "../prisma";

interface Props{
  message:string,
  data:Array<{email:string,id:string}>
}

const Home=({message,data}:Props)=> {
  console.log(data)
  return (
<div>
  <h1 className="text-3xl font-bold underline">
    Hello world! {message}
  </h1>
  {data.map(x=><p key={x.id}>{x.email} || {x.id}</p>)}
</div>
  )
}

export default Home

export const getServerSideProps=async()=>{
  const resp=await prisma.user.findMany();
  return {props:{message:"server resp",data:resp}}
}
