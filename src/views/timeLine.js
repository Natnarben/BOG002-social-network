export function timeLine(){
    const htmlTimeLine = `
    <p >Aqui van las publicaciones</p>
    `

    const timeLineView = document.createElement("section");
    timeLineView.className = "timeLineClass";
    timeLineView.innerHTML =  htmlTimeLine;
    return timeLineView ;
}