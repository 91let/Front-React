export interface DataProps{
    img : string,
    name : string,
    checking : boolean
}

export class Datas {

    private datas : DataProps[] = [];

    initDatas = () => {
        this.datas = [];
    }

    fakeDatas = () => {
        this.datas = [
            {
                img: "test",
                name : "test",
                checking : false,
            },
            {
                img: "for",
                name : "for",
                checking : false,
            }
        ];
    }

    addDatas = (data : DataProps) => {
        this.datas.push(data);
    }

    getDatas = () => {
        return this.datas;
    }

    checkData = (index : number) => {
        this.datas[index].checking = !this.datas[index].checking;
    }

    deleteData = () => {
        this.datas.map(data =>
            {
                if(data.checking) this.datas.splice(this.datas.indexOf(data), 1);
            }
        )
    }
}

export default Datas;