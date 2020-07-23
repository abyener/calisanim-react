import React, { Component } from 'react'
import { Button, Col } from 'reactstrap'

class JobConfirmation extends Component {
    constructor() {
        super()
        this.startedWorking = this.startedWorking.bind(this)
        this.complaint = this.complaint.bind(this)

    }
    startedWorking(id) { //job id
        alert('iş başladı' )
    }
    complaint(id) { //job id
        alert('sorun var')
    }
    render() {
            return (
                <Col xs="12" className="cls-box text-center">
                    <Button className="confirm" onClick={() => this.startedWorking(this.props.data.id)}>
                    {(this.props.view === "worker" ? "İşe Başladım" : "Çalışan İşe Başladı")}
                </Button>
                    <Button className="complaint" onClick={() => this.complaint(this.props.data.id)}>Sorun Bildir</Button>
                </Col>
            )
    }
}
export default JobConfirmation