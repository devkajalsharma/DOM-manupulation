const insert = document.querySelector('.insert');
const button = document.querySelector('.button');

button.addEventListener('click', function(){
    
})

button.addEventListener('click', ()=>{
    insert.innerHTML = `<div class="table">
    <table>
        <tr>
            <th>key</th>
            <th>keycode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>key</td>
            <td>N/A</td>
            <td>N/A</td>
        </tr>
    
    </table>`
    })


window.addEventListener('keydown', (e)=>{
insert.innerHTML = `<div class="table">
<table>
    <tr>
        <th>key</th>
        <th>keycode</th>
        <th>code</th>
    </tr>
    <tr>
        <td>${(e.key === "" ? "space": e.key)}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>

</table>`
})