import React from 'react'
import Square from '../Square/Square';
import style from "./Board.module.css"

// const Board = () => {
//     const status = 'Next player: X'
//
//   return (
//       <div className={style.boardWrapper}>
//
//         <div className={style.statusBoard}>
//             {status}
//         </div>
//
//
//         <div className={style.boardRow}>
//           <Square value="0"/>
//           <Square value="1"/>
//           <Square value="2"/>
//       </div>
//       <div className={style.boardRow}>
//           <Square value="3"/>
//           <Square value="4"/>
//           <Square value="5"/>
//       </div>
//       <div className={style.boardRow}>
//           <Square value="6"/>
//           <Square value="7"/>
//           <Square value="8"/>
//       </div>
//       </div>
//   );
// }


class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
    }

    handleClick(i) {
        const squares = [...this.state.squares];
        /*console.log(this.state.squares);
        console.log(squares);*/
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}
        />;
    }

    render() {
        const status = `Следующий  ход: ${this.state.xIsNext ? 'X' : 'O'}`;

        return (
            <div>
                <div className={style.statusBoard}>{status}</div>
                <div className={style.boardRow} >
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className={style.boardRow}>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className={style.boardRow}>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}


export default Board;
