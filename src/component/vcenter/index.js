import React, { Component } from 'react'
export default class Vcenter extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }

    render () {
        const { children } = this.props;
        return (
            <table style={{width:'100%',height:'100%'}}>
                <tbody>
                    <tr>
                    <td>
                        {children}
                    </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}