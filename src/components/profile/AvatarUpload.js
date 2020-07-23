import React from 'react';
import ImageUploader from 'react-images-upload';
import { Row, Col, Container, Modal, ModalBody, ModalHeader, Button } from 'reactstrap'

import { API } from '../../backend';

export default class AvatarUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            picture: "",
            modal: false

        }
        this.onDrop = this.onDrop.bind(this);
        this.upload = this.upload.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }
    onDrop(pic) {
        this.setState({
            picture: pic,
        })

    }
    upload() {
        this.props.update(this.state.picture[0].name)
        this.toggle()
        // API.post('user/upload/avatar',{
        //     file : this.state.picture,
        // })
        // .then(data => this.props.update(data.imgUrl))
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    {/* <ModalHeader toggle={this.toggle}>Profil Fotoğrafı Yükleyin</ModalHeader> */}
                    <ModalBody style={{background:'#fff'}}>
                        <ImageUploader
                            buttonText={'Seçin'}
                            buttonClassName={'btn butn-blue'}
                            withPreview={true}
                            singleImage={true}
                            withLabel={false}
                            withIcon={true}
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.jpeg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            fileSizeError={"Görsel boyutu 5MB üzerinde olamaz."}
                            fileTypeError={"Lütfen jpg veya png formatında görsel yükleyiniz."}
                        />
                        <div className="text-center">
                            <button onClick={this.upload} className="btn posting-sb-btn">Yükle</button>
                        </div>
                    </ModalBody>

                </Modal>
            </div>
        );
    }
}