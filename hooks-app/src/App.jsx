import './App.css'
import Counter from './components/usestate'
import students from './data/student'
import StudentList from './components/StudentList'

function App() {
  return(
    <>
      <Counter/>
      <StudentList students={students}/>
    </>
  )
}

export default App;
