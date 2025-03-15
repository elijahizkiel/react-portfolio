export default function Experience({experience, style, className}){

    return (
        <div className={"experience " +className} style={style} >
            <img src={experience.img} alt={experience.name} />
            <p>{experience.name}</p>
        </div>
    )
}