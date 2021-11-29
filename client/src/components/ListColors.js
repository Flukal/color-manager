function ListColors(props) {
    return (
        <section className='list'>
            {props.colors.map((color) => (
                <div key={color.id} className='list__item'>
                    <button onClick={(e) => props.handleDelete(color.id, e)} className='list__delete'>
                        Delete
                    </button>
                    <div className='list__color' style={{ backgroundColor: color.hex }}></div>
                    <h3>{color.name}</h3>
                    <p>{color.hex}</p>
                </div>
            ))}
        </section>
    )
}

export default ListColors
