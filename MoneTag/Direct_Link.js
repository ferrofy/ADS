function Monetag_Link(Clicks, Link = "https://uplcm.com/4/10648428", Text = "Click Me", Container = GetMonetagLinkContainer()) {
    let Click = 0
    const Button = document.createElement('button')
    Button.innerText = Text
    Button.addEventListener("click", () => {
        if (Click < Clicks) {
            window.open("https://uplcm.com/4/10648428", "_blank")
        } else {
            window.open(Link)
        }
        Click++
    })
    Container.appendChild(Button)

}

function GetMonetagLinkContainer() {
    return document.currentScript && document.currentScript.parentElement || document.body;
}