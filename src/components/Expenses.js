import ExpenseItem from "./ExpenseItem"

function Expenses(props){

    console.log(props)
    const expendatureData = props.data
    const expendatureItemData = expendatureData.map((el)=>{
        return(
            <ExpenseItem
                key={el.id}
                title = {el.title}
                amount = {el.amount}
                date = {el.date}
            />
        )
    })

    return<div>{expendatureItemData}</div>
        
// 
    // return(
    //     <div className="expenses_block">
    //         <h1>Expandatures</h1>
    //         <ExpenseItem title={props.data[0].title} amount={props.data[0].amount} date={props.data[0].date} />
    //         <ExpenseItem title={props.data[1].title} amount={props.data[1].amount} date={props.data[1].date} />
    //         <ExpenseItem title={props.data[2].title} amount={props.data[2].amount} date={props.data[2].date} />
    //         <ExpenseItem title={props.data[3].title} amount={props.data[3].amount} date={props.data[3].date} />  
    //     </div>
    // )
}

export default Expenses