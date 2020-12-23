//1、定义根标签的字体大小，用于适配

function adapter() {
    const rootFz = document.documentElement.clientWidth * 100/375
    document.documentElement.style.fontSize = rootFz + 'px'
}

adapter()

window.onresize = adapter
