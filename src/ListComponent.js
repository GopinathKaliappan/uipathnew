import React, { Component } from "react";


class FormComponent extends Component {
  render() {
    return (
        <div>
			<span className={'title-header'} > ></span>
            <table >
            <tbody>
              <tr>
                <td className={'padding-20'}>
                  <label>
                    Name:
          </label>
                </td >
                <td className={'padding-20'}>
                  <input type="text" name="name" />
                </td>
              </tr>
              <tr>
                <td className={'padding-20'}>
                  <label>
                    Name:
          </label>
                </td>
                <td className={'padding-20'}>
                  <input type="text" name="name" />
                </td>
              </tr>
              <tr>
              <button type="button" name="name" onClick={() => { this.handleSubmit() }}> Login</button>
              </tr>
             </tbody>
              </table>
        </div>
    );
  }
}

export default FormComponent;
