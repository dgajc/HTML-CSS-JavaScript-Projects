// 取出panel
const panels = document.querySelectorAll('.panel')

// 被點擊時移除舊的panel並且啟用新的panel
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClassses();
        panel.classList.add('active');
    })
})
 
// 移除舊的panel
function removeActiveClassses() {
    panels.forEach(panel=>
    {
        panel.classList.remove('active')
    })
}