
const colors = [
    // [253,253,3,0],//yellow
    [67,76,73,1],
    [99,105,93,1],
    [178,173,169,1],
    [22,20,18,1],
    [10,40,50,1],
    [140,132,139,1],
    [87,76,63,1],
    [173,166,167,1],
    [48,35,46,1]
]

export function setupCounter(element) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext("2d")
    const image = new Image(30,25)
    image.src = "./test1.png"

    canvas.width = window.screen.width
    canvas.height = window.screen.height

    ctx.drawImage(image, 0, 0)

    const btn = document.getElementById('btn')
    btn.onclick = function () {
        const canvasData = ctx.getImageData(0,0,canvas.width,canvas.height)
        const pix = canvasData.data

        for (let a =0;a<colors.length;a++) {
            console.log('Menghapus',`Hex ${colors[a]}`)
            const color = colors[a]
            for (let i = 0, n = pix.length; i < n; i += 4) {
                console.log("processing")
                if (pix[i] === color[0] && pix[i + 1] === color[1] && pix[i + 2] === color[2]) {
                    pix[i + 3] = 0;
                }
            }
        }
        ctx.putImageData(canvasData,0,0)
        element.appendChild(canvas)
    }


}