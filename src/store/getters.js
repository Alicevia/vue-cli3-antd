export default {
    pages(state,getters){
        let {iconList} = state
        let pages = []
        iconList.forEach((item,index)=>{
 
             let page = Math.floor(index/8)
             if (!pages[page]) {
                 pages[page] =[]
             }
             pages[page].push(item)
        })
        return pages
     },
}