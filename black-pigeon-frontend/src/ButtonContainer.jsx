function ClassicButton() {

    return (
          <button className="w-16 h-16 bg-red-600 z-[1000] inline-block m-2">
              asdf
          </button>
    )
  }

function ButtonContainer() {

    return (
          <div className="w-full h-auto bg-slate-500 z-[1000] absolute">
              <ClassicButton/>
          </div>
    )
  }
  
  export default ButtonContainer
  