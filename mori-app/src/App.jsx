import React from 'react';
import { useForm } from 'react-hook-form';
import { Number } from './Number';
import './App.css';
 
const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    return(() => <Number game={[data]} title={['1','2']}/>)
  }
  return (
    <div>
      <h1>数独自動化アプリ</h1>
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <table className={'borderThickness'}>
            <tbody>
                <tr>
                    <td><input id="11" {...register('11')} className={'inputStyle'}/></td>
                    <td><input id="12" {...register('12')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="13" {...register('13')} className={'inputStyle'}/></td>
                    <td><input id="14" {...register('14')} className={'inputStyle'}/></td>
                    <td><input id="15" {...register('15')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="16" {...register('16')} className={'inputStyle'}/></td>
                    <td><input id="17" {...register('17')} className={'inputStyle'}/></td>
                    <td><input id="18" {...register('18')} className={'inputStyle'}/></td>
                    <td><input id="19" {...register('19')} className={'inputStyle'}/></td>
                </tr>
                <tr>
                    <td><input id="21" {...register('21')} className={'inputStyle'}/></td>
                    <td><input id="22" {...register('22')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="23" {...register('23')} className={'inputStyle'}/></td>
                    <td><input id="24" {...register('24')} className={'inputStyle'}/></td>
                    <td><input id="25" {...register('25')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="26" {...register('26')} className={'inputStyle'}/></td>
                    <td><input id="27" {...register('27')} className={'inputStyle'}/></td>
                    <td><input id="28" {...register('28')} className={'inputStyle'}/></td>
                    <td><input id="29" {...register('29')} className={'inputStyle'}/></td>
                </tr>
                <tr>
                    <td><input id="31" {...register('31')} className={'inputStyle'}/></td>
                    <td><input id="32" {...register('32')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="33" {...register('33')} className={'inputStyle'}/></td>
                    <td><input id="34" {...register('34')} className={'inputStyle'}/></td>
                    <td><input id="35" {...register('35')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="36" {...register('36')} className={'inputStyle'}/></td>
                    <td><input id="37" {...register('37')} className={'inputStyle'}/></td>
                    <td><input id="38" {...register('38')} className={'inputStyle'}/></td>
                    <td><input id="39" {...register('39')} className={'inputStyle'}/></td>
                </tr>
                <tr>
                    <td className={'tdStyle47'}><input id="41" {...register('41')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="42" {...register('42')} className={'inputStyle'}/></td>
                    <td className={'tdStyle4736'}><input id="43" {...register('43')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="44" {...register('44')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="45" {...register('45')} className={'inputStyle'}/></td>
                    <td className={'tdStyle4736'}><input id="46" {...register('46')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="47" {...register('47')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="48" {...register('48')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="49" {...register('49')} className={'inputStyle'}/></td>
                </tr>
                <tr>
                    <td><input id="51" {...register('51')} className={'inputStyle'}/></td>
                    <td><input id="52" {...register('52')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="53" {...register('53')} className={'inputStyle'}/></td>
                    <td><input id="54" {...register('54')} className={'inputStyle'}/></td>
                    <td><input id="55" {...register('55')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="56" {...register('56')} className={'inputStyle'}/></td>
                    <td><input id="57" {...register('57')} className={'inputStyle'}/></td>
                    <td><input id="58" {...register('58')} className={'inputStyle'}/></td>
                    <td><input id="59" {...register('59')} className={'inputStyle'}/></td>
                </tr>
                <tr>
                    <td><input id="61" {...register('61')} className={'inputStyle'}/></td>
                    <td><input id="62" {...register('62')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="63" {...register('63')} className={'inputStyle'}/></td>
                    <td><input id="64" {...register('64')} className={'inputStyle'}/></td>
                    <td><input id="65" {...register('65')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="66" {...register('66')} className={'inputStyle'}/></td>
                    <td><input id="67" {...register('67')} className={'inputStyle'}/></td>
                    <td><input id="68" {...register('68')} className={'inputStyle'}/></td>
                    <td><input id="69" {...register('69')} className={'inputStyle'}/></td>
                </tr>
                <tr>
                    <td className={'tdStyle47'}><input id="71" {...register('71')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="72" {...register('72')} className={'inputStyle'}/></td>
                    <td className={'tdStyle4736'}><input id="73" {...register('73')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="74" {...register('74')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="75" {...register('75')} className={'inputStyle'}/></td>
                    <td className={'tdStyle4736'}><input id="76" {...register('76')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="77" {...register('77')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="78" {...register('78')} className={'inputStyle'}/></td>
                    <td className={'tdStyle47'}><input id="79" {...register('79')} className={'inputStyle'}/></td>
                </tr>
                <tr>
                    <td><input id="81" {...register('81')} className={'inputStyle'}/></td>
                    <td><input id="82" {...register('82')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="83" {...register('83')} className={'inputStyle'}/></td>
                    <td><input id="84" {...register('84')} className={'inputStyle'}/></td>
                    <td><input id="85" {...register('85')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="86" {...register('86')} className={'inputStyle'}/></td>
                    <td><input id="87" {...register('87')} className={'inputStyle'}/></td>
                    <td><input id="88" {...register('88')} className={'inputStyle'}/></td>
                    <td><input id="89" {...register('89')} className={'inputStyle'}/></td>
                </tr>
                <tr>
                    <td><input id="91" {...register('91')} className={'inputStyle'}/></td>
                    <td><input id="92" {...register('92')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="93" {...register('93')} className={'inputStyle'}/></td>
                    <td><input id="94" {...register('94')} className={'inputStyle'}/></td>
                    <td><input id="95" {...register('95')} className={'inputStyle'}/></td>
                    <td className={'tdStyle36'}><input id="96" {...register('96')} className={'inputStyle'}/></td>
                    <td><input id="97" {...register('97')} className={'inputStyle'}/></td>
                    <td><input id="98" {...register('98')} className={'inputStyle'}/></td>
                    <td><input id="99" {...register('99')} className={'inputStyle'}/></td>
                </tr>
            </tbody>
        </table>
        <div className={'buttondiv'}>
          <div><input type='submit' value='解読' className={'buttonstyle'}/></div>
        </div>
        </form>
      </div>
    </div>
  )
}
 
export default App;