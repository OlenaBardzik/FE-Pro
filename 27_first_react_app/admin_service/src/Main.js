import MainItem from "./MainItem";

export default function Main () {
    const mainItems = [
        {title: 'Activity'},
        {title: 'Latest spendings'},
        {title: 'Order List'}
    ];
    
    return (
        <main className="main-list">
            <MainItem>{mainItems[0]}</MainItem>
            <MainItem>{mainItems[1]}</MainItem>
            <MainItem>{mainItems[2]}</MainItem>
        </main> 
    )
}