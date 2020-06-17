import React from "react";
// export function Image(props) {
//     return(
//         <div {...props}>
//             <p>This is a placeholder</p>
//         </div>
//     )
// }

export function List({ children }) {
    return(
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    )
}

export function ListItem({ children }) {
return <li className="list-group-item">{children}</li>
}

export function Container({ fluid, children }) {
    return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Brick({data}){
    console.log(data)
    return(
       
        <div className="par" id="background" style={{width: "100%", margin: "10px",family:"Arial,Helvetica,serif",boxShadow:"10px 10px 10px lightGray"}}>
            <div className="paragraph">
            <h4>{data.person}</h4>
            <p>{data.quote}</p>
            {/* <img className="img" style={{width:"20%", float: "right", marginLeft: "20px", height: "150px"}} src={data.image} alt={`${data.user}'s image of their problem`} /> */}
            </div>
            
        </div>
    );
}

export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

export function Col({ size, children }) {
    return (
      <div
        className={size
          .split(" ")
          .map(size => "col-" + size)
          .join(" ")}
      >
        {children}
      </div>
    );
}
