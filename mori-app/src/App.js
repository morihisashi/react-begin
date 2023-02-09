import React from 'react';
import './App.css';
 
function App() {
  const tdStyle = {width: "40px", height: "40px", padding: "5px 12px"};
  const tdStyle36 = {width: "40px", height: "40px", padding: "5px 12px", borderRight: "3px solid #333"};
  const tdStyle47 = {width: "40px", height: "40px", padding: "5px 12px", borderTop: "3px solid #333"};
  const tdStyle4736 = {width: "40px", height: "40px", padding: "5px 12px", borderRight: "3px solid #333", borderTop: "3px solid #333"};
  const borderThickness = {border: "3px solid #333"};
  const inputStyle = {border: "none", width: "30px", height: "30px", textAlign: "center"};
  return (
    <div>
      <h1 className="bg-primary text-white display-4">数独自動化アプリ</h1>
      <div className="container">
        <table className="table table-bordered" style={borderThickness}>
            <tbody>
                <tr>
                    <td style={tdStyle}><input name="1-1" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="1-2" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="1-3" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="1-4" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="1-5" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="1-6" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="1-7" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="1-8" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="1-9" style={inputStyle}></input></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="2-1" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="2-2" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="2-3" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="2-4" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="2-5" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="2-6" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="2-7" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="2-8" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="2-9" style={inputStyle}></input></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="3-1" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="3-2" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="3-3" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="3-4" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="3-5" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="3-6" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="3-7" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="3-8" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="3-9" style={inputStyle}></input></td>
                </tr>
                <tr>
                    <td style={tdStyle47}><input name="4-1" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="4-2" style={inputStyle}></input></td>
                    <td style={tdStyle4736}><input name="4-3" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="4-4" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="4-5" style={inputStyle}></input></td>
                    <td style={tdStyle4736}><input name="4-6" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="4-7" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="4-8" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="4-9" style={inputStyle}></input></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="5-1" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="5-2" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="5-3" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="5-4" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="5-5" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="5-6" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="5-7" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="5-8" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="5-9" style={inputStyle}></input></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="6-1" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="6-2" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="6-3" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="6-4" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="6-5" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="6-6" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="6-7" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="6-8" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="6-9" style={inputStyle}></input></td>
                </tr>
                <tr>
                    <td style={tdStyle47}><input name="7-1" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="7-2" style={inputStyle}></input></td>
                    <td style={tdStyle4736}><input name="7-3" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="7-4" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="7-5" style={inputStyle}></input></td>
                    <td style={tdStyle4736}><input name="7-6" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="7-7" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="7-8" style={inputStyle}></input></td>
                    <td style={tdStyle47}><input name="7-9" style={inputStyle}></input></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="8-1" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="8-2" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="8-3" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="8-4" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="8-5" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="8-6" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="8-7" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="8-8" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="8-9" style={inputStyle}></input></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="9-1" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="9-2" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="9-3" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="9-4" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="9-5" style={inputStyle}></input></td>
                    <td style={tdStyle36}><input name="9-6" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="9-7" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="9-8" style={inputStyle}></input></td>
                    <td style={tdStyle}><input name="9-9" style={inputStyle}></input></td>
                </tr>
            </tbody>
        </table>
 
        <div className="card p-3 border-primary text-center">
          <div><button className="btn btn-primary">解読</button></div>
        </div>
      </div>
    </div>
  )
}
 
export default App;