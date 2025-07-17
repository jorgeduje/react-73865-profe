export const CustomButton = ({ texto, unaFuncion }) => {
  // let { texto, unaFuncion } = props;
  return (
    <button
      style={{
        backgroundColor: "steelblue",
        color: "white",
        padding: "12px",
        border: "none",
        borderRadius: "12px",
      }}
      onClick={unaFuncion}
    >
      {texto}
    </button>
  );
};

// const sumar = ( a, b, c, r )=>{
//     return a + b + c
// }

// sumar( 12, 15, 12, 2 ) --> 4

// const sumar = ( {numeroUno: 12, a: 17, b:15 })=>{

// }

// sumar(12, 17, 15)
// <Sumar numeroUno={12} a={17} b={15}/>
