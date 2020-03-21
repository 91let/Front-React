import React from "react";
import {Datas, DataProps} from '../common/datas';
import './Lists.css';

class Lists extends React.Component<[], {Datas : DataProps[], insertData : DataProps}>{
    datas : Datas;
    constructor(props : []){
        super(props);
        this.datas = new Datas;
    }
    stateInit(){
        this.setState({
            Datas : this.datas.getDatas(),
            insertData : {
                img : "",
                name : "",
                checking : false,
            }
        })
    }
    setImg(img : string){
        this.setState({
            Datas : this.state.Datas,
            insertData : {
                img : img,
                name : this.state.insertData.name,
                checking : false,
            }
        })
    }
    setName(name : string){
        this.setState({
            Datas : this.state.Datas,
            insertData : {
                img : this.state.insertData.img,
                name : name,
                checking : false,
            }
        })
    }
    setCheck(name : string){
        const tmp : DataProps[] = [];
        this.state.Datas.map(
            data => {
                if(data.name === name) tmp.push({name : data.name, img : data.img, checking : !data.checking})
                else tmp.push(data)
            }
        )
        this.setState({
            Datas : tmp,
            insertData : this.state.insertData
        })
    }
    componentWillMount(){
        this.stateInit();
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
                this.setImg(base64.toString());
            }
        };
    }
    NameChange = (e: {target: { value: React.SetStateAction<string> }}) => {
        this.setName(e.target.value.toString());
    };
    AddList = () => {
        this.datas.addDatas(this.state.insertData);
        this.stateInit();
    }
    render(){
        return(
            <>
                <table>
                    <tr>
                        <td>Showing datas</td>
                    </tr>
                    {this.state.Datas.map(
                        data =>
                            <tr>
                                <td><img className = "ListsDataImg" src = {data.img !== "" ? data.img : "/logo512.png"}/></td>
                                <td>{data.name}</td>
                                <td><input type="checkbox" onChange={() => this.setCheck(data.name)}/></td>
                            </tr>
                        )
                    }
                    <tr>
                        <td>Input data</td>
                    </tr>
                    <tr>
                        <td>
                            <img className = "ListsDataImg" src = {this.state.insertData.img !== "" ? this.state.insertData.img : "/logo512.png"}/>
                            <input className = "ListsInputImg" type="file" onChange={this.ImgChange}/>
                        </td>
                        <td><input type="text" value={this.state.insertData.name} onChange={this.NameChange}/></td>
                        <td><button onClick={this.AddList}>등록</button></td>
                    </tr>
                </table>
            </>
        )
    }
}

export default Lists;