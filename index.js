const masterFruitData=[
    {   //data showed so commenting
        id:0,
        fruitName:"apple",
        fruitPrice:20
    },
    {   //data showed so commenting
        id:1,
        fruitName:"orange",
        fruitPrice:20
    }
];
let i=2;
let id_value=0;
let togglevalue=true

    const resultData=document.getElementById('resultData')
    const fruitName=document.getElementById('fruitName')
    const fruitPrice=document.getElementById('fruitPrice')

    

    function displayAllFruitElements(){
        resultData.innerHTML=""
        if(togglevalue){
            masterFruitData.map(item=> showFruitData(item))
        }
    }

    displayAllFruitElements()
    
    function toggleFruitData(){
        if(togglevalue===true)
        {
            togglevalue=false
            displayAllFruitElements()
        }
        else{
            togglevalue=true
            displayAllFruitElements()
        }

    }

    function showFruitData(item){
        output=
        `<div class="row" style="display:flex; ">
            <div class="col" style="width:10%;">${item.fruitName}</div>
            <div class="col" style="width:10%;">${item.fruitPrice}</div>
            <div class="col" style="width:10%;">
                <button onclick="editFruitData(${item.id})" >Edit</button>
                <button onclick="delFruitData(${item.id})" >Delete</button>
            </div>
        </div>`
        resultData.innerHTML+=output
        //result is showing.
    }

    function addFruitData(){
        let inputValue={
            id:i,
            fruitName:fruitName.value,
            fruitPrice:fruitPrice.value
        };
        i=i+1;
        masterFruitData.push(inputValue)
        // console.log(masterFruitData)
        displayAllFruitElements()
    }

    function editFruitData(id){
        console.log(id)
        fruitName.value=masterFruitData[id].fruitName;
        fruitPrice.value=masterFruitData[id].fruitPrice;
        id_value=id
    }

    function updateFruitData(){
        masterFruitData[id_value].fruitName=fruitName.value
        masterFruitData[id_value].fruitPrice=fruitPrice.value
        displayAllFruitElements()
    }

    function delFruitData(id){
        masterFruitData.splice(id,1)
        displayAllFruitElements()
    }




