import CardUser from "./CardUser"

const ListUsers=({users})=>{
    return(
        <div>
            {
                users.map(el=> <CardUser key={el.id} el={el}/>)
            }
        </div>
    )
}

export default ListUsers