import { useState } from 'react'


function Addtask({ onAdd }) {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setreminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('please add a task')
            return
        } else {
            onAdd({ text, day, reminder })
            setText('')
            setDay('')
            setreminder(false)
        }
    }

    return ( <
        form className = 'add-form'
        onSubmit = { onSubmit } >
        <
        div className = 'form-control' >
        <
        label > Task < /label> <
        input type = 'text'
        placeholder = 'Add Task'
        value = { text }
        onChange = {
            (e) => setText(e.target.value)
        }
        / > < /
        div > <
        div className = 'form-control' >
        <
        label > Day < /label> <
        input type = 'text'
        placeholder = 'Add Day and time'
        value = { day }
        onChange = {
            (e) => setDay(e.target.value)
        }
        / > < /
        div > <
        div className = 'form-control form-control-check' >
        <
        label > reminder < /label> <
        input type = 'checkbox'
        checked = { reminder }
        value = { reminder }
        onChange = {
            (e) => setreminder(e.currentTarget.checked)
        }
        / > < /
        div >

        <
        input type = 'submit'
        value = 'save Task'
        className = 'btn btn-block' / >



        <
        /form>
    )
}

export default Addtask