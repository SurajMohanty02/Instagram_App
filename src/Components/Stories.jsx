import React, { useContext, useState } from "react";
import { StateContext } from "./DataLayer/StateProvider";
import "./Stories.css";
const Stories = () => {
  const [stories, setstories] = useState([
    {
      id: 1,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/125421417_159842952485117_5301497841929600204_n.jpg?_nc_cat=104&ccb=2&_nc_sid=825194&_nc_ohc=giszssetPfMAX8zKX44&_nc_ht=scontent.fbbi1-1.fna&oh=7c957e099a5eb928597a57d26ff57087&oe=5FDB3F01",
      name: "subhasis_pradhan",
    },
    {
      id: 2,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/126184094_414599189702079_5338470791002951082_o.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=a5Mo5Y87k34AX91k7qb&_nc_ht=scontent.fbbi1-2.fna&oh=25c2d7da4c4287a048a59c880526a850&oe=5FDA6208",
      name: "Simon_chaudhary",
    },
    {
      id: 3,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/p843x403/125562149_705500210369453_6933078858309611212_o.jpg?_nc_cat=100&ccb=2&_nc_sid=825194&_nc_ohc=GguA9Itg3bQAX_Uvp3r&_nc_ht=scontent.fbbi1-1.fna&tp=6&oh=0a0ed67344807332445516978db2e784&oe=5FD8B927",
      name: "jay ganesh",
    },
    {
      id: 4,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/125766755_1557219271129654_7570256193577968569_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8bfeb9&_nc_ohc=1EuSg0YrGToAX-3Es6r&_nc_ht=scontent.fbbi1-1.fna&oh=5f07afa3f8a14ee0fbff88c4fbe4a546&oe=5FDC0CC8",
      name: "Awesome_Flowers",
    },
    {
      id: 5,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/s960x960/124105585_3518056634897899_7088547968386716812_o.jpg?_nc_cat=1&ccb=2&_nc_sid=1cb0a9&_nc_ohc=a0MteGxyk3kAX-h3zRg&_nc_ht=scontent.fbbi1-1.fna&tp=7&oh=a92c27f246be41270bb7f0e27b20b223&oe=5FDC1DB5",
      name: "React_is_Love",
    },
    {
      id: 6,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/125421417_159842952485117_5301497841929600204_n.jpg?_nc_cat=104&ccb=2&_nc_sid=825194&_nc_ohc=giszssetPfMAX8zKX44&_nc_ht=scontent.fbbi1-1.fna&oh=7c957e099a5eb928597a57d26ff57087&oe=5FDB3F01",
      name: "maa_Tarini",
    },
    {
      id: 7,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/126184094_414599189702079_5338470791002951082_o.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=a5Mo5Y87k34AX91k7qb&_nc_ht=scontent.fbbi1-2.fna&oh=25c2d7da4c4287a048a59c880526a850&oe=5FDA6208",
      name: "jay jagannath",
    },
    {
      id: 8,
      image:
        "https://scontent.fbbi1-1.fna.fbcdn.net/v/t1.0-9/125421417_159842952485117_5301497841929600204_n.jpg?_nc_cat=104&ccb=2&_nc_sid=825194&_nc_ohc=giszssetPfMAX8zKX44&_nc_ht=scontent.fbbi1-1.fna&oh=7c957e099a5eb928597a57d26ff57087&oe=5FDB3F01",
      name: "maa_Tarini",
    },
    {
      id: 9,
      image:
        "https://scontent.fbbi1-2.fna.fbcdn.net/v/t1.0-9/126184094_414599189702079_5338470791002951082_o.jpg?_nc_cat=109&ccb=2&_nc_sid=8bfeb9&_nc_ohc=a5Mo5Y87k34AX91k7qb&_nc_ht=scontent.fbbi1-2.fna&oh=25c2d7da4c4287a048a59c880526a850&oe=5FDA6208",
      name: "jay jagannath",
    },
  ]);

  const { statusdata, openpreview } = useContext(StateContext);
  const truncate = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
  };
  const senddata = (data) => {
    openpreview();
    statusdata(data);

    //console.log(data);
  };
  return (
    <section>
      <div className="story">
        {stories.map((image) => (
          <div className="story__container" key={image.id}>
            <div className="story__image" onClick={() => senddata(image)}>
              <img src={image.image} alt="" />
            </div>
            <span>{truncate(`${image.name}`, 8)}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stories;
