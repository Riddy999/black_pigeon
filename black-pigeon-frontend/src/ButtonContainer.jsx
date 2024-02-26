function ClassicButton({logo}) {
    const path = "../src/assets/"+logo+".svg";
    var active = false;
    function additionalIcons() {
      active = !active
    }

    return (
          <button onClick={additionalIcons} className="flex-none w-16 h-16 bg-red-600 z-[1000] rounded-xl">
            <img className="mx-auto" src={path} alt="asdfasdfasdf"/>
          </button>
    )
  }



function ButtonContainer() {
    
    return (
          <div className="flex flex-row-reverse gap-2 w-full h-auto bg-slate-500 z-[1000] p-2 bottom-0 relative overflow-x-auto button-container">
              <ClassicButton logo={'plus'}/>
              <ClassicButton logo={'react'}/>
              <ClassicButton logo={'plus'}/>
              <ClassicButton logo={'react'}/>
              <ClassicButton logo={'plus'}/>
              <ClassicButton logo={'react'}/>
          </div>
    )
  }
  
  export default ButtonContainer
  