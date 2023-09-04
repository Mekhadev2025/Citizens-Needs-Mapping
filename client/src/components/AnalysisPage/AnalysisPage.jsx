 // src/components/AnalysisPage.js
import axios from "axios"
import React,{useState,useEffect} from 'react';
import "../AnalysisPage/Analysis.css"
import Card from "../../components/Card/Card"
 
const AnalysisPage = ({ selectedDistrict }) => {

  const basicNeeds=['Primary School', 'Public Toilet', 'Street Light', 'Health clinic', 'Municipal Water Supply', 'Road Reconstruction', 'Avoid Powercuts']
  console.log("selceted",selectedDistrict)
  const[propsData,setPropsData]=useState({})
  const [selectedButton,setSelectedButton]=useState("basic")

  const fetchData=async(districtId) =>{
    try {
      const response = await axios.get(`https://citizens-needs-mapping-whzj.vercel.app/api/surveys/${districtId}`);
      const data = response.data;
  
      setPropsData(data)
   
    } catch (error) {

      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchData(selectedDistrict);
  }, [selectedDistrict]);


  const basic=propsData.basicNeeds;
  console.log("baisic",basic)

  const basicNeed=[{
    need:"Public School",
    vote:"13",
    value:"75"
  },
  {
    need:"Public Toilet",
    vote:"15",
    value:"80"
  },
  {
    need:"StreetLight",
    vote:"13",
    value:"75"
  },
  {
    need:"Health Clinic",
    vote:"10",
    value:"60"
  },
  {
    need:"Municipal Water Supply",
    vote:"3",
    value:"10"
  },
  {
    need:"Road Reconstruction",
    vote:"7",
    value:"30"
  },{
    need:"Avoid Powercuts",
    vote:"20",
    value:"90"
  }
  
]


//    Primary School{

//    }, 'Public Toilet', 'Street Light', 'Health clinic', 'Municipal Water Supply', 'Road Reconstruction', 'Avoid Powercuts']
// ]

const stdNeed=[{
  need:"Public Library",
  vote:"13",
  value:"75"
},
{
  need:"Taxi Service",
  vote:"15",
  value:"80"
},
{
  need:"Public Parks And Playgrounds",
  vote:"13",
  value:"75"
},
{
  need:"Traffic Control",
  vote:"10",
  value:"60"
},

{
  need:"Night patrol",
  vote:"7",
  value:"30"
},{
  need:"Bus Waiitng Shed",
  vote:"20",
  value:"90"
},{
  need:"Better Disaster Prevention Schemes",
  vote:"3",
  value:"10"
},

]

const preNeed=[{
  need:"Gym",
  vote:"11",
  value:"88"
},
{
  need:"Theatre",
  vote:"15",
  value:"30"
},
{
  need:"Tourist Resorts",
  vote:"13",
  value:"75"
},
{
  need:"Metro Rail services",
  vote:"10",
  value:"60"
},
{
  need:"Free Wifi",
  vote:"3",
  value:"10"
},
{
  need:"Turf",
  vote:"7",
  value:"30"
}
]
  const handleButton=(btnName)=>{
   setSelectedButton(btnName)
  }
  return (
    <div>
      <h2 className='districtName'>{selectedDistrict}</h2>
      <div className="btnGrp">
        <button  className={`basic ${selectedButton === 'basic' ? 'active-button' : ''}`}
         onClick={()=>handleButton("basic")}>Basic</button>
        <button className={`std ${selectedButton === 'standard' ? 'active-button' : ''}`}
         onClick={()=>handleButton("standard")}>Standard</button>
        <button className={`premium ${selectedButton === 'premium' ? 'active-button' : ''}`}
        onClick={()=>handleButton("premium")}>Premium</button>
      </div>
      <div className='analysisCard'>
         <h2 className='analysisTitle'>
        {selectedButton} Needs
         </h2>
         <div className="analysisCont">
            {/* <Card need="Public School" vote="13" value="75" />
            <Card need="Public toilet" vote="5" value="50" /> */}
           {
              selectedButton==="basic"?(basicNeed.map((item)=>{
                return <Card need={item.need} vote={item.vote} value={item.value}/>
              })):(
                selectedButton==="standard"?(stdNeed.map((item)=>{
                  return <Card need={item.need} vote={item.vote} value={item.value}/>
                })):(preNeed.map((item)=>{
                  return <Card need={item.need} vote={item.vote} value={item.value}/>
                })
                  
                )
                
                
              )
           }

         </div>
      </div>
    </div>
  );
};

export default AnalysisPage;