import { connect } from 'react-redux'
import OrderMes from '../components/OrderMes'
import data from '../reducers/data.json'

 
const mapStateToProps = (state) => {
    return ({
        title:"被保人",
        insuredsData: state.insuredsData,
        name: state.insuredsData.insuName,
        phone: state.insuredsData.insuPhone,
        certiNo: state.insuredsData.insuIdNum,
        email: state.insuredsData.insuEmail,
        effictive: state.insuredsData.insuValidDateEnd,
        address: state.insuredsData.insuProvinceName+" "+state.insuredsData.insuCityName+" "+state.insuredsData.insuCountyName,
        location: state.insuredsData.insuPermanentAddress,
      
        forInsuredPerson: data.forInsuredPerson.map((item,index)=>{if(state.insuredsData.relationsWithCustomer===item.value){return item.label}}), 
        jobCategory: state.occupation.occupationCategoryName,
    })
}

 

const HolderContainer = connect(
    mapStateToProps
    
)(OrderMes)

export default HolderContainer