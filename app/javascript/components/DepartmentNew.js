import React from 'react'
const DepartmentNew = (props) => {
    return (
        <div style={styles.container}>
            <h1>New Department Form</h1>
            <form>
                <input style={styles.input} />
                <button type='submit'>add</button>
            </form>
        </div>
    )
}
const styles = {
    container: {
        backgroundColor:'#fcfcf9', 
        margin:'20px',
        padding:'20px',
        border:'1px solid black'
    },
    input: {
        height:'40px'
    }
}
export default DepartmentNew