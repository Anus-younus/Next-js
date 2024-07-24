import Products from "../Products/page";

export default function AllProducts() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '10px' }}>Sr</th>
                        <th style={{ border: '1px solid black', padding: '10px' }}>Product name</th>
                        <th style={{ border: '1px solid black', padding: '10px' }}>Product price</th>
                    </tr>
                </thead>
                <tbody>
                    <Products />
                    <Products />
                    <Products />
                </tbody>
            </table>
        </>
    )
}