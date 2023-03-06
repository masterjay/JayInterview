import EventMouse = cc.Event.EventMouse;

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;
    @property(cc.Label)
    label:cc.Label = null;
    @property(cc.Button)
    btnChangeColor = null;
    @property(cc.Button)
    btnChangeLabel = null;
    @property(cc.EditBox)
    textInput = null;

    @property(cc.Node)
    btns:cc.Node[] = [];

    start () {
        this.textInput.string = 2;
        this.promiseTest1();

        for(let i = 0 ; i < this.btns.length;i++)
        {
            this.btns[i].on(cc.Node.EventType.TOUCH_START, (e: cc.Event.EventTouch) => {

                console.log("sdfsaf:"+i);
            })

        }

        function job(state){
            return new Promise((resolve,reject)=>{
                if(state)
                {
                    resolve('success');
                }else{
                    reject('error');
                }
            })
        }
        let promise = job(true)
        promise.then((data)=>{
            console.log(data)
            return job(true)
        }).then((data)=>{
            if(data !== "victory")
            {
                throw 'Deafeat'
            }
            return job(true)
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
            return job(false)
        }).then((data)=>{
            console.log(data)
            return job(true)
        }).catch((err)=>{
            console.log(err)
            return 'Error caught'
        }).then((data)=>{
            console.log(data);
            return new Error("test")
        }).then((data)=>{
            console.log("Success",data.message);
        }).catch((data)=>{
            console.log("Error",data.message)
        })
    }

    async onClickChangeColor(){
        this.btnChangeColor.interactable = false;
        await this.changeColor("#D5AB69");
        await this.changeColor("#369BFF");
        await this.changeColor("#D5AB69");
        await this.changeColor("#369BFF");
        await this.changeColor("#D5AB69");
        await this.changeColor("#369BFF");
        this.btnChangeColor.interactable = true;
    }

    changeColor(color) {
       return new Promise(resolve => {
           this.sprite.node.color = new cc.Color().fromHEX(color);
           setTimeout(function (){
               resolve(true);
           },1000)
        })
    }

    async onClickChangeLabel(){
        let totalTime = parseFloat(this.textInput.string);
        if(isNaN(totalTime)){
            return;
        }
        this.btnChangeLabel.interactable = false;
        this.label.node.color = new cc.Color().fromHEX("#ffffff")
        let t1 = new Date().getTime()
       // cc.log("t1："+t1);
        let targetDateTime = new Date().getTime()+ totalTime*1000;
        let halfDateTime = new Date().getTime()+ totalTime/2*1000;
        while (new Date().getTime() < targetDateTime)
        {
            await this.changeLabel(totalTime,targetDateTime,halfDateTime);
        }
        this.label.string = totalTime.toString();
        this.btnChangeLabel.interactable = true;
        let t2 = new Date().getTime()
       // cc.log("t2："+t2);
        cc.log("執行時間："+(t2-t1)/1000);
    }

    changeLabel(totalTime,targetDateTime,halfDateTime){
        return new Promise(resolve => {
            let now = new Date().getTime();
            let percent = 1-((targetDateTime-now)/1000/totalTime);
           // cc.log(percent)
            this.label.string = (totalTime*percent).toFixed(2);
            if(now >= halfDateTime)
            {
                this.label.node.color = new cc.Color().fromHEX("#80FF67");
            }
            setTimeout(function (){
                resolve(true);
            },10)
        })
    }

    promiseTest1(){
        cc.log(1)
        setTimeout(function (){
            cc.log(2)
        },1000)
        setTimeout(function (){
            cc.log(3)
        },0)
        new Promise((resolve ,reject)=> {
            cc.log(4)
            resolve(5)
        }).then((foo)=>{
            cc.log(6)
        })
        cc.log(7)
    }





}
