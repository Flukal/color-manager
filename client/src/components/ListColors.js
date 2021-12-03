import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function ListColors({ colors, handleDelete }) {
    return (
        <section className='list'>
            {colors.map((color) => (
                <div key={color.id} className='list__item'>
                    <button onClick={(e) => handleDelete(color.id, e)} className='btn-icon'>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                    <div className='list__color' style={{ backgroundColor: color.hex }}></div>
                    <h3 className='list__title'>{color.name}</h3>
                    <p className='list__subtitle'>{color.hex}</p>
                </div>
            ))}
        </section>
    )
}

export default ListColors
