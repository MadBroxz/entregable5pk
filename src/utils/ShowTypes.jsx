const ShowTypePokemon = (types) => {
    if(types?.length === 1){
        return <p>{types[0].type.name}</p>
    }
    if(types?.length > 1){
        const typesWithSlash = types.map((type) => {
            return type.type.name
        }).join(" / ")

        return <p>{typesWithSlash}</p>
    }

    return null
}
export default ShowTypePokemon