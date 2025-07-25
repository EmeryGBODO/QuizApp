export default function Menu(){
    const categories = [
        {name:"node", level:"intermédiaire"},
        {name:"node", level:"compliqué"},
        {name:"php", level:"intermédiaire"}
    ]
    return (
        categories.map(c=> <div> 
            <div><img src="" alt="" /></div>
            <div>{c.name}</div>
            <div>{c.level}</div>
         </div> )
    )


}