export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] =currentMonth.split('-');
    let months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];

    return `${months[parseInt(month) - 1]} de ${year}`;
}

export const formatDate = (dateString: string) => {
  let date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("pt-BR", {
    day: "2-digit", 
    month: "2-digit", 
    year: "numeric"
  });
  return formattedDate;
}

type ActivityProp = {
  _id: string;
  date: string;
  category: string;
  description: string;
  cash:string;
  status: string;
};

export const filterByMonth = (activity: ActivityProp[], date: string): ActivityProp[]=> {
  let newList: ActivityProp[] = [];
  let [year, month] = date.split('-');

  for(let i in activity) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    let getYear = new Date(activity[i].date).getFullYear();
    let getMonth = new Date(activity[i].date).getMonth() + 1;

    if(getYear === parseInt(year) && getMonth === parseInt(month)) {
      newList.push(activity[i]);
    }
  }

  return newList;
}

export const currentDay = (dateStored: string): string => {
  let date = new Date(dateStored);
  let newDate = new Date(date.getTime() + 24*60*60*1000);

  return String(newDate);
}