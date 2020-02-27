import React from "react";
import Datas from '../common/datas';

class Lists extends React.Component{
    datas : Datas;
    constructor(props : any){
        super(props);
        this.datas = new Datas;
    }
    componentWillMount(){
        this.datas.initDatas();
        this.datas.fakeDatas();
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
                                <td>{data.img}</td>
                                <td>{data.name}</td>
                                {/* <td>{data.checking}</td> */}
                            </tr>
                        )
                    }
                </table>
            </>
        )
    }
}

export default Lists;