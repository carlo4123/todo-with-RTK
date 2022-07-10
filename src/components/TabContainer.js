import { TabItem, TabWrapper } from "./styles/TabContainer.styled";
const TabContainer = ({sort, setSort}) => {
  return ( 


   
    <TabWrapper>
            <TabItem onClick={ ()=>setSort('all')} sort={sort} tabName="all" >All</TabItem>
            <TabItem onClick={ ()=>setSort('active')} sort={sort} tabName="active">Active</TabItem>
            <TabItem onClick={ ()=>setSort('completed')} sort={sort} tabName= "completed">Completed</TabItem>
    </TabWrapper>
         
   );
}
 
export default TabContainer;