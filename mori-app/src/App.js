import React, { useState } from 'react';
import './App.css';
 
const App = () => {
  const tdStyle = {width: "40px", height: "40px", padding: "5px 12px"};
  const tdStyle36 = {width: "40px", height: "40px", padding: "5px 12px", borderRight: "3px solid #333"};
  const tdStyle47 = {width: "40px", height: "40px", padding: "5px 12px", borderTop: "3px solid #333"};
  const tdStyle4736 = {width: "40px", height: "40px", padding: "5px 12px", borderRight: "3px solid #333", borderTop: "3px solid #333"};
  const borderThickness = {border: "3px solid #333"};
  const inputStyle = {border: "none", width: "30px", height: "30px", textAlign: "center"};
  const [value, setValue] = useState("");
  return (
    <div>
      <h1 className="bg-primary text-white display-4">数独自動化アプリ</h1>
      <div className="container">
        <table className="table table-bordered" style={borderThickness}>
            <tbody>
                <tr>
                    <td style={tdStyle}><input name="value11" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value12" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value13" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value14" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value15" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value16" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value17" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value18" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value19" style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="value21" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value22" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value23" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value24" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value25" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value26" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value27" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value28" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value29" style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="value31" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value32" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value33" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value34" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value35" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value36" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value37" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value38" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value39" style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle47}><input name="value41" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value42" style={inputStyle}/></td>
                    <td style={tdStyle4736}><input name="value43" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value44" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value45" style={inputStyle}/></td>
                    <td style={tdStyle4736}><input name="value46" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value47" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value48" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value49" style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="value51" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value52" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value53" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value54" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value55" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value56" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value57" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value58" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value59" style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="value61" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value62" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value63" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value64" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value65" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value66" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value67" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value68" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value69" style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle47}><input name="value71" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value72" style={inputStyle}/></td>
                    <td style={tdStyle4736}><input name="value73" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value74" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value75" style={inputStyle}/></td>
                    <td style={tdStyle4736}><input name="value76" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value77" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value78" style={inputStyle}/></td>
                    <td style={tdStyle47}><input name="value79" style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="value81" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value82" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value83" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value84" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value85" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value86" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value87" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value88" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value89" style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input name="value91" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value92" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value93" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value94" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value95" style={inputStyle}/></td>
                    <td style={tdStyle36}><input name="value96" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value97" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value98" style={inputStyle}/></td>
                    <td style={tdStyle}><input name="value99" style={inputStyle}/></td>
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