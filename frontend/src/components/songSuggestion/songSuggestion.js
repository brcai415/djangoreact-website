import React, { Component } from "react";
import './songSuggestion.css';
import Clock from '../Clock/clock';
import NavBar from "../NavBar/navBar";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "./SongSuggestionModal";
import axios from "axios";

export default class SongSuggestion extends Component {
    constructor(){
        super();
        this.state = {
            songs: [],
            modal: false,
            activeItem:{
                artistName: "",
                songName: "",
            },
        };
        axios.defaults.withCredentials = true;
    }
    
    componentDidMount() {
        document.title = "Song Suggestion"
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get("/songsuggestion/")
            .then((res) => this.setState({ songs: res.data}))
            .catch((err) => console.log(err));
    };

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    };

    handleSubmit = (item) => {
        this.toggle();

        if (item.id) {
            axios
                .put(`/songsuggestion/${item.id}/`, item)
                .then((res) => this.refreshList());
            return;
        }
        axios
            .post("/songsuggestion/", item)
            .then((res) => this.refreshList());
    };

    createItem = () => {
        const item = { artistName: "", songName: ""};

        this.setState({ activeItem: item, modal: !this.state.modal });
    };


    renderItems = () => {
        const newItems = this.state.songs.filter(
            (item) => item.songName
        );
        
        return newItems.map((item) => (
            <div>
                <li
                    key = {item.id}
                    className = "list-group-item d-flex justify-content-between align-items-center"
                >
                    <span>{item.songName} by {item.artistName}</span>
                </li>
            </div>
        ))
    }
    
    render() {
        return (
            <div className = "container-fluid">
                <NavBar />
                <main className = "container">
                    <h1 className = "text-primary text-center my-4">Song Suggestions</h1>
                        <div className = "col-md-6 col-sm-10 mx-auto p-0">
                            <div className = "card p-3 text-center">
                                <div className = "mb-4">
                                    <button
                                        className = "btn btn-primary"
                                        onClick = {this.createItem}
                                    >
                                        Add Song Suggestion
                                    </button>
                                </div>
                                <h2 className= "text-center my-4">Songs Suggested</h2>
                                <ul className="list-group list-group-flush border-top-0">
                                    {this.renderItems()}
                                </ul>
                            </div>
                        </div>
                        {this.state.modal ? (
                            <Modal
                                activeItem = {this.state.activeItem}
                                toggle = {this.toggle}
                                onSave = {this.handleSubmit}
                            />
                        ) : null}
                </main>
            </div>
        );
    }
}