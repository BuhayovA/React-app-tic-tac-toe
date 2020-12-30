import React from 'react'
import style from "./Square.module.css"



const Square = (props) => {
  return (
      <div className={style.square} onClick={props.onClick}>
        {props.value}
      </div>
  );
}



export default Square;








// export class Square extends React.Component {

//     render() {
//         return (
//             <button className={style.square}
//                     onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }
