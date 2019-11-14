import React from "react";
import { type } from "os";
import './TableContainer.css'
import { object, func } from "prop-types";
interface TableContainerProps {
    rows: any[],
    type: { new(): any }
}

export class TableContainer extends React.Component<TableContainerProps> {


    private renderName(name:string) {
        var test = ""
        for (var i=0; i<name.length; i++) {
            if (name[i].match(/[A-Z]/) !== null) {
                test = name.slice(0, i) + " " + name.slice(i, name.length)
            }
        }
        return test.trim() !== ""?test.toLocaleLowerCase():name.toLocaleLowerCase();
    }

    public render() {
        var rows = this.props.rows
        var newRow = new this.props.type()
        return (
            <table className="entity_table">
                <thead>
                    <tr>
                        {
                            Object.keys(newRow).map((key, index:number) => {
                                key = key.toLocaleLowerCase()
                                if (!(Object.values(newRow)[index] instanceof Function))
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
                                        Object.values(entity).map((key: any, index: number) => {
                                            if (key instanceof Function) {
                                                return <th className="button_container">
                                                    <button onClick={e => key(entity)} >{this.renderName(Object.keys(entity)[Object.values(entity).indexOf(key)])}</button>
                                                </th>
                                            }
                                            console.log(key)
                                            if ((typeof key === "string") && key.startsWith('https://')) {
                                                return <th>
                                                    <a href={key}>link</a>
                                                </th>
                                            }
                                            if (typeof key === "boolean") {
                                                return <th>
                                                    {key?"true":"false"}
                                                </th>
                                            }
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