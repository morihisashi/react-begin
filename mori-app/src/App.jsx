import { React, useState }from 'react';
import { useForm } from 'react-hook-form';
import { Number } from './Number';
import './App.css';
import { Table } from './Table';
 
const App = () => {
  // const { register, handleSubmit } = useForm();
  const [array, setArray] = useState([]);
  // const [check, setCheck] = useState(false);
  // const onSubmit = (data) => {
  //   setArray(data);
  //   setCheck(true);
  // }
  return (
    <div>
      <h1>数独自動化アプリ</h1>
      <Table set={setArray}/>
      <Number game={[array]}/>
    </div>
  )
}
 
export default App;