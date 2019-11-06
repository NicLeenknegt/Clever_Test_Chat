import React from "react";
import { type } from "os";
import './TableContainer.css'
import { object } from "prop-types";
interface TableContainerProps {
    rows:any[],
    type: { new(): any } 
}

export class TableContainer extends React.Component<TableContainerProps> {
    
    public render() {
        var rows = this.props.rows
        var newRow = new this.props.type()
        return (
            <table className="entity_table">
                <thead>
                    <tr>
                        {
                            Object.keys(newRow).map((key) => {
                                return <th className="table_column_title">{key.charAt(0).toLocaleUpperCase() + key.slice(1)}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>

                    {
                        rows.map((entity) => {
                            return (
                                <tr className="bordered_row">
                                    {
                                        Object.values(entity).map((key:any, index:number) => {
                                            if (key instanceof Function )
                                                return <th>
                                                    <button onClick={e => key(entity)} >{Object.keys(entity)[Object.values(entity).indexOf(key)]}</button>
                                                </th>
                                            return <th>
                                                {key}
                                            </th>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        )
    }
}