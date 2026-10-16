function Adsterra_Link(Clicks, Link = "https://bendspecimen.com/th2dvsi0?key=25bad5ab5988e87a223ab74828d17970", Text = "Click Me", Container = document.body) {
    let Click = 0
    const Button = document.createElement('button')
    Button.innerText = Text
    Button.addEventListener("click", () => {
        if (Click < Clicks) {
            window.open("https://bendspecimen.com/th2dvsi0?key=25bad5ab5988e87a223ab74828d17970", "_blank")
        } else {
            window.open(Link)
        }
        Click++
    })
    Container.appendChild(Button)

}