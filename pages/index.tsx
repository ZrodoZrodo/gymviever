import {UserService} from "../services/UserService";

const index=(props:{email:string,name:string,nick:string})=>{
    console.log(props)

    return <>
        {props.email}<br/>
        {props.name}<br/>
        {props.nick}
    </>
}

export default index


export const getServerSideProps = async () => {
    return {props:UserService.getUser('tdest')}
}