import TableBody from "./tableBody";
import TableHeader from "./tableHeader";


const Table = ({data, columns, onShort, shortColumn}) => {
    return (
    <table className="table table-hover">
    <TableHeader columns={columns} onShort= {onShort} shortColumn= {shortColumn}/>
    <TableBody data={data} columns={columns} />
    </table>
    )

}

export default Table;