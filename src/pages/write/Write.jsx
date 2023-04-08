import "./write.css";
import writeImg from "../../components/Image/writeImg.png"
import Postslist from "../../components/posts/Postslist";
export default function Write() {
    const handlePublish=()=>{
        const {img, title, content} = document.forms[0]
        if(!Postslist.find((story)=>story.title===title)){
            Postslist.push({img, title, content})
        }
    }
    return (
        <div className="write">
            <img
                className="writeImg"
                src={writeImg}
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input 
                        id="fileInput" 
                        name="img"
                        type="file" 
                        style={{ display: "none" }} />
                    <input
                        className="writeInput"
                        placeholder="Tiêu đề"
                        name="title"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Ngày xửa ngày xưa..."
                        name="content"
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className="writeSubmit" type="submit" onClick={handlePublish}>
                    Xuất bản
                </button>
            </form>
        </div>
    );
}