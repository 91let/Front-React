import React from "react";
import {Datas, DataProps} from '../common/datas';
import './Lists.css';

class Lists extends React.Component<[], DataProps>{
    datas : Datas;
    constructor(props : []){
        super(props);
        this.datas = new Datas;
        this.stateInit();
    }
    stateInit(){
        this.state = {
            img : "",
            name : "",
            checking : false,
        }
    }
    componentWillMount(){
        this.datas.initDatas();
        this.datas.fakeDatas();
    }
    ImgChange = (event : any) => {
        event.preventDefault();

        let reader = new FileReader();
        if (event.target.files) {
            reader.readAsDataURL(event.target.files[0]);
        }
        reader.onloadend = () => {
        const base64 = reader.result;
            if (base64) {
                this.setState({img : base64.toString()});
            }
        };
    }
    NameChange = (e: {target: { value: React.SetStateAction<string> }}) => {
        this.setState({name : e.target.value.toString()});
    };
    AddList = () => {
        this.datas.addDatas(this.state);
        this.stateInit();
    }
    render(){
        return(
            <>
                <table>
                    <tr>
                        <td>Showing datas</td>
                    </tr>
                    {this.datas.getDatas().map(
                        data =>
                            <tr>
                                <td><img className = "ListsDataImg" src = {data.img}/></td>
                                <td>{data.name}</td>
                                {/* <td>{data.checking}</td> */}
                            </tr>
                        )
                    }
                    <tr>
                        <td>Input data</td>
                    </tr>
                    <tr>
                        <td>
                            <img className = "ListsDataImg" src = {this.state.img}/>
                            <input className = "ListsInputImg" type="file" onChange={this.ImgChange}/>
                        </td>
                        <td><input type="text" value={this.state.name} onChange={this.NameChange}/></td>
                        <td><button onClick={this.AddList}>등록</button></td>
                    </tr>
                </table>
            </>
        )
    }
}

export default Lists;