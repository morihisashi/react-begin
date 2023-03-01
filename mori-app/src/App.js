import React from 'react';
import { useForm } from 'react-hook-form';
import { Number } from './Number';
import './App.css';
 
const App = () => {
  const tdStyle = {width: "auto", height: "auto", padding: "5px 15px"};
  const tdStyle36 = {width: "auto", height: "auto", padding: "5px 15px", borderRight: "3px solid #333"};
  const tdStyle47 = {width: "auto", height: "auto", padding: "5px 15px", borderTop: "3px solid #333"};
  const tdStyle4736 = {width: "auto", height: "auto", padding: "5px 15px", borderRight: "3px solid #333", borderTop: "3px solid #333"};
  const borderThickness = {width: "70%", border: "3px solid #333"};
  const inputStyle = {border: "none", width: "100%", height: "auto", textAlign: "center"};
  const buttondiv = {width: "70%"};
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    <Number game={[data]} title={['1','2']}/>
    
  }
  return (
    <div>
      <h1 className="bg-primary text-white display-4">数独自動化アプリ</h1>
      <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="table table-bordered" style={borderThickness}>
            <tbody>
                <tr>
                    <td style={tdStyle}><input id="11" {...register('11')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="12" {...register('12')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="13" {...register('13')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="14" {...register('14')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="15" {...register('15')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="16" {...register('16')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="17" {...register('17')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="18" {...register('18')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="19" {...register('19')} style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input id="21" {...register('21')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="22" {...register('22')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="23" {...register('23')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="24" {...register('24')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="25" {...register('25')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="26" {...register('26')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="27" {...register('27')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="28" {...register('28')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="29" {...register('29')} style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input id="31" {...register('31')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="32" {...register('32')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="33" {...register('33')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="34" {...register('34')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="35" {...register('35')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="36" {...register('36')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="37" {...register('37')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="38" {...register('38')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="39" {...register('39')} style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle47}><input id="41" {...register('41')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="42" {...register('42')} style={inputStyle}/></td>
                    <td style={tdStyle4736}><input id="43" {...register('43')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="44" {...register('44')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="45" {...register('45')} style={inputStyle}/></td>
                    <td style={tdStyle4736}><input id="46" {...register('46')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="47" {...register('47')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="48" {...register('48')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="49" {...register('49')} style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input id="51" {...register('51')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="52" {...register('52')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="53" {...register('53')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="54" {...register('54')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="55" {...register('55')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="56" {...register('56')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="57" {...register('57')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="58" {...register('58')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="59" {...register('59')} style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input id="61" {...register('61')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="62" {...register('62')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="63" {...register('63')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="64" {...register('64')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="65" {...register('65')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="66" {...register('66')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="67" {...register('67')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="68" {...register('68')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="69" {...register('69')} style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle47}><input id="71" {...register('71')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="72" {...register('72')} style={inputStyle}/></td>
                    <td style={tdStyle4736}><input id="73" {...register('73')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="74" {...register('74')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="75" {...register('75')} style={inputStyle}/></td>
                    <td style={tdStyle4736}><input id="76" {...register('76')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="77" {...register('77')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="78" {...register('78')} style={inputStyle}/></td>
                    <td style={tdStyle47}><input id="79" {...register('79')} style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input id="81" {...register('81')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="82" {...register('82')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="83" {...register('83')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="84" {...register('84')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="85" {...register('85')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="86" {...register('86')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="87" {...register('87')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="88" {...register('88')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="89" {...register('89')} style={inputStyle}/></td>
                </tr>
                <tr>
                    <td style={tdStyle}><input id="91" {...register('91')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="92" {...register('92')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="93" {...register('93')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="94" {...register('94')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="95" {...register('95')} style={inputStyle}/></td>
                    <td style={tdStyle36}><input id="96" {...register('96')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="97" {...register('97')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="98" {...register('98')} style={inputStyle}/></td>
                    <td style={tdStyle}><input id="99" {...register('99')} style={inputStyle}/></td>
                </tr>
            </tbody>
        </table>
        <div className="card p-3 border-primary text-center" style={buttondiv}>
          <div><input className="btn btn-primary" type='submit' value='解読'/></div>
        </div>
        </form>
      </div>
    </div>
  )
}
 
export default App;