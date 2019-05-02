import React from 'react'
import { getRecords, createRecord } from '../actions/recordActions'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import Alert from './Alert'

class CreateRecord  extends React.Component {
    state = {
        data: {
          title: '',
          type: '',
          comment: '',
          image:''
        },
      }
    handleImage = async(e) => {
      if (e.target.files && e.target.files[0]) {
        const { data } = { ...this.state };
        let reader = new FileReader();
        reader.onload =  function(e) {
            data['image'] = reader.result
        };
        await reader.readAsDataURL(e.target.files[0]);
        await this.setState({ data })
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
        this.props.createRecord(data)
    }
  render() {
      const {success} = this.props
      if(success) {
        this.props.history.push('/records')
      }
    return (
      <section className="container-center create-record">
        <div className="card">
        <Alert message={this.props.errors} success={this.props.isError}  />
            <div className="conatiner">
              <img id="img-preview" />
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
                    <textarea id="mytextarea" onChange={this.handleInputChange} className="input-comment" name="comment" placeholder="Content here.."></textarea>
                </div>
                {/* <div className="input-group">
                    <button className="btn-primary">Get geolocation</button>
                </div> */}
                <div className="input-group">
                    <p id="geolocation-display"></p>
                </div>
                <div className="container-center">
                    <button id="create_btn" type="submit" onClick={this.handleSubmit}  className="btn-primary">{ this.props.loading? 'loading...': 'Create'}<i className="fa fa-fw fa-plus-square"></i></button>
                </div>
            </form>
        </div>
      </section>
    )
    
  }
}
CreateRecord.propTypes = {
    createRecord: propTypes.func.isRequired
  }
  
  CreateRecord.defaultValues = {
    loading: false
  }
  const mapStateToProps = state => {
    return {
      errors: state.recordsReducer.errors,
      loading: state.recordsReducer.loading,
      success: state.recordsReducer.success,
      records: state.recordsReducer.records
    }
  }
  
  export default connect(() => mapStateToProps, { createRecord })(withRouter(CreateRecord))