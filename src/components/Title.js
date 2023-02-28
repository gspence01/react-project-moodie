import Button from 'react-bootstrap/Button'

export default function Title () {
    return (
        <div>
            <div className="background"></div>
            <div style={{textAlign: 'right', padding:'50px', height:'75vh'}}>
                <h1>How are you feeling?</h1>
                <p>write. connect. explore.</p>
                <Button variant='success'>get started.</Button>
            </div>
        </div>
    )
}