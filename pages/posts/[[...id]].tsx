import Layout from '../../components/layout'
import {useRouter} from "next/router";

const Post=()=> {

  const {query}=useRouter()

  return (
    <Layout>
        {query.id}
    </Layout>
  )
}

export default Post

