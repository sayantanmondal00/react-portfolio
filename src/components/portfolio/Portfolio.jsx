import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { featuredPortfolio, webPortfolio, mlPortfolio, designPortfolio, contentPortfolio} from "../../data.js";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "websites",
            title: "Websites",
        },
        {
            id: "ml",
            title: "ML & AI",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    useEffect(() => {
        switch(selected){
            case "featured": setData(featuredPortfolio); break;
            case "websites": setData(webPortfolio); break;
            case "ml": setData(mlPortfolio); break;
            case "design": setData(designPortfolio); break;
            case "content": setData(contentPortfolio); break;
            default: setData(featuredPortfolio);
        }
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>
                My Projects
            </h1>
            <ul>
                {list.map((item)=>(
                    <PortfolioList 
                        title={item.title} 
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>

            <div className="container">
                {data.map((d) => (    
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}    
            </div>
        </div>
    )
}
 