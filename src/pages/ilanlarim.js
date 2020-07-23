import React, { Component } from 'react';
import Layout from "../components/layout"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardText, Row, Col, Container, Fade } from 'reactstrap';
import classnames from 'classnames';

export default class Ilanlarim extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1',

        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <Layout>
                <section className="content-inner">
                    <Container>
                        <Col sm="12">
                            <Nav tabs id="cls-nav">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        Aktif İlanlar
            </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                    >
                                        Kapalı İlanlar
            </NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <TabContent className="ilanlarim" activeTab={this.state.activeTab}>
                            <Fade in={this.state.activeTab === 1} tag="div">
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="4">
                                            <Card body>
                                                <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
                                                <CardText><a href="/" className="btn butn-red">Başvurular</a></CardText>
                                                <div className="card-body">
                                                    <a href="/" className="card-link">Görüntüle</a>
                                                    <a href="/" className="card-link">Güncelle</a>
                                                </div>
                                                <p className="card-text">
                                                    <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
                                                </p>
                                            </Card>
                                        </Col>
                                        <Col sm="4">
                                            <Card body>
                                                <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
                                                <CardText><a href="/" className="btn butn-red">Başvurular</a></CardText>
                                                <div className="card-body">
                                                    <a href="/" className="card-link">Görüntüle</a>
                                                    <a href="/" className="card-link">Güncelle</a>
                                                </div>
                                                <p className="card-text">
                                                    <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
                                                </p>
                                            </Card>
                                        </Col>
                                        <Col sm="4">
                                            <Card body>
                                                <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
                                                <CardText><a href="/" className="btn butn-red">Başvurular</a></CardText>
                                                <div className="card-body">
                                                    <a href="/" className="card-link">Görüntüle</a>
                                                    <a href="/" className="card-link">Güncelle</a>
                                                </div>
                                                <p className="card-text">
                                                    <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
                                                </p>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </Fade>
                            <Fade in={this.state.activeTab === 2} tag="div">
                                <TabPane tabId="2">
                                    <Row>

                                        <Col sm="4">
                                            <Card body>
                                                <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
                                                <CardText><a href="/" className="btn butn-red">Başvurular</a></CardText>
                                                <div className="card-body">
                                                    <a href="/" className="card-link">Görüntüle</a>
                                                    <a href="/" className="card-link">Güncelle</a>
                                                </div>
                                                <p className="card-text">
                                                    <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
                                                </p>
                                            </Card>
                                        </Col>
                                        <Col sm="4">
                                            <Card body>
                                                <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
                                                <CardText><a href="/" className="btn butn-red">Başvurular</a></CardText>
                                                <div className="card-body">
                                                    <a href="/" className="card-link">Görüntüle</a>
                                                    <a href="/" className="card-link">Güncelle</a>
                                                </div>
                                                <p className="card-text">
                                                    <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
                                                </p>
                                            </Card>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </Fade>
                        </TabContent>
                    </Container>

                </section>
            </Layout>
        );
    }
}



// export default () => (
//     <Layout>

//         <section className="content-inner">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-sm-12 ">
//                         <nav id="cls-nav">
//                             <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
//                                 <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
//                                     role="tab" aria-controls="nav-home" aria-selected="true">Aktif İlanlar</a>
//                                 <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
//                                     role="tab" aria-controls="nav-profile" aria-selected="false">Kapalı İlanlar</a>


//                             </div>
//                         </nav>
//                     </div>
//                     <div className="col-sm-12">
//                         <div className="tab-content py-3 px-3 px-sm-0 ilanlarim" id="nav-tabContent">
//                             <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
//                                 aria-labelledby="nav-home-tab">
//                                 <div className="row">
//                                     <div className="col-sm-12">

//                                         <div className="card-deck">
//                                             <div className="card">
//                                                 <div className="card-body">
//                                                     <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
//                                                     <p className="card-text"><a href="/" className="btn butn-red">Başvurular</a></p>
//                                                     <div className="card-body">
//                                                         <a href="/" className="card-link">Görüntüle</a>
//                                                         <a href="/" className="card-link">Güncelle</a>
//                                                     </div>

//                                                     <p className="card-text">
//                                                         <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <div className="card">
//                                                 <div className="card-body">
//                                                     <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
//                                                     <p className="card-text"><a href="/" className="btn butn-red">Başvurular</a></p>
//                                                     <div className="card-body">
//                                                         <a href="/" className="card-link">Görüntüle</a>
//                                                         <a href="/" className="card-link">Güncelle</a>
//                                                     </div>

//                                                     <p className="card-text">
//                                                         <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <div className="card">
//                                                 <div className="card-body">
//                                                     <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
//                                                     <p className="card-text"><a href="/" className="btn butn-red">Başvurular</a></p>
//                                                     <div className="card-body">
//                                                         <a href="/" className="card-link">Görüntüle</a>
//                                                         <a href="/" className="card-link">Güncelle</a>
//                                                     </div>

//                                                     <p className="card-text">
//                                                         <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
//                                 <div className="row">
//                                     <div className="col-sm-12">

//                                         <div className="card-deck">
//                                             <div className="card">
//                                                 <div className="card-body">
//                                                     <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
//                                                     <p className="card-text"><a href="/" className="btn butn-red">Başvurular</a></p>
//                                                     <div className="card-body">
//                                                         <a href="/" className="card-link">Görüntüle</a>
//                                                         <a href="/" className="card-link">Tekrar Yayınla</a>
//                                                     </div>

//                                                     <p className="card-text">
//                                                         <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <div className="card">
//                                                 <div className="card-body">
//                                                     <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
//                                                     <p className="card-text"><a href="/" className="btn butn-red">Başvurular</a></p>
//                                                     <div className="card-body">
//                                                         <a href="/" className="card-link">Görüntüle</a>
//                                                         <a href="/" className="card-link">Tekrar Yayınla</a>
//                                                     </div>

//                                                     <p className="card-text">
//                                                         <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <div className="card">
//                                                 <div className="card-body">
//                                                     <h5 className="card-title">Çocuk Bakıcı İlanı</h5>
//                                                     <p className="card-text"><a href="/" className="btn butn-red">Başvurular</a></p>
//                                                     <div className="card-body">
//                                                         <a href="/" className="card-link">Görüntüle</a>
//                                                         <a href="/" className="card-link">Tekrar Yayınla</a>
//                                                     </div>

//                                                     <p className="card-text">
//                                                         <small className="text-muted">Yayınlanma Tarihi: 25.05.2019</small>
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>


//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </section>
//     </Layout>
// )