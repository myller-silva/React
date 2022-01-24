import Item  from "./Item";

function List() {
    return (
        // fragment:
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari"></Item>
                <Item marca="Fiat"></Item>
                <Item marca="Chevrolet"></Item>
            </ul>
        </>
    )
}

export default List;