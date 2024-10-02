let cat = document.getElementById('category')
let subcat = document.getElementById('subcategory')

const changeSubcat = ()=>{
    let catid = cat.value
    fetch('/product/getSubcategory/'+catid)
        .then((res)=>res.json())
        .then((result)=>{
            let tr = '<option>--Select Subcategory--</option>'
            result.map((i)=>{
                tr += `<option value='${i._id}'>${i.sname}</option>`
            })
            subcat.innerHTML = tr
        })
        .catch((err)=>console.log(err))   
}
