const Error = () => {
  return (
    <>
      <div className="contain" style={{backgroundColor:"#95c2de"}}>
        <div className="mainbox" style={{backgroundColor:"#95c2de",
                                      margin:"auto",
                                      height:"600px",
                                      width:"600px",
                                      position:"relative"}}>
        <div className="err" style={{color:"#ffffff",
                                      fontSize:"11rem",
                                      position:"absolute",
                                      left:"20%",
                                      top:"8%"}}
          >4</div>
        <div className="far" style={{position:"absolute",
                                      fontSize:"11rem",
                                      left:"45%",
                                      top:"8%",
                                      color:"#ffffff"}}
          >0</div>
        <div className="err2" style={{color:"#ffffff",
                                      fontSize:"11rem",
                                      position:"absolute",
                                      left:"68%",
                                      top:"8%"}}
          >4</div>
        <div className="msg" style={{textAlign:"center",
                                      fontSize:"1.6rem",
                                      position:"absolute",
                                      left:"16%",
                                      top:"45%",
                                      width:"75%"}}
          >Trang bạn tìm không có? Nó đã bị xóa? Nó đã bị thay thế? Hoặc không đúng?<p>Hãy đến <a href="/" style={{textDecoration:"none",color:"white"}}>Trang chủ</a> và thử lại.</p></div>
          </div>
          </div>
    </>
  )
}
export default Error