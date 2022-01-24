
import PropTypes from 'prop-types';

function Item({marca, ano_lancamento}) {
    return (
        <li>{marca} - {ano_lancamento}</li>
    )
}

// acessa-se a propriedade com p minusculo
Item.propTypes = {
    // definindo marca como string
    marca: PropTypes.string,
    // definindo ano_lancamento como number e exigindo que ele seja requirido
    ano_lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lancamento: 0,
}


export default Item;