import React,{Component} from 'react';



class TableHeader extends Component {
    

    raiseSort = (path) => {
        const shortColumn = this.props.shortColumn;
        if (path === shortColumn.path && shortColumn.order === "asc") {
            this.props.onShort({ path, order:'desc'})
         }
         else this.props.onShort({ path, order:'asc'})
    }

    renderSortIcon = (column) => {
        // checking that this column is same as currentColumn
        if (column.path !== this.props.shortColumn.path) return null
        if (this.props.shortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i>
    }

    render () {
        return (
        <thead>
            <tr>
                {this.props.columns.map((column,index) => <th style={{cursor: 'pointer'}} key={index} onClick={()=>this.raiseSort(column.path)}>{column.label} {this.renderSortIcon(column)}</th>)}
            </tr>
        </thead>
        )
    }
}
export default TableHeader;