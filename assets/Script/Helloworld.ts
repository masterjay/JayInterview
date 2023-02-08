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

    start () {
        this.textInput.string = 2;
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
}
