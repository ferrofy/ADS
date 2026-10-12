const Button = document.createElement('button')

function Link(Clicks, Link = "https://uplcm.com/4/10648428", Text = "Click Me") {
    let Click = 0
    Button.innerText = Text
    Button.addEventListener("click", () => {
        if (Click < Clicks) {
            window.open("https://uplcm.com/4/10648428", "_blank")
        } else {
            window.open(Link)
        }
        Click++
    })
    document.body.appendChild(Button)

}