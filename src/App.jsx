import React, {useState} from 'react'


const App = () => {

  const[title, setTitle] = useState('')
  const[detail, setDetail] = useState('')

  const[task, setTask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(title);
    // console.log(detail);

    const copyTask = [...task]
    copyTask.push({title,detail})

    setTask(copyTask)
    console.log(task);

    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx,1)

    setTask(copyTask)
  }


  return (
    <div className='h-screen lg:flex bg-white'>
      <form onSubmit={(e) => {
          submitHandler(e) 
        }} className='flex lg:w-1/2 gap-4 p-10 flex-col items-start'>
          <h1 className='text-3xl font-bold'>Add Notes</h1>
        
        <input className='px-5 py-2 font-medium w-full border-2 rounded' type='text' placeholder='Enter Notes Heading' 
        value={title} onChange={(e) => {
          setTitle(e.target.value);
        }}/>

        <textarea className='px-5 h-30 py-2 font-medium w-full border-2 rounded' type='text' placeholder='Write Details'
        value={detail} onChange={(e) => {
          setDetail(e.target.value);
        }} />

        <button className='bg-white active:bg-blue-400 active:scale-95 px-5 py-2 font-medium w-full border-2 rounded'>Add Note</button>

      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(e,idx){

              return <div key={idx} className='flex justify-between flex-col relative h-52 w-40 bg-cover rounded-2xl pt-4 pb-1 px-4 bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)]'>
                <div>
                  <h3 className='leading-tight text-xl font-bold'>{e.title}</h3>
                  <p className='mt-4 leading-tight text-gray-700 font-medium'>{e.detail}</p>
                </div>
                <button onClick={() => {
                  deleteNote(idx)
                }} className='w-full cursor-pointer active:scale-95 bg-red-600 text-white py-1 text-xs rounded font-bold'>Delete</button>
              </div>
              
          })}
        </div>
      </div>
    </div>
  )
}

export default App

