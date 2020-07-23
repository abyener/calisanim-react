import React, { Component } from 'react';
import { Row, Col, Container,Button } from 'reactstrap';
import Avatar from '../Avatar'


export default class JobPosting extends Component {
    constructor(props) {
        super(props);
        this.state = { }
        this.submitToJob = this.submitToJob.bind(this)
    }
    submitToJob(id){
        alert(id + '  nolu ilana başvuruldu')
    }
    render() {
        const jobData = this.props.data
        return (
            <Container>
                <Row>
                    <Col xs="12" className="job-header job-box">
                        <Row>
                            <Col xs="2">
                                <Avatar className="job-avatar" src={jobData.avatar}
                                    alt={jobData.userName} />

                            </Col>
                            <Col xs="2">
                                <p className="job-user">{jobData.employer.user.name} {jobData.employer.user.surname }</p>
                                <p className="job-location">{jobData.location}</p>
                            </Col>

                            <Col xs={{ size: 2, offset: 6 }}>
                                <p className="job-date">İlan Tarihi: {jobData.advertisement_date.split(" ")[0]}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" className="job-box job-name">
                        <h1>
                            {jobData.title}
                        </h1>
                    </Col>
                    <Col xs="12" className="job-box job-details">
                        <p><strong>Kategori</strong>: {jobData.category.name}</p>
                        <p><strong>Çalışma Şekli</strong>: {jobData.type}</p>
                        <p><strong>Uyruk</strong>: {jobData.nationality}</p>
                        <p><strong>Beklenilen Ev Görevleri</strong>: {
                            jobData.expectedDuties
                        }</p>
                        <p><strong>Düşünülen Ücret Aralığı</strong>: {jobData.salary} TL ({jobData.salaryPeriod})</p>
                        <p><strong>Yaş Aralığı</strong>: {jobData.ageRange} Yaş</p>

                    </Col>
                    <Col xs="12" className="job-box job-details">
                        <Col>
                        <h3>Kurallar ve Ev Hakkında</h3>
                        </Col>
                        <p><strong>Kamera sisteminiz var mı?</strong>: {jobData.camera}</p>
                        <p><strong>Evcil hayvanınız var mı?</strong>: {jobData.pet } {jobData.petInfo}</p>
                    </Col>

                    <Col xs="12" className="job-box job-details">
                        <Col>
                        <h3>Açıklama</h3>
                        </Col>
                        {jobData.info}
                    </Col>

                    <Button className="butn-red job-btn-lg" onClick={() => this.submitToJob(jobData.id)} >BAŞVUR</Button>
                    
                </Row>
            </Container>
        );
    }
}



