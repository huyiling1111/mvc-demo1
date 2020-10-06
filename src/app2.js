import $ from 'jquery'
import './app2.css'
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
$tabBar.on('click', 'li', e => {
    const $li = $(e.currentTarget);

    const index = $li.index()
    $tabBar.children().eq(index).addClass('selected').siblings().removeClass('selected')
    console.log(index)
    $tabContent.children().eq(index).addClass('active').siblings().removeClass('active')
    // 找到tabContent的儿子们的第index个的css设置为display block 而兄弟们设置display none
})
//事件委托