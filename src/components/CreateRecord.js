import React from 'react'

import '../utils/app'

export default class CreateRecord  extends React.Component {
    state = {
        data: {
          title: '',
          type: '',
          comment: '',
          image:''
        },
      }
    handleImage = async(e) => {
      console.log(e.target.files)
      if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
          localStorage.setItem('record-image', reader.result);
        };
        await reader.readAsDataURL(e.target.files[0]);
        const { data } = { ...this.state };
        data['image'] = localStorage.getItem('record-image')
        this.setState({ data })
      }
    }
    handleInputChange = (e) => {
        const { data } = { ...this.state };
        data[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ data });
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { data } = this.state
        console.log(data)
    }
  render() {
      console.log(this.state)
    return (
      <section className="container-center">
        <div className="card">
            <div className="conatiner">
                <img id="img-preview"  />
            </div>
            <div className="upload-btn-wrapper" >
                <button className="btn-primary"><i className="fa fa-fw fa-camera"></i> </button>
                <input type="file" id="editImage" onChange={this.handleImage} />
            </div>
            <form id="form">
                <div id="flash"></div> 
                <input type="file" id="editImage" hidden />
                <div className="input-group">
                    <input type="text" name="title" onChange={this.handleInputChange} className="input" required="" placeholder="Title" />
                </div>
                <div className="input-group">
                    <select className="input" name="type" onChange={this.handleInputChange} >
                        <option value="">Record type</option>
                        <option value="red-flag">Red-flag</option>
                        <option value="intervention">Intervention</option>
                    </select>
                    <i className="fa fa-fw fa-question-circle tooltip">
                        <span className="tooltiptext">
                        A red-flag is an incident linked to curroption eg a public officer talking about curropt deeds. An intervention is a call to government agencies
                        eg. bad roads, drug abuse, bad traffic.
                        </span>
                    </i>
                </div>
                <div className="inputBox">
                    <textarea id="mytextarea" onChange={this.handleInputChange} className="input input-comment" name="comment" placeholder="Content here.."></textarea>
                </div>
                {/* <div className="input-group">
                    <button className="btn-primary">Get geolocation</button>
                </div> */}
                <div className="input-group">
                    <p id="geolocation-display"></p>
                </div>
                <div className="container-center">
                    <button id="create_btn" type="submit" onClick={this.handleSubmit}  className="btn-primary">Create <i className="fa fa-fw fa-plus-square"></i></button>
                </div>
            </form>
        </div>
      </section>
    )
    
  }
}