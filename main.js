const localStorageKey = 'IsThisFirstTime_Log_From_LiveServer'

function validanewtask()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputvalue = document.getElementById('new-task-input').value
    let existe = values.find(x => x.name === inputvalue)
    return !existe ? false : true
}


function newtask() {
    let input = document.getElementById('new-task-input')
    input.style.border =""

    //validação
    if (!input.value){
        input.style.border ="1px solid red"
        alert("digite algo para inserir uma nova Task")
    }
     else if(validanewtask())
        {
            alert('Já existe uma task com essa descrição!!!')
     }
    else{
        //increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values));
        showvalues()
    }
    input.value =''
}

//mostrar valores
function showvalues() {
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
    let list = document.getElementById('listas');
    list.innerHTML = ''; // Limpa o conteúdo da lista antes de adicionar novos itens

    for (let i = 0; i < values.length; i++) {
        list.innerHTML += `<li>${values[i]['name']}<button id="btn-ok" onclick="removeItem('${values[i]['name']}')">ok</button></li>`;
    }
}
// remoçao de item
function removeItem(data)
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showvalues()

}

showvalues()

