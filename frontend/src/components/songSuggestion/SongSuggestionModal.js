import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class SongSuggestionModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        const activeItem = { ...this.state.activeItem, [name]: value};

        this.setState({ activeItem });
    };

    render(){
        const { toggle, onSave } = this.props;
        
        return (
            <Modal isOpen = {true} toggle = {toggle}>
                <ModalHeader toggle = {toggle}>Song Suggestion</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="artist-name">Artist Name</Label>
                            <Input
                                type = "text"
                                id = "artist-name"
                                name = "artistName"
                                value = {this.state.activeItem.artistName}
                                onChange = {this.handleChange}
                                placeholder = "Enter Artist Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="song-name">Song Name</Label>
                            <Input
                                type = "text"
                                id = "song-name"
                                name = "songName"
                                value = {this.state.activeItem.songName}
                                onChange = {this.handleChange}
                                placeholder = "Enter Song Name"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color = "succes"
                        onClick = {() => onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}