{
    let view = {
        el: document.querySelector("#box"),
        template: `<div class="From-swapper">
                        <div class="header">这里是表头</div>
                        <div>  </div>
                    </div>`,
        render(data){
            this.el.innerHTML=this.template
        }
    }
    let model = {
        data: {

        }
    }
    let controller = {
        init(view, model) {
            this.view = view
            this.model = model
            this.view.render()
            this.bindEvents()
        },
        bindEvents() {
            let addFrom = document.querySelector("#addFrom")
            addFrom.addEventListener("click",  ()=> {
                this.view.createElement("li")
                this.view.createElement("div")
            })
        }
    }
    controller.init(view, model)
}