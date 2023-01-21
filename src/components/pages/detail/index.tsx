import { useContext, useEffect, useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { getCurrentMonth, formatCurrentMonth, filterByMonth } from '../../utils/dateFilter';
import CardDetail from "../../iconFaces/CardDetail";
import { Header } from "../../header";
import { ApiDataContext } from "../../../context/getUserContext";
import { getActibitiesByUser } from "../../../services/activities/GetActibitiesByUser";

type ActivityProp = {
  _id: string;
  date: string;
  category: string;
  description: string;
  cash:string;
  status: string;
};

const Detail = () => {
  const id = useContext(ApiDataContext);
  const [activities, setActivities] = useState<ActivityProp[]>([]);
  const [filtered, setFilteredList] = useState<ActivityProp[]>([]);
  const [currentMonth, setCurrentMont] = useState(getCurrentMonth());

  useEffect(() => {
    getActibitiesByUser(id).then((res) => {
      setActivities(res);
      console.log(activities);
      console.log(id);
    })

  }, [id]);

  useEffect(() => {
    setFilteredList( filterByMonth(activities, currentMonth) );

  }, [activities, currentMonth]);

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
    setCurrentMont(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() + 1 );
    setCurrentMont(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }


  return (
    <>
      <Header />
      
      <div
        className="h-full bg-white px-5
        
      "
      >
        <div className="w-full flex flex-col items-center">
          <div className="flex items-center justify-between w-full">
          <Link to="/dashboard"><TiArrowLeftThick /></Link>
            <p className="text-center my-8 font-semibold w-full">
              Balanço detalhado
            </p>
          </div>

          <div className="w-full border p-5 mb-3 font-semibold flex items-center justify-between">
            <div className="w-5 h-5 bg-green-500 flex items-center justify-center
             rounded-full text-white "
            >
              <TiArrowLeftThick onClick={handlePrevMonth} />
            </div>
            {formatCurrentMonth(currentMonth)}
            <div className="w-5 h-5 bg-green-500 flex items-center justify-center 
             rounded-full text-white "
            >
              <TiArrowRightThick onClick={handleNextMonth} />
            </div>
          </div>

          <div className="w-full h-72 mt-3 border overflow-y-auto">

            {filtered.map(item => (
              <>
                {console.log(item)}
                <CardDetail
                  key={item._id}
                  date={item.date} 
                  category={item.category} 
                  description={item.description}
                  cash ={item.cash}
                  status={item.status}
                />
              </>
            ))}
            
            
          </div>

        </div>
        
      </div>
      
    </>
  );
};

export default Detail;
